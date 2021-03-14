const { armor } = require('./armor')
const { gear } = require('./gear')

modules.export = {
    equipment: {
        armor,
        gear,
        rarity: {
            common: 'Common',
            uncommon: 'Uncommon',
            rare: 'Rare',
            very_rare: 'Very Rare',
            spectre: 'Spectre'
        },
        tags: {
            // TODO:...
        },
    }

}
