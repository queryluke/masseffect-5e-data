const fs = require('fs')
const path = `../data/weapons`
const _ = require('lodash')
const files = fs.readdirSync(path)
for (const file of files) {
    const fn = `${path}/${file}`
    const item = require(fn)
    item.range = Math.round((parseInt(item.range, 10) / 2) * 5)
    fs.writeFileSync(fn, JSON.stringify(item, null, 2))
}
