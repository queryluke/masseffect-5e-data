module.exports = {
    // legendaryCost: (ctx) => `Costs ${ctx.named('amount')} actions`,
    multiattack: 'Multiattack',
    hit_title: `Hit`,
    miss_title: `Miss`,
    range_title: 'range',
    reach_title: 'reach',
    damage_title: 'damage',
    // TODO...
    legendary_text: '...',
    // optional
    /*
    damage_amount: (ctx) => `${ctx.named('average')} (${ctx.named('dice')}${ctx.named('bonus') ? ` + ${ctx.named('bonus')}` : ''})`,
    display_reach: (ctx) => `${ctx.named('reachTitle')} ${ctx.named('range')}`,
    display_range: (ctx) => `${ctx.named('rangeTitle')} ${ctx.named('rangeMin')}/${ctx.named('rangeMax')} ${ctx.named('abbr')}`,
    display_name: (ctx) => `${ctx.named('name')}${ctx.named('rulc') ? ` (${ctx.named('rulc')})` : ''}.`,
    display_type: (ctx) => `${ctx.named('name')}:`,
    display_attack: (ctx) => `${ctx.named('toHit')}, ${ctx.named('range')}, ${ctx.named('target')}.`,
    display_damage: (ctx) => `${ctx.named('damage')} ${ctx.named('damageType')}.`,
    display_multi_damage: (ctx) => `${ctx.named('damage1')} and ${ctx.named('damage2')}`,
    display_grenade: (ctx) => `${ctx.named('text').replace('{{name}}', ctx.named('article_name'))}`,
     */
    // display_legendary: (ctx) => `${ctx.named('text').replace(/{{name}}/gi, ctx.named('article_name'))}`
    actions_title: 'Actions',
    at_will: 'At Will',
    attack_types: {
        melee: 'Melee Weapon Attack',
        ranged: 'Ranged Weapon Attack',
    },
    cr_title: 'Challenge Rating',
    cr_text: '{n} ({xp} xp)',
    condition_immunities: 'Condition Immunities',
    damage_immunities: 'Damage Immunities',
    damage_resistances: 'Damage Resistances',
    damage_text: '{diceAverage} {damageType}',
    damage_vulnerabilities: 'Damage Vulnerabilities',
    faction_title: 'Faction',
    feature_w_limitation: '{name} ({limitation})',
    higher_power_level: 'as a {level_adj} power',
    range_types: {
        reach: 'reach {range}',
        range: 'range ({short}/{long})'
    },
    recharges: [
        'None',
        'Recharge {0}',
        'Recharge {0}-{1}'
    ],
    rest_recharge: {
        short: 'Recharges after a Short or Long Rest',
        long: 'Recharges after a Long Rest',
    },
    shield_w_regen: '{capacity} (regen {n})',
    slots: '{n} slot | {n} slots',
    // to_hit: (ctx) => `+${ctx.named('bonus')} to hit`,
    target: {
        one: 'one target'
    },
    to_hit: '{bonus} to hit',
    types: {
        organic: 'Organic',
        synorg: 'Snyth-organic',
        synthetic: 'Synthetic'
    },
    unit_types: {
        alien: 'Alien',
        archetype: 'Archetype',
        blood_pack: 'Blood Pack',
        blue_suns: 'Blue Suns',
        cerberus: 'Cerberus',
        collector: 'Collectors',
        eclipse: 'Eclipse',
        geth: 'Geth',
        kett: 'Kett',
        mech: 'Mech',
        n_7: 'N7',
        rachni: 'Rachni',
        reaper: 'Reaper',
        thorian: 'Thorian'
    },
    uses: '{amount} uses',
    uses_per_day: '{amount}/Day',
    uses_per_turn: '{amount}/Turn'
}
