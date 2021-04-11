const abilities = require('./abilities')
const alignments = require('./alignments')
const character = require('./character')
const damage_types = require('./damage-types')
const equipment = require('./equipment')
const lists = require('./lists')
const measurements = require('./measurements')
const { manual, guide } = require ('./manual')
const npc = require('./npc')
const powers = require('./powers')
const senses = require ('./senses')
const site = require('./site')
const sizes = require('./sizes')
const speeds = require('./speeds')
const tags = require('./tags')
const times = require('./times')

module.exports = {
    abilities,
    alignments,
    appendix: {
        title: 'Appendix'
    },
    cost: {
        credits: 'no credits | credit | {n} credits',
        military: 'military',
        varies: 'varies'
    },
    backgrounds: {
        title: 'Backgrounds'
    },
    bestiary: {
        title: 'Bestiary'
    },
    chips: {
        change: 'change',
        new: 'new'
    },
    conditions: {
        title: 'Conditions'
    },
    character,
    damage: 'damage',
    damage_types,
    dice: `{dieCount}d{dieType}`,
    equipment,
    guide,
    lists,
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
    tags,
    times,
    title: 'Mass Effect 5e',
    skills: {
        title: 'Skills'
    },
    tool_profs: {
        title: 'Tool Proficiencies',
        types: {
            artisan: 'Artisan',
            starship: 'Starship'
        }
    }
}
