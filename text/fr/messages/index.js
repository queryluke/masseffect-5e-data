import abilities from './abilities'
import alignments from './alignments'
import damage_types from'./damage-types'
import equipment from './equipment'
import measurements from './measurements'
import { manual, guide } from './manual'
import npc from './npc'
import powers from './powers'
import senses from './senses'
import site from './site'
import sizes from './sizes'
import speeds from './speeds'
import tags from './tags'
import times from './times'

export const messages = {
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
    tags,
    times,
    tool_profs: {
        types: {
            artisan: 'Artisan',
            starship: 'Starship'
        }
    }
}
