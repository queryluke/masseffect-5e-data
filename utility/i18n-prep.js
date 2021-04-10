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
            const sp1 = text.split('/')
            uses = {
                uses: parseInt(sp1[0]),
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
            'duration', 'instant', 'concentration', 'range', 'aoe', 'detonates', 'primes', 'advancements', 'availableClasses'],
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
        facts: ['abilityScoreIncrease', 'speed', 'bodyImg', 'img', 'randomDimensions', 'homeworld', 'galaxy', 'language'],
        text: ['name', 'alignment', 'size', 'snippet', 'age', 'skinColor', 'eyeColor', 'bioticPotential'],
        fFlow: 5,
        factTransform(item, id) {
            const rdwId = id === 'hanar' ? 'hanar-length' : id
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
        factTransform (item, id) {
          item.link = item.link.toLowerCase().substr(0, 3)
          item.is_new = item.new || false
          return item
        }
    },
    {
        dir: 'species-variants',
        type: 'md',
        facts: ['species'],
        text: ['name']
    },
    {
        dir: 'subclasses',
        type: 'md',
        facts: ['class'],
        text: ['name'],
        replaceKeys: [
            { from: 'class', to: 'klass' }
        ]
    },
    {
        dir: 'tool-profs',
        type: 'md',
        facts: ['type'],
        text: ['name'],
        factTransform(item, it) {
            item.type = item.type || false
            return item
        }
    },
    {
        dir: 'traits',
        type: 'md',
        facts: ['species', 'mechanics'],
        text: ['name'],
        factTransform(item, id) {
            item.mechanics = item.mechanics || []
            return item
        }
    },
    {
        dir: 'vehicles',
        type: 'md',
        facts: ['type', 'subtype', 'size', 'ac', 'hp', 'sp', 'speed', 'range', 'crew', 'cargo', 'systems', 'weapons', 'cr', 'cost', 'image', 'createdBy'],
        text: ['name'],
        factTransform(item, id) {
            item.type = item.vehicle.type
            item.subtype = item.vehicle.subtype || false
            const rd = item.range.split(' ')
            if (rd[1]) {
                item.range = {
                    distance: parseInt(rd[0]),
                    units: 'ftlu'
                }
            } else {
                item.range = {
                    distance: parseInt(item.range.replace('km','')),
                    units: 'km'
                }
            }
            return item
        }
    },
    {
        dir: 'weapon-properties',
        type: 'json',
        mdBody: 'description',
        facts: ['link', 'is_new'],
        text: ['name'],
        factTransform(item, id) {
            item.is_new = item.new || false
            return item
        }
    },
    {
        dir: 'weapons',
        type: 'json',
        mdBody: 'notes',
        facts: ['rarity', 'type', 'cost', 'manufacturer', 'weight', 'heat', 'damage', 'range', 'image', 'andromeda', 'properties'],
        snake: ['rarity', 'type', 'npcHit', 'npcMiss'],
        slug: ['manufacturer'],
        text: ['name'],
        factTransform(item, id) {
            const dmg = {
                dieCount: item.damage.split('d')[0],
                dieType: item.damage.split('d')[1],
                type: item.dmgType
            }
            item.damage = dmg
            item.properties = item.properties.map(i => _.kebabCase(i))
            return item
        },
        textTransform(item, id) {
            item.notes = item.notes || ''
            return item
        }
    },
    {
        dir: 'bestiary',
        type: 'json',
        facts: ['image', 'type', 'unit', 'alignment', 'profBonus', 'ac', 'hp', 'abilityScores', 'irv', 'savingThrows',
            'senses', 'size', 'skills', 'speed', 'entries', 'powercasting'],
        slug: ['type', 'unit', 'size'],
        text: ['name', 'entries'],
        tFlow: 5,
        factTransform: (item, id) => {
            item.ac = parseInt(item.ac, 10)
            const entries = {
                features: {},
                actions: {},
                legendary: {}
            }
            // features
            for (const i of item.features) {
                const featureId = generateId(i.name)
                const {recharge, uses} = processRecharge(i.recharge)
                if (recharge || uses) {
                    entries.features[featureId] = {}
                    if (recharge) {
                        entries.features[featureId].recharge = recharge
                    }
                    if (uses) {
                        entries.features[featureId].uses = uses.uses
                        entries.features[featureId].perDay = uses.perDay
                    }
                }
            }
            // actions
            for (const i of item.actions) {
                // weapon
                if (i.type === 'weapon') {
                    entries.actions[i.id] = {
                        ref: 'weapon'
                    }
                    continue
                }
                // grenade
                if (/grenade/i.test(i.name)) {
                    const gName = i.name.split(' ')
                    const gLevel = gName.pop()
                    const gId = generateId(gName.join(' '))
                    const {uses} = processRecharge(i.recharge)
                    entries.actions[gId] = {
                        ref: 'grenade',
                        mark: gLevel.toLowerCase(),
                        uses: uses.uses
                    }
                    continue
                }
                const actionId = generateId(i.name)
                const {recharge, uses} = processRecharge(i.recharge)
                // standard
                if (i.type === 'standard') {
                    if (recharge || uses) {
                        entries.actions[actionId] = {
                            dc: false,
                            save: false
                        }
                        if (recharge) {
                            entries.actions[actionId].recharge = recharge
                        }
                        if (uses) {
                            entries.actions[actionId].uses = uses.uses
                            entries.actions[actionId].perDay = uses.perDay
                        }
                    }
                    continue
                }
                // weapon attack
                if (!i.hit.startsWith('The')) {
                    const hitSplit = i.hit.split('.')
                    const damage = hitSplit[0]
                    const damageArray = damage.split('and').map(i => {
                        const retObj = {
                            dieCount: null,
                            dieType: null,
                            mod: null,
                            type: null
                        }
                        const trimmed = i.trim()
                        const damageMatch = trimmed.match(/(\(.*?\))/)
                        if (damageMatch) {
                            const spl = damageMatch[1].replace('(','').replace(')','').split(' ')[0].split('d')
                            retObj.dieCount = spl[0]
                            retObj.dieType = spl[1]
                        }
                        const typeMatch = trimmed.match(/\) (.*?) dam/)
                        if (typeMatch) {
                            retObj.type = typeMatch[1]
                        }
                    })
                    entries.actions[actionId] = {
                        attack: i.type,
                        range: i.range || false,
                        dc: false,
                        save: false,
                        damage: damageArray,
                    }
                }
            }

            // legendary
            for (const i of item.legendaryActions) {
                const legendaryId = generateId(i.name)
                entries.legendary[legendaryId] = {
                    cost: i.cost
                }
            }

            // cleanup
            if (_.isEmpty(entries.features)) {
                delete entries.features
            }
            if (_.isEmpty(entries.actions)) {
                delete entries.actions
            }
            if (_.isEmpty(entries.legendary)) {
                delete entries.legendary
            }

            item.entries = entries

            // alignment
            item.alignment = item.alignment.split(' ').map(i => i.substr(0,1).toLowerCase()).join('')

            // resistances....
            const irv = {
                imm: {
                    conditions: [],
                    damage: []
                },
                res: [],
                vul: []
            }
            if (item.conditionImmunities && item.conditionImmunities.length > 0) {
                irv.imm.conditions = item.conditionImmunities
            } else {
                delete irv.imm.conditions
            }
            if (item.damageImmunities && item.damageImmunities.length > 0) {
                irv.imm.damage = item.damageImmunities
            } else {
                delete irv.imm.damage
            }
            if (item.damageResistances && item.damageResistances.length > 0) {
                irv.res = item.damageResistances
            } else {
                delete irv.res
            }
            if (item.damageVulnerabilities && item.damageVulnerabilities.length > 0) {
                irv.vul = item.damageVulnerabilities
            } else {
                delete irv.vul
            }

            // senses
            const senses = {}
            for (const sense of item.senses) {
                senses[sense.sense] = sense.range
            }
            if (!_.isEmpty(senses)) {
                item.senses = senses
            }

            // skills
            item.skills = item.skills.map(i => _.snakeCase(i))

            // speed
            const speed = {}
            for (const s of item.speed) {
                speed[s.type] = s.range
            }
            if (!_.isEmpty(speed)) {
                item.speed = speed
            }

            // hp
            item.hp = { dieCount: item.hp.numDice, dieType: item.hp.die }

            // powercasting
            const powercasting = {}
            if (item.powercasting) {
                powercasting.mod = item.powercasting.mod
                if (item.powercasting.level === 'innate') {
                    powercasting.innate = []
                    for (const p of item.powercasting.powerList) {
                        const perDay = p.perDay.toLowerCase() === 'at will' ? 'at-will' : parseInt(p.perDay.split('/')[0])
                        for (const power of p.powers) {
                            const toPush = {
                                id: power.id,
                                perDay
                            }
                            if (power.higherLevel) {
                                toPush.level = power.higherLevel
                            }
                            powercasting.innate.push(toPush)
                        }
                    }
                } else {
                    powercasting.casterLevel = item.powercasting.level
                    powercasting.casterType = 'full'
                    powercasting.list = item.powercasting.powerList
                }
            }
            if (!_.isEmpty(powercasting)) {
                item.powercasting = powercasting
            }
            return item
        },
        textTransform: (item, id) => {
            const entries = {
                features: {},
                actions: {},
                legendary: {},
                reactions: {}
            }
            // features
            for (const i of item.features) {
                const featureId = generateId(i.name)
                entries.features[featureId] = {
                    name: i.name,
                    text: i.description
                }
            }

            if (item.barrier) {
                entries.features.barrier = {
                    name: 'Barrier',
                    text: 'TODO: Write barrier text'
                }
            }

            // actions
            for (const i of item.actions) {
                // weapon
                if (i.type === 'weapon') {
                    continue
                }
                // grenade
                if (/grenade/i.test(i.name)) {
                    continue
                }
                const actionId = generateId(i.name)
                // standard
                if (i.type === 'standard') {
                    entries.actions[actionId] = {
                        name: i.name,
                        text: i.description
                    }
                    continue
                }
                // attack
                const hitSplit = i.hit.split('.')
                entries.actions[actionId] = {
                    name: i.name
                }
                if (hitSplit[1]) {
                    entries.actions[actionId].hit = hitSplit[1]
                }
                if (i.miss) {
                    entries.actions[actionId].miss = i.miss
                }
            }

            // legendary
            for (const i of item.legendaryActions) {
                const legendaryId = generateId(i.name)
                entries.legendary[legendaryId] = {
                    name: i.name,
                    text: i.text
                }
            }

            // reactions
            for (const i of item.reactions) {
                const reactionId = generateId(i.name)
                entries.reactions[reactionId] = {
                    name: i.name,
                    text: i.text
                }
            }

            // cleanup
            if (_.isEmpty(entries.features)) {
                delete entries.features
            }
            if (_.isEmpty(entries.actions)) {
                delete entries.actions
            }
            if (_.isEmpty(entries.legendary)) {
                delete entries.legendary
            }
            if (_.isEmpty(entries.reactions)) {
                delete entries.reactions
            }

            item.entries = entries

            return item
        }
    }
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
// processGuides(guideCache, 'guides-index')
// processGuides(rulesCache, 'manual-index', true)
