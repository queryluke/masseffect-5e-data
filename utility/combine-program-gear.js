const fs = require('fs')
const _ = require('lodash')
const YAML = require('yaml')
const fm = require('front-matter')

let files = fs.readdirSync('../data/programs')
for (const file of files) {
    const fc = fm(fs.readFileSync(`../data/programs/${file}`, 'utf8'))
    const item = Object.assign(fc.attributes, {})
    let fn = _.kebabCase(item.name)
    item.stats = {
        installation: item.installation,
    }
    delete(item.id)
    // name
    item.rarity = _.startCase(item.rarity)
    delete(item.installation)
    item.type = 'Omni-tool Program'
    item.cost = 0
    item.weight = 0

    let content = '---\n'
    content += YAML.stringify(item)
    content += `---\r\n${fc.body}`
    fs.writeFileSync(`../data/gear/${fn}.md`, content)
}
