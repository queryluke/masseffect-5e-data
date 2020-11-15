const fs = require('fs')
const _ = require('lodash')
const YAML = require('yaml')
let path = `../data/mods`
let files = fs.readdirSync(path)
for (const file of files) {
    const fn = `${path}/${file}`
    if (_.endsWith(file, '.json')) {
        const item = require(fn)
        const feature = item.feature
        delete item.feature
        const text = '---\r\n' + YAML.stringify(item) + '\n---\r\n' + feature
        fs.writeFileSync(`../data/mods/${file.replace('.json','.md')}`, text)
        fs.unlinkSync(`../data/mods/${file}`)
    }
}
