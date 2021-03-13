modules.export = {
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
}
