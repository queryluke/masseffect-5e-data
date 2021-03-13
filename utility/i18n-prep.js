const fs = require('fs')
const _ = require('lodash')
const YAML = require('yaml')
const fm = require('front-matter')

const setBonusCache = []
const bestiaryEntryCache = []


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
            fs.writeFileSync(`${factDir}/${id}.md`, yamlify(transformed.facts, ''))
        }
        if (typeof model.text !== 'undefined') {
            const textDir = `../text/en/${model.dir}`
            if (!fs.existsSync(textDir)){
                fs.mkdirSync(textDir);
            }
            fs.writeFileSync(`${textDir}/${id}.md`, yamlify(transformed.text.fm, transformed.text.body))
        }
    }
}

function yamlify (item, body = '') {
    let content = '---\n'
    content += YAML.stringify(item)
    content += `---\r\n${body}`
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
            mdBody = item[config.mdBody]
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
        mdBody: 'description',
        facts: ['type','armorType','cost','manu','image','notes','andromeda','set'],
        text: ['name', 'features'],
        slug: ['manu'],
        snake: ['type', 'armorType'],
        replaceKeys: [
            { from: 'armorType', to: 'placement' },
            { from: 'manu', to: 'manufacturer' },
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
        tSb.bonuses = tSb.bonuses.map(i => { return {threshold: i.threshold, text: i.text} })
        fs.writeFileSync(`${textDir}/${sb.id}.md`, yamlify(tSb))
        const fSb = _.cloneDeep(sb)
        fSb.bonuses = fSb.bonuses.map(i => { return {threshold: i.threshold, mechanics: []} })
        fs.writeFileSync(`${factDir}/${sb.id}.md`, yamlify(fSb))
    }
}


for (const m of models) {
    processModel(m)
}
processSetBonuses(setBonusCache)
