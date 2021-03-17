const { armor } = require('./armor')
const { gear } = require('./gear')

modules.export = {
    equipment: {
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
        }
    }

}
