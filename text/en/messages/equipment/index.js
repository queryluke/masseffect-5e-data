const armor = require('./armor')
const gear = require('./gear')
const vehicles = require('./vehicles')
const weapons = require('./weapons')
module.exports = {
    title: 'Equipment',
    armor,
    gear,
    manufacturers: {
        // TODO: ...
    },
    mods: {
        title: 'Mod | Mods',
        label: 'mod',
        armor: 'Armor Mod',
        weapon: 'Weapon Mod',
        weapon_placement: {
            // TODO: ...
        }
    },
    rarity: {
        common: 'Common',
        uncommon: 'Uncommon',
        rare: 'Rare',
        very_rare: 'Very Rare',
        spectre: 'Spectre'
    },
    vehicles,
    weapons
}
