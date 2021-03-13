const { abilities } = require('./abilities')
const { alignments } = require('./alignments')
const { damage_types } = require('./damage-types')
const { equipment } = require('./equipment')
const { measurements } = require('./measurements')
const { npc } = require('./npc')
const { senses } = require('./senses')
const { site } = require('./site')
const { sizes } = require('./sizes')
const { speeds } = require('./speeds')

modules.export = {
    abilities,
    alignments,
    damage: 'damage',
    damage_types,
    dice: (ctx) => `${ctx.named('dieCount') || ''}d${ctx.named('dieType')}`,
    regen: 'regen',
    shield: 'no shields | 1 shield | {n} shields',
    starting_credits: 'Starting Credits',
    equipment,
    measurements,
    npc,
    senses,
    site,
    sizes,
    speeds
}
