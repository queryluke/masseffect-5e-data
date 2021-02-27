const fs = require('fs')
const path = `../data/weapons`
const _ = require('lodash')
const files = fs.readdirSync(path)
for (const file of files) {
    const fn = `${path}/${file}`
    const item = require(fn)
    item.weight = Math.round((parseInt(item.weight, 10) * 2.205))
    fs.writeFileSync(fn, JSON.stringify(item, null, 2))
}
