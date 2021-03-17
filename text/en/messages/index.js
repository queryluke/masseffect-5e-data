const { abilities } = require('./abilities')
const { alignments } = require('./alignments')
const { damage_types } = require('./damage-types')
const { equipment } = require('./equipment')
const { measurements } = require('./measurements')
const { manual, guide } = require('./manual')
const { npc } = require('./npc')
const { powers } = require('./powers')
const { senses } = require('./senses')
const { site } = require('./site')
const { sizes } = require('./sizes')
const { speeds } = require('./speeds')
const { tags } = require('./tags')

modules.export = {
    abilities,
    alignments,
    damage: 'damage',
    cost: {
        credits: 'credits | credit | {n} credits',
        military: 'military',
        varies: 'varies'
    },
    damage_types,
    dice: (ctx) => `${ctx.named('dieCount') || ''}d${ctx.named('dieType')}`,
    equipment,
    guide,
    manual,
    measurements,
    npc,
    powers,
    regen: 'regen',
    senses,
    shield: 'no shields | 1 shield | {n} shields',
    site,
    sizes,
    speeds,
    starting_credits: 'Starting Credits',
    tags
}
