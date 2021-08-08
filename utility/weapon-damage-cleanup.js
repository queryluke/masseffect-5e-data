const fs = require('fs')
const path = `../data/weapons`
const _ = require('lodash')
const YAML = require('yaml')
const fm = require('front-matter')
const files = fs.readdirSync(path)
for (const file of files) {
    const fc = fm(fs.readFileSync(`../data/weapons/${file}`, 'utf8'))
    let item = Object.assign(fc.attributes, {})
    if (item.damage && item.damage.dieCount) {
        item.damage.dieCount = parseInt(item.damage.dieCount)
    }
    if (item.damage && item.damage.dieType) {
        item.damage.dieType = parseInt(item.damage.dieType)
    }
    let content = '---\n'
    content += YAML.stringify(item)
    content += `---\r\n${fc.body}`
    fs.writeFileSync(`../data/weapons/${file}`, content)
}
