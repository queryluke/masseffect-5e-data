module.exports = {
    title: 'Class | Classes',
    columns: {
        features: 'Features',
        // TODO: ...
    },
    hit_dice: 'Hit Dice',
    saves: 'Saves',
    primary_ability: 'Primary Ability',
    subclass_progression: {
        subclass_feature: 'Subclass Feature',
        adept: '@:classes.subclass_progression.subclass_feature',
        engineer: '@:classes.subclass_progression.subclass_feature',
        infiltrator: '@:classes.subclass_progression.subclass_feature',
        sentinel: '@:classes.subclass_progression.subclass_feature',
        soldier: '@:classes.subclass_progression.subclass_feature',
        vanguard: '@:classes.subclass_progression.subclass_feature'
    }
}
