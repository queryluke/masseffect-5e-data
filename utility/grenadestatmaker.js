const fs = require('fs')
const _ = require('lodash')
const YAML = require('yaml')
const fm = require('front-matter')

const files = fs.readdirSync('../data/gear')
for (const file of files) {
    const fc = fm(fs.readFileSync(`../data/gear/${file}`, 'utf8'))
    let item = Object.assign(fc.attributes, {})
    if (item.type !== 'Grenade') {
        continue
    }

    const startIndex = fc.body.indexOf('Mark|')
    if (startIndex > -1) {
        const markTable = fc.body.substr(startIndex)
        const rows = markTable.split('\n')
        const attributes = rows[0].split('|').map(i => i.toLocaleLowerCase())
        const statRows = rows.slice(2)
        const stats = []
        for (const row of statRows) {
            const cols = row.split('|')
            if (cols.length > 1) {
                let obj = {}
                for (let i=0; i<attributes.length; i++) {

                    if (['mark','damage','rarity'].includes(attributes[i])) {
                        obj[attributes[i]] = cols[i]
                    }
                }
                stats.push(obj)
            }
        }
        item.stats.marks = stats
    }
    delete item.stats.damage
    delete item.id
    let content = '---\n'
    content += YAML.stringify(item)
    content += `---\r\n${fc.body}`
    fs.writeFileSync(`../data/gear/${file}`, content)
}
