const fs = require('fs')
const path = `../data/weapons`
const _ = require('lodash')
const files = fs.readdirSync(path)
for (const file of files) {
    const fn = `${path}/${file}`
    const item = require(fn)
    item.cost = Number.parseInt(item.cost, 10)
    item.weight = Number.parseInt(item.weight, 10)
    item.heat = Number.parseInt(item.heat, 10)
    item.range = Number.parseInt(item.range, 10)
    item.andromeda = item.andromeda === 'x'
    fs.writeFileSync(fn, JSON.stringify(item, null, 2))
}
