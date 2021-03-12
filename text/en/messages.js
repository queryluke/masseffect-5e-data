modules.export = {
    abilities: {
        cha: {
            label: 'charisma',
            title: 'Charisma',
            abbr: 'CHA'
        },
        con: {
            label: 'constitution',
            title: 'Constitution',
            abbr: 'CON'
        },
        dex: {
            label: 'dexterity',
            title: 'Dexterity',
            abbr: 'DEX'
        },
        int: {
            label: 'intelligence',
            title: 'Intelligence',
            abbr: 'INT'
        },
        str: {
            label: 'strength',
            title: 'Strength',
            abbr: 'STR'
        },
        wis: {
            label: 'wisdom',
            title: 'Wisdom',
            abbr: 'WIS'
        }
    },
    alignments: {
        lg: 'lawful good',
        ln: 'lawful neutral',
        le: 'lawful evil',
        ng: 'neutral good',
        nn: 'neutral',
        ne: 'neutral evil',
        cg: 'chaotic good',
        cn: 'chaotic neutral',
        ce: 'chaotic evil'
    },
    background: {
        starting_credits: 'Starting Credits'
    },
    conditions: {
        // TODO:...
    },
    damage: 'damage',
    damage_type: {
        acid: 'acid',
        bludgeoning: 'bludgeoning',
        cold: 'cold',
        fire: 'fire',
        force: 'force',
        lightning: 'lightning',
        necrotic: 'necrotic',
        piercing: 'piercing',
        poison: 'poison',
        psychic: 'psychic',
        radiant: 'radiant',
        slashing: 'slashing',
        thunder: 'thunder',
        acid_damage: '@:damage_type.acid @:damage',
        // damage strings, i.e., piercing damage
        bludgeoning_damage: '@:damage_type.bludgeoning @:damage',
        cold_damage: '@:damage_type.cold @:damage',
        fire_damage: '@:damage_type.fire @:damage',
        force_damage: '@:damage_type.force @:damage',
        lightning_damage: '@:damage_type.lightning @:damage',
        necrotic_damage: '@:damage_type.necrotic @:damage',
        piercing_damage: '@:damage_type.piercing @:damage',
        poison_damage: '@:damage_type.poison @:damage',
        psychic_damage: '@:damage_type.psychic @:damage',
        radiant_damage: '@:damage_type.radiant @:damage',
        slashing_damage: '@:damage_type.slashing @:damage',
        thunder_damage: '@:damage_type.thunder @:damage'
    },
    dice: (ctx) => `${ctx.named('dieCount') || ''}d${ctx.named('dieType')}`,
    equipment: {
        armor: {
            placement: {
                head: 'Head',
                chest: 'Chest',
                body_armor: 'Body Armor',
                legs: 'Legs',
                arms: 'Arms'
            },
            type: {
                heavy: 'Heavy',
                medium: 'Medium',
                light: 'Light'
            },
            set_bonus: 'Set bonus',
            // e.g. 2 of 4
            set_bonus_range: (ctx) => `${ctx.named('threshold')} of ${ctx.named('total')}`
        },
        tags: {
            // TODO:...
        },
    },
    measurements: {
        // TODO:...
        lb: {
            full: 'pounds | pound | {n} pounds',
            abbr: 'lbs | lb | {n} lbs'
        },
        ft: {
            full: 'feet | foot | {n} feet',
            abbr: 'ft'
        },
        m: {
            full: 'meters | meter | {n} meters',
            abbr: 'm'
        },
        kg: {
            full: 'kilograms | kilogram | {n} kilograms',
            abbr: 'kgs | kg | {n} kgs'
        }
    },
    mechanics: {
        shield: 'no shields | 1 shield | {n} shields',
        regen: 'regen'
    },
    npc: {
        type: {
            // TODO:...
        },
        unit: {
            // TODO:...
        },
        powercasting: {
            // TODO:...
        },
        condition_immunities: 'Condition Immunities',
        // TODO... other IRVs
        feature: {
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
        }
    },
    rarity: {
        common: 'Common',
        uncommon: 'Uncommon',
        rare: 'Rare',
        very_rare: 'Very Rare',
        spectre: 'Spectre'
    },
    site: {
        about: {
            all_others: 'And any/all the others in the Discord and Reddit community who have contributed ideas and/or words of motivation!',
            roles: {
                creator: 'Creator, Website Developer',
                editor: 'Editor',
                discord: 'Discord Moderator',
                reddit: 'Subreddit Moderator',
                developer: 'Website Developer',
                content: 'Content Developer',
                translator: 'Translator {n}',
                designer: 'Graphics Designer'
            }
        }
    },
    senses: {
        // TODO:...
    },
    sizes: {
        // TODO:...
    },
    skills: {
        // TODO:...
    },
    speeds: {
        // TODO:...
    }
}
