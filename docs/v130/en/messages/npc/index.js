const { feature } = require('./feature')
const { powercasting } = require('./powercasting')
const { units } = require('./units')
modules.export = {
    npc: {
        condition_immunities: 'Condition Immunities',
        damage_immunities: 'Damage Immunities',
        damage_resistances: 'Damage Resistances',
        damage_vulnerabilities: 'Damage Vulnerabilities',
        feature,
        powercasting,
        type: {
            organic: 'Organic',
            synorg: 'Snyth-organic',
            synthetic: 'Synthetic'
        },
        units,
    }
}
