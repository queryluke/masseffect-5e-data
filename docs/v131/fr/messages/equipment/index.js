import armor from './armor'
import gear from './gear'
import vehicles from './vehicles'
import weapons from './weapons'
export default {
    armor,
    gear,
    manufacturers: {
        // TODO: ...
    },
    mods: {
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
