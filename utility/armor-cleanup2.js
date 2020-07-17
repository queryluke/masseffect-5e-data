const fs = require('fs')
const path = `../data/armor`
const _ = require('lodash')
const files = fs.readdirSync(path)
for (const file of files) {
    const fn = `${path}/${file}`
    const item = require(fn)
    item.notes = item.notes.length > 0 ? item.notes[0].split(',').map(f => f.trim()) : []
    fs.writeFileSync(fn, JSON.stringify(item, null, 2))
}
