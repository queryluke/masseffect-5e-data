export default {
    label: 'armor',
    placement: {
        head: 'Head',
        chest: 'Chest',
        body_armor: 'Body Armor',
        legs: 'Legs',
        arms: 'Arms'
    },
    type: {
        // type only
        heavy: 'Heavy',
        light: 'Light',
        medium: 'Medium',
        // full
        heavy_armor: '@:equipment.armor.type.heavy @:equipment.armor.label',
        light_armor: '@:equipment.armor.type.light @:equipment.armor.label',
        medium_armor: '@:equipment.armor.type.medium @:equipment.armor.label'
    },
    set_bonus: 'Set bonus',
    // e.g. 2 of 4
    set_bonus_range: (ctx) => `${ctx.named('threshold')} of ${ctx.named('total')}`
}
