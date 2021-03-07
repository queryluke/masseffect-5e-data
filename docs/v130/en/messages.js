modules.export = {
    equipment: {
        tags: {

        },
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
        }
    },
    mechanics: {
        shield: 'no shields | 1 shield | {n} shields',
        regen: 'regen'
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
    }
}
