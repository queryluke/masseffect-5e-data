const fs = require('fs')
const _ = require('lodash')
const YAML = require('yaml')
const fm = require('front-matter')

const setBonusCache = {}


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

function processModel(model) {
    const path = `../oldData/${model.dir}`
    const files = fs.readdirSync(path)
    const textDir = `../text/en/${model.dir}`
    if (!fs.existsSync(textDir)){
        fs.mkdirSync(textDir);
    }
    const factDir = `../data/${model.dir}`
    if (!fs.existsSync(factDir)){
        fs.mkdirSync(factDir);
    }

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
        fs.writeFileSync(`${textDir}/${id}.md`, yamlify(transformed.text.fm, transformed.text.body))
        fs.writeFileSync(`${factDir}/${id}.md`, yamlify(transformed.text.fm, ''))
    }
}

function yamlify (item, body = '') {
    let content = '---\n'
    content += YAML.stringify(item)
    content += `---\r\n${body}`
    return content
}

function rekey(key, replacements) {
    const renameTo = replacements.find(i => i.from === key)
    return renameTo || key
}

function transform (item, config, id) {
    const tFacts = {}
    const fItem = config.factTransform(_.cloneDeep(item), id)
    for (const fact of config.facts) {
        const slugify = config.ignoreSlugify.includes(fact)
        tFacts[rekey(fact, config.replaceKeys)] = !slugify ? fItem[fact] : _.kebabCase(fItem[fact])
    }

    const tText = {}
    const tItem = config.textTransform(_.cloneDeep(item), id)
    for (const t of config.text) {
        tText[rekey(t, config.replaceKeys)] = tItem[t]
    }
    let mdBody = item.mdBody || ''
    if (config.type === 'json' && config.mdBody) {
        mdBody = item[config.mdBody]
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
        facts: ['type','armorType','cost','images','manu','image','notes','andromeda','set'],
        text: ['name', 'features'],
        ignoreSlugify: ['image'],
        replaceKeys: [
            { from: 'armorType', to: 'placement' },
            { from: 'manu', to: 'manufacturer' },
        ],
        textTransform (item, id) {
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
        factTransform (item, id) {
            if (item.setBonus && item.setBonus.length > 0) {
                const set = id.split('-')
                set.pop()
                item.set = set.join('-')
            } else {
                item.set = false
            }
            return item
        }
    }
]



for (const m of models) {
    processModel(m)
}
