const fs = require('fs')
const _ = require('lodash')
const yaml = require('js-yaml')
const fm = require('front-matter')

const setBonusCache = []
const guideCache = []
const rulesCache = []

function extractBonus(text) {
    const split = text.split(':')
    const inParens = split[0].match(/\((.*?)\)/)[1]
    const parensSplit = inParens.split('of')
    return {
        max: parseInt((parensSplit[1].trim())),
        threshold: parseInt((parensSplit[0].trim())),
        text: split[1].trim()
    }
}

function generateId(text) {
    return text.replace(/\W/gi, '-').toLowerCase()
}

function processRecharge(text) {
    let recharge = false
    let uses = false
    if (text) {
        if (text.match(/recharge/i)) {
            const sp1 = text.split(' ')
            recharge = sp1[1].split('-')
        }
        if (text.match(/day/i)) {
            const sp1 = text.recharge.split('/')
            uses = {
                amount: parseInt(sp1[0]),
                perDay: true
            }
        }
    }
    return {
        recharge,
        uses
    }
}

function processModel(model) {
    const path = `../data/${model.dir}`
    const files = fs.readdirSync(path)
    const fFlow = model.fFlow || 4
    const tFlow = model.tFlow || 3

    for (const file of files) {
        const fn = `${path}/${file}`
        let item = false
        if (model.type === 'md') {
            const fc = fm(fs.readFileSync(fn, 'utf8'))
            item = Object.assign(fc.attributes, {})
            item.mdBody = fc.body
        } else {
            item = require(fn)
        }
        const id = file.replace(/.(md|json)$/, '')
        const transformed = transform(item, model, id)
        if (typeof model.facts !== 'undefined') {
            const factDir = `../newData/${model.outputDir || model.dir}`
            if (!fs.existsSync(factDir)){
                fs.mkdirSync(factDir);
            }
            fs.writeFileSync(`${factDir}/${id}.md`, yamlify(transformed.facts, fFlow, '', true))
        }
        if (typeof model.text !== 'undefined') {
            const textDir = `../text/en/${model.outputDir || model.dir}`
            if (!fs.existsSync(textDir)){
                fs.mkdirSync(textDir);
            }
            fs.writeFileSync(`${textDir}/${id}.md`, yamlify(transformed.text.fm, tFlow, transformed.text.body, false, typeof model.mdBody !== 'undefined'))
        }
    }
}

function yamlify (item, flow = 3, body = '', condense = false, wrap = false) {
    let content = '---\n'
    content += yaml.dump(item, {flowLevel: flow, condenseFlow: condense})
    if (wrap) {
        content += `---\r\n${body.replace(/.{80,100}\s/g, "$&\n")}`
    } else {
        content += `---\r\n${body}`
    }
    return content
}

function rekey(key, replacements) {
    if (typeof  replacements === 'undefined') {
        return key
    }
    const renameTo = replacements.find(i => i.from === key)
    return renameTo ? renameTo.to : key
}

function transform (item, config, id) {
    const tFacts = {}
    if (typeof config.facts !== 'undefined') {
        const fItem = config.factTransform ? config.factTransform(_.cloneDeep(item), id) : _.cloneDeep(item)
        for (const fact of config.facts) {
            const slugify = config.slug && config.slug.includes(fact)
            const snakify = config.snake && config.snake.includes(fact)
            tFacts[rekey(fact, config.replaceKeys)] = slugify ? _.kebabCase(fItem[fact])
                : snakify ? _.snakeCase(fItem[fact])
                    : fItem[fact]
        }
    }

    const tText = {}
    let mdBody = item.mdBody || ''
    if (typeof config.text !== 'undefined') {
        const tItem = config.textTransform ? config.textTransform(_.cloneDeep(item), id) : _.cloneDeep(item)
        for (const t of config.text) {
            tText[rekey(t, config.replaceKeys)] = tItem[t]
        }
        if (config.type === 'json' && config.mdBody) {
            mdBody = tItem[config.mdBody]
        }
    }
    return {
        text: {
            fm: tText,
            body: mdBody
        },
        facts: tFacts
    }
}

const models = [
    {
        dir: 'armor',
        type: 'json',
        mdBody: 'features',
        facts: ['type','armorType','cost','manu','image','notes','andromeda','set'],
        text: ['name', 'description'],
        slug: ['manu'],
        snake: ['type', 'armorType'],
        replaceKeys: [
            { from: 'armorType', to: 'placement' },
            { from: 'manu', to: 'manufacturer' },
            { from: 'notes', to: 'tags' },
            { from: 'description', to: 'flavor' },
        ],
        textTransform: (item, id) => {
            if (item.setBonus && item.setBonus.length > 0) {
                let set = id.split('-')
                set.pop()
                set = set.join('-')
                if (!setBonusCache.find(i => i.name === set)) {
                    const setBonus = {
                        id: set,
                        bonuses: [],
                        max: 0
                    }
                    for (const v of item.setBonus) {
                        const ext = extractBonus(v)
                        setBonus.max = ext.max
                        setBonus.bonuses.push(
                            {
                                threshold: ext.threshold,
                                text: ext.text,
                                mechanics: []
                            }
                        )
                    }
                    setBonusCache.push(setBonus)
                }
            }
            item.features = item.features.map(i => `- ${i}`).join("\n")
            return item
        },
        factTransform: (item, id) => {
            if (item.setBonus && item.setBonus.length > 0) {
                const set = id.split('-')
                set.pop()
                item.set = set.join('-')
            } else {
                item.set = false
            }
            item.notes = item.notes.map(i => _.snakeCase(i))
            return item
        }
    },
    {
        dir: 'attributions',
        type: 'json',
        facts: ['title','path','attribution','source'],
    },
    {
        dir: 'backgrounds',
        type: 'md',
        facts: ['starting_credits'],
        text: ['name'],
        replaceKeys: [
            { from: 'starting_credits', to: 'startingCredits' }
        ]
    },
    {
        dir: 'boh-stats-by-cr',
        outputDir: 'npc-stats',
        type: 'json',
        facts: ['cr','normalized','profBonus','ac','hp','attack','damage','dc','save','xp'],
        factTransform(item, id) {
            for (const i of Object.entries(item)){
                if (i[0] === 'cr') {
                    continue
                }
                item[i[0]] = parseInt(i[1].replace(',',''))
            }
            return item
        }
    },
    {
        dir: 'character-progression',
        type: 'json',
        facts: ['level','xp','bonus'],
        replaceKeys: [
            { from: 'bonus', to: 'profBonus'}
        ]
    },
    {
        dir: 'class-features',
        type: 'md',
        facts: ['level','class','subclass'],
        text: ['name'],
        replaceKeys: [
            { from: 'class', to: 'klass'}
        ]
    },
    {
        dir: 'classes',
        type: 'md',
        facts: ['primaryAbility', 'hitDice', 'profs', 'startingEquipment', 'progression'],
        text: ['name', 'snippet', 'profs', 'startingEquipment'],
        replaceKeys: [
            { from: 'hitDice', to: 'hitDie'}
        ],
        factTransform(item, id) {
            item.primaryAbility = item.primaryAbility.toLowerCase().substr(0,3)
            item.profs = {
                armor: {},
                weapon: {},
                tool: {},
                skill: {},
                savingThrow: {}
            }
            for (const type of ['armorProfs', 'toolProfs', 'weaponProfs', 'skillProfs', 'savingThrows']) {
                let key = type.replace('Profs', '')
                if (key === 'savingThrows') {
                    key = 'savingThrow'
                }
                if (item[type].mandatory || item[type].options) {
                    if (item[type].mandatory) {
                        item.profs[key].has = item[type].mandatory.map(i => {
                            if (type === 'armorProfs') {
                                return i.replace('-armor','')
                            } else if (type  === 'savingThrows') {
                                return i.substr(0, 3)
                            } else {
                                return i
                            }
                        })
                    }
                    if (item[type].options) {
                        item.profs[key].choices = {
                            items: item[type].options.items,
                            count: item[type].options.count
                        }
                    }
                } else {
                    item.profs[key] = false
                }
            }
            item.startingEquipment = item.startingEquipment.map((i) => {
                const se = {}
                if (i.mandatory) {
                    se.has = i.mandatory
                }
                if (i.options) {
                    se.choices = {
                        items: i.options.items,
                        count: i.options.count
                    }
                }
                return se
            })
            item.progression = {
                subclass: item.subclassProgression.level,
                abi: item.abiLevels,
                columns: []
            }
            const collectPs = []
            for (const pc of item.progressionColumns) {
                if (pc.ps) {
                    collectPs.push(pc.values)
                } else {
                    const prog = {
                        label: _.snakeCase(pc.name)
                    }
                    if (pc.values) {
                        prog.values = pc.values
                    }
                    item.progression.columns.push(prog)
                }
            }
            if (collectPs.length > 0) {
                item.progression.columns.push({
                    label: 'power_slots',
                    values: collectPs
                })
            }
            return item
        },
        textTransform(item, id) {
            item.profs = {
                armor: {
                    text: item.armorProfs.text
                },
                weapon: {
                    text: item.weaponProfs.text
                },
                tool: {
                    text: item.toolProfs.text
                },
                skill: {
                    text: item.skillProfs.text
                },
                savingThrow: {
                    text: item.savingThrows.text
                }
            }
            for (const type of ['armorProfs', 'toolProfs', 'weaponProfs', 'skillProfs', 'savingThrows']) {
                delete item[type]
            }
            item.startingEquipment = item.startingEquipment.map((i) => {
                return {
                    text: i.text
                }
            })
            return item
        }

    },
    {
        dir: 'conditions',
        type: 'md',
        text: ['name']
    },
    {
        dir: 'feats',
        type: 'md',
        facts: ['mechanics', 'new'],
        text: ['name', 'note', 'prerequisite'],
        factTransform(item) {
            item.mechanics = []
            return item
        }
    },
    {
        dir: 'gear',
        type: 'md',
        facts: ['stats', 'rarity', 'stats', 'type', 'cost', 'weight'],
        snake: ['rarity', 'type'],
        text: ['name'],
        replaceKeys: [
            { from: 'stats', to: 'mechanics' }
        ]
    },
    {
        dir: 'gmg',
        type: 'md',
        outputDir: 'guide',
        text: ['title'],
        textTransform(item, id) {
            guideCache.push({
                id,
                section: item.section,
                order: item.order
            })
            return item
        }
    },
    {
        dir: 'mods',
        type: 'md',
        facts: ['rarity', 'type', 'cost', 'manu', 'tags', 'placement', 'availability'],
        slug: ['manu'],
        snake: ['placement', 'type', 'rarity'],
        text: ['name', 'description'],
        replaceKeys: [
            { from: 'description', to: 'flavor'},
            { from: 'manu', to: 'manufacturer'}
        ],
        factTransform(item, id) {
            item.tags = item.notes.map(i => _.snakeCase(i))
            item.availability = item.availability.map(i => _.snakeCase(i))
            return item
        }
    },
    {
        dir: 'powers',
        type: 'md',
        facts: ['level', 'type', 'attack', 'save', 'effect', 'damageType', 'castingTimes',
            'duration', 'instant', 'concentration', 'range', 'aoe', 'detonates', 'primes', 'advancements'],
        text: ['name', 'description', 'reactionQualifier', 'advancements'],
        replaceKeys: [
            { from: 'effect', to: 'tags'},
            { from: 'availableClasses', to: 'classes'},
            { from: 'advancementOptions', to: 'advancements'}
        ],
        factTransform(item, id) {
            let attack = {
                melee: false,
                ranged: false
            }
            let save = {
                dex: false,
                str: false,
                con: false,
                int: false,
                wis: false,
                cha: false
            }
            if (item.attackType !== null) {
                for (const t of item.attackType) {
                    if (/melee/i.test(t)) {
                        attack.melee = true
                    }
                    if (/ranged/i.test(t)) {
                        attack.ranged = true
                    }
                    if (/dex/i.test(t)) {
                        save.dex = true
                    }
                    if (/str/i.test(t)) {
                        save.str = true
                    }
                    if (/con/i.test(t)) {
                        save.con = true
                    }
                    if (/wis/i.test(t)) {
                        save.wis = true
                    }
                    if (/int/i.test(t)) {
                        save.int = true
                    }
                    if (/cha/i.test(t)) {
                        save.cha = true
                    }
                }
            }
            const castingTimes = []
            if (/bonus/i.test(item.castingTime)) {
                castingTimes.push('bonus_action')
            }
            if (/reaction/i.test(item.castingTime)) {
                castingTimes.push('reaction')
            }
            if (item.castingTime === 'Action') {
                castingTimes.push('action')
            }
            if (item.castingTime === 'Attack') {
                castingTimes.push('attack')
            }
            item.attack = attack
            item.save = save
            item.castingTimes = castingTimes
            if (item.duration === 'Instant') {
                item.instant = true
                item.duration = false
            } else {
                item.instant = false
                const dirsplit = item.duration.split(' ')
                item.duration = {
                    length: parseInt(dirsplit[0]),
                    time: dirsplit[1]
                }
            }
            item.range = item.distance.range.toString().toLowerCase() === 'self'
                ? 0
                : item.distance.range.toString().toLowerCase() === 'touch'
                    ? 1
                    : item.distance.range
            item.aoe = false
            if (item.distance.aoeType) {
                item.aoe = {
                    type: item.distance.aoeType,
                    size: item.distance.aoeDistance
                }
            }
            item.detonates = item.detonates ? true : false
            item.primes = item.primes ? item.primes : false
            item.advancements = false
            if (item.advancementOptions.length > 0) {
                item.advancements = {}
                for (const adv of item.advancementOptions) {
                    item.advancements[generateId(adv.name)] = {
                        mechanics: []
                    }
                }
            }
            return item
        },
        textTransform (item, id) {
            item.reactionQualifier = false
            if (/reaction/i.test(item.castingTime)) {
                item.reactionQualifier = item.castingTime.split(',')[1]
            }
            item.advancements = false
            if (item.advancementOptions.length > 0) {
                item.advancements = {}
                for (const adv of item.advancementOptions) {
                    item.advancements[generateId(adv.name)] = {
                        name: adv.name,
                        text: adv.description
                    }
                }
            }
            return item
        }
    },
    {
        dir: 'species',
        type: 'md',
        facts: ['abilityScoreIncrease', 'speed', 'bodyImg', 'img', 'randomDimensions'],
        text: ['name', 'alignment', 'size', 'snippet', 'age'],
        fFlow: 5,
        factTransform(item, id) {
            const rdwId = id === 'angara' ? 'angaran' : id === 'hanar' ? 'hanar-length' : id
            const rdw = JSON.parse(fs.readFileSync(`../data/random-height-weight/${rdwId}.json`, 'utf8'))
            item.randomDimensions = {
                height: {
                    base: {
                        imperial: (parseInt(rdw.base.split("'")[0]) * 12) + parseInt(rdw.base.split("'")[1].replace('"','')),
                        metric: parseInt(rdw.baseCm)
                    },
                    mod: {
                        imperial: {
                            dieCount: parseInt(rdw.heightModifier.split('d')[0]),
                            dieType: parseInt(rdw.heightModifier.split('d')[1])
                        },
                        metric: {
                            dieCount: parseInt(rdw.heightModifierCm.split('d')[0]),
                            dieType: parseInt(rdw.heightModifierCm.split('d')[1])
                        }
                    }
                },
                weight: {
                    base: {
                        imperial: parseInt(rdw.baseWeight.split(" ")[0]),
                        metric: parseInt(rdw.weightKg)
                    },
                    mod: {
                        imperial: {
                            dieCount: parseInt(rdw.weightModifier.split('d')[0]),
                            dieType: parseInt(rdw.weightModifier.split('d')[1])
                        },
                        metric: {
                            dieCount: parseInt((rdw.weightModifierKg.split('d')[0] || '').replace('(','')),
                            dieType: parseInt((rdw.weightModifierKg.split('d')[1] || '').split(' ')[0]),
                            divisor: parseInt((rdw.weightModifierKg.split('/')[1] || '').replace(')','').trim())
                        }
                    }
                },
            }
            if (id === 'hanar') {
                item.randomDimensions.length = item.randomDimensions.height
                const hh = JSON.parse(fs.readFileSync(`../data/random-height-weight/hanar-height.json`, 'utf8'))
                item.randomDimensions.height = {
                    base: {
                        imperial: (parseInt(hh.base.split("'")[0]) * 12) + parseInt(rdw.base.split("'")[1].replace('"','')),
                        metric: parseInt(hh.baseCm)
                    },
                    mod: {
                        imperial: {
                            dieCount: parseInt(hh.heightModifier.split('d')[0]),
                            dieType: parseInt(hh.heightModifier.split('d')[1])
                        },
                        metric: {
                            dieCount: parseInt(hh.heightModifierCm.split('d')[0]),
                            dieType: parseInt(hh.heightModifierCm.split('d')[1])
                        }
                    }
                }
            }
            return item
        }
    },
    {
        dir: 'rules',
        type: 'md',
        outputDir: 'manual',
        text: ['title'],
        textTransform(item, id) {
            rulesCache.push({
                id,
                section: item.section,
                change: item.change,
                is_new: item.new,
                order: item.order
            })
            return item
        }
    },
    {
        dir: 'ship-upgrades',
        type: 'json',
        mdBody: 'effect',
        text: ['name', 'system', 'prerequisite', 'cost']
    },
    {
        dir: 'skills',
        type: 'json',
        mdBody: 'description',
        facts: ['link', 'new'],
        text: ['name'],
        replaceKeys: [
            { from: 'new', to: 'is_new'}
        ],
        factTransform (item, id) {
          item.link = item.link.toLowerCase().substr(0, 3)
          return item
        }
    },
    {
        dir: 'species-variants',
        type: 'md',
        facts: ['species'],
        text: ['name']
    },
]


function processSetBonuses (setBonuses) {
    const textDir = `../text/en/set-bonuses`
    if (!fs.existsSync(textDir)){
        fs.mkdirSync(textDir);
    }
    const factDir = `../newData/set-bonuses`
    if (!fs.existsSync(factDir)){
        fs.mkdirSync(factDir);
    }
    for (const sb of setBonusCache) {
        const tSb = _.cloneDeep(sb)
        tSb.bonuses = tSb.bonuses.map(i => { return {text: i.text} })
        delete tSb.max
        delete tSb.id
        fs.writeFileSync(`${textDir}/${sb.id}.md`, yamlify(tSb, 4))
        const fSb = _.cloneDeep(sb)
        delete fSb.id
        fSb.bonuses = fSb.bonuses.map(i => { return {threshold: i.threshold, mechanics: []} })
        fs.writeFileSync(`${factDir}/${sb.id}.md`, yamlify(fSb, 4))
    }
}

function processGuides (guides, file, rules = false) {
    const sections = []
    const grouped = _.groupBy(guides, 'section')
    for (const e of Object.entries(grouped)) {
        const section = {
            title: _.snakeCase(e[0]),
            sections: e[1].sort((a, b) => a.order > b.order ? 1 : -1).map(i => {
                const r = {
                    id: i.id,
                    sections: []
                }
                if (rules) {
                    r.is_change = i.change || false
                    r.is_new = i.is_new || false
                }
                return r
            })
        }
        sections.push(section)
    }
    fs.writeFileSync(`../newData/${file}.md`, yamlify(sections, 4))
}


for (const m of models) {
    processModel(m)
}
processSetBonuses(setBonusCache)
processGuides(guideCache, 'guides')
processGuides(rulesCache, 'manual', true)
