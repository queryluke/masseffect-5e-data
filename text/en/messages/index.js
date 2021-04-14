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
        new: 'new',
        phb: 'PHB'
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
    none: 'None',
    npc,
    level: {
        text: 'level',
        title: 'Level',
        nth: '{level} level',
        adj: '{level}-level'
    },
    numbers: {
        base: ['zero','one','two','three','four','five','six','seven','eight','nine','ten'],
        ordinal: ['0', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th',
            '11th', '12th', '13th', '14th', '15th', '16th', '17th', '18th', '19th', '20th']
    },
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
    saving_throws: 'Saving Throws',
    skills: {
        title: 'Skills'
    },
    tool_profs: {
        title: 'Tool Proficiencies',
        types: {
            artisan: {
                title: 'Artisan',
                choice: '{count} artisan tools of your choice'
            },
            starship: {
                title: 'Starship',
                choice: '{count} starship systems of your choice'
            }
        },
    }
}
