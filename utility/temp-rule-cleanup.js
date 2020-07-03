const fs = require('fs')
const _ = require('lodash')
const YAML = require('yaml')
const fm = require('front-matter')
const sections = {
    '01': 'intro',
    '02': 'character-creation',
    '03': 'beyond-first-level',
    '04': 'using-ability-scores',
    '05': 'missions',
    '06': 'equipment',
    '07': 'finances',
    '08': 'vehicles',
    '09': 'combat',
    '10': 'powercasting',
    '11': 'monsters',
}
const files = fs.readdirSync('../rules')
for (const file of files) {
    const fc = fm(fs.readFileSync(`../rules/${file}`, 'utf8'))
    let item = Object.assign(fc.attributes, {})
    const fileParts = file.split('-')
    item.section = sections[fileParts[0]]
    item.order = Number.parseInt(fileParts[1])
    let fn = _.kebabCase(item.title)
    let content = '---\n'
    content += YAML.stringify(item)
    content += `---\r\n${fc.body}`
    fs.writeFileSync(`../data/rules/${fn}.md`, content)
}
