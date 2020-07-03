const fs = require('fs')
const _ = require('lodash')
const files = [
    'armor_mechanics',
    'armor_mods',
    'armor_sets',
    'attributions',
    'character_progression',
    'commonplace_items',
    'random_height_weight',
    'ship_upgrades',
    'skills',
    'stats_by_cr',
    'weapon_mods',
    'weapon_properties',
    'weapons'
]


for (const file of files) {
    let items = require(`../data/${file}.json`)
    if (file === 'commonplace_items') {
        let newItems = []
        for (const item of items) {
            const type = item.type
            for (const subitem of item.items){
                subitem.type = type
                newItems.push(subitem)
            }
        }
        items = newItems
    }

    for (const item of items) {
        const string = (item.name || item.mechanic || item.title || item.race || item.cr || item.level)
        const id = _.kebabCase(string)
        delete item.id
        const dir = _.kebabCase((file === 'armor_sets' ? 'armor' : file))
        fs.writeFileSync(`../data/${dir}/${id}.json`, JSON.stringify(item, null, 2))
    }
}
