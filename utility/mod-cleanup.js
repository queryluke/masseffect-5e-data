const fs = require('fs')
const _ = require('lodash')
let path = `../data/armor-mods`
let files = fs.readdirSync(path)
for (const file of files) {
    const fn = `${path}/${file}`
    const item = require(fn)
    item.cost = Number.parseInt(item.cost, 10)
    item.placement = item.type
    item.type = 'Armor'
    item.notes = item.notes.split(',').map(i => i.trim())
    item.availability = ['Light', 'Medium', 'Heavy']
    fs.writeFileSync(`../data/mods/${file}`, JSON.stringify(item, null, 2))
}

path = `../data/weapon-mods`
files = fs.readdirSync(path)
for (const file of files) {
    const fn = `${path}/${file}`
    const item = require(fn)
    item.cost = Number.parseInt(item.cost, 10)
    item.type = 'Weapon'
    item.notes = item.notes.split(',').map(i => i.trim())
    fs.writeFileSync(`../data/mods/${file}`, JSON.stringify(item, null, 2))
}
