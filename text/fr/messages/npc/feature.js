export default {
    recharge: (ctx) => `Recharge ${ctx.list.length > 1 ? `${ctx.list(0)}-${ctx.list(1)}` : ctx.list(0)}`,
    uses: (ctx) => `${ctx.named('amount')}${ctx.named('perDay') ? '/Day' : 'uses'}`,
    legendaryCost: (ctx) => `Costs ${ctx.named('amount')} actions`,
    multiattack: 'Multiattack',
    melee: 'Melee Weapon Attack',
    ranged: 'Ranged Weapon Attack',
    hit_title: `Hit`,
    miss_title: `Miss`,
    range_title: 'range',
    reach_title: 'reach',
    damage_title: 'damage',
    to_hit: (ctx) => `+${ctx.named('bonus')} to hit`,
    target: {
      one: 'one target'
    },
    // optional
    damage_amount: (ctx) => `${ctx.named('average')} (${ctx.named('dice')}${ctx.named('bonus') ? ` + ${ctx.named('bonus')}` : ''})`,
    display_reach: (ctx) => `${ctx.named('reachTitle')} ${ctx.named('range')}`,
    display_range: (ctx) => `${ctx.named('rangeTitle')} ${ctx.named('rangeMin')}/${ctx.named('rangeMax')} ${ctx.named('abbr')}`,
    display_name: (ctx) => `${ctx.named('name')}${ctx.named('rulc') ? ` (${ctx.named('rulc')})` : ''}.`,
    display_type: (ctx) => `${ctx.named('name')}:`,
    display_attack: (ctx) => `${ctx.named('toHit')}, ${ctx.named('range')}, ${ctx.named('target')}.`,
    display_damage: (ctx) => `${ctx.named('damage')} ${ctx.named('damageType')}.`,
    display_multi_damage: (ctx) => `${ctx.named('damage1')} and ${ctx.named('damage2')}`,
    display_grenade: (ctx) => `${ctx.named('text').replace('{{name}}', ctx.named('article_name'))}`,
    // TODO...
    legendary_text: '...',
    display_legendary: (ctx) => `${ctx.named('text').replace(/{{name}}/gi, ctx.named('article_name'))}`
}
