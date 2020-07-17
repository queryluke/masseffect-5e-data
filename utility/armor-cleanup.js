const fs = require('fs')
const path = `../data/armor`
const _ = require('lodash')
const files = fs.readdirSync(path)
for (const file of files) {
    const fn = `${path}/${file}`
    const item = require(fn)
    item.cost = Number.parseInt(item.cost, 10)
    item.features = item.feature ? item.feature.split('--').map(f => f.trim()) : []
    delete(item.feature)
    item.setBonus = item.setBonus ? item.setBonus.split('--').map(f => f.trim()) : []
    item.notes = item.notes ? item.notes.split('--').map(f => f.trim()) : []
    item.andromeda = item.andromeda === 'x'
    fs.writeFileSync(fn, JSON.stringify(item, null, 2))
}
