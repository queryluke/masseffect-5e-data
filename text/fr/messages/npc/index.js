import feature from './feature'
import powercasting from './powercasting'
import units from './units'
export default {
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
    article_name: (ctx) => `${ctx.named('article')} ${ctx.named('name')}`,
    article: 'The'
}
