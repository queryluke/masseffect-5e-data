const fs = require('fs')
const _ = require('lodash')
const YAML = require('yaml')
const yaml = require('js-yaml')
const fm = require('front-matter')
const files = fs.readdirSync('../data/bestiary')
for (const file of files) {
    const dataFc = fm(fs.readFileSync(`../data/bestiary/${file}`, 'utf8'))
    const textFc = fm(fs.readFileSync(`../text/bestiary/${file}`, 'utf8'))
    let dItem = Object.assign(dataFc.attributes, {})
    let tItem = Object.assign(textFc.attributes, {})
    const body = tItem.body

    if (dItem.entries) {
        if (dItem.entries.features) {
            const transformed = convertToArray(dItem.entries.features, tItem.entries.features)
            dItem.entries.features = transformed.data
            tItem.entries.features = transformed.text
        }
        if (dItem.entries.actions) {
            const transformed = convertToArray(dItem.entries.features, tItem.entries.actions)
            dItem.entries.actions = transformed.data
            tItem.entries.actions = transformed.text
        }
        if (dItem.entries.reactions) {
            const transformed = convertToArray(dItem.entries.features, tItem.entries.reactions)
            dItem.entries.reactions = transformed.data
            tItem.entries.reactions = transformed.text
        }
        if (dItem.entries.legendary) {
            const transformed = convertToArray(dItem.entries.legendary.actions, tItem.entries.legendary.actions)
            dItem.entries.legendary.actions = transformed.data
            tItem.entries.legendary.actions = transformed.text
        }
    }

    let content = '---\n'
    content += yaml.dump(dItem, {flowLevel: 5})
    content += `---\r\n`
    fs.writeFileSync(`../data/bestiary/${file}`, content)

    content = '---\n'
    content += yaml.dump(tItem, {flowLevel: 5})
    content += `---\r\n${body}`
    fs.writeFileSync(`../data/text/${file}`, content)
}

function convertToArray(data, text) {
    const dataArray = []
    const textArray = []
    for (const key of Object.keys(data)) {
        const obj = JSON.parse(JSON.stringify(data[key]))
        obj.id = key
        if (obj.ref === 'weapon') {
            obj.weaponId = key
        }
        dataArray.push(obj)
    }
    for (const key of Object.keys(text)) {
        const obj = JSON.parse(JSON.stringify(text[key]))
        obj.id = key
        textArray.push(obj)
    }
    return { data, text }
}
