const fs = require('fs')
const path = `../data/weapons`
const textPath = '../text/en/weapons'
const _ = require('lodash')
const YAML = require('yaml')
const fm = require('front-matter')
const files = fs.readdirSync(path)
for (const file of files) {
    const fc = fm(fs.readFileSync(`${path}/${file}`, 'utf8'))
    const textFc = fm(fs.readFileSync(`${textPath}/${file}`, 'utf8'))
    let item = Object.assign(fc.attributes, {})
    let textItem = Object.assign(textFc.attributes, {})
    let slots = item.properties.includes('two-handed') ? 2 : textItem.name.toLowerCase().startsWith('omni') ? 0 : 1
    item = {...textItem, name: textItem.name.trim(), ...item, slots }
    let content = '---\n'
    content += YAML.stringify(item)
    content += `---\r\n${textFc.body}`
    fs.writeFileSync(`../data/weapons/${file}`, content)
}
