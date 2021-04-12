module.exports = {
    title: 'Class | Classes',
    class_features: 'Class Features',
    hit_dice: {
        title: 'Hit Dice',
        per_level: '{hitDice} per level',
    },
    hit_points: {
        title: 'Hit Points',
        first: {
            title: 'Hit Points at 1st Level',
            text: '{die} + {mod} modifier'
        },
        higher: {
            title: 'Hit Points at higher levels',
            text: `{dice} (or {min}) + {mod} modifier `
        }
    },
    primary_ability: 'Primary Ability',
    profs: {
        title: 'Proficiencies',
        choose: 'choose {number} from {list}',
        selection_option_only: 'Choose {number} from {list}',
        selection_w_options: '{has} and {choose}',
        equipment_selection: [
            '(a) {0} or (b) {1}',
            '(a) {0} or (b) {1} or (c) {2}',
        ]
    },
    progression: {
        subclass: {
            adept: 'Subclass Feature',
            engineer: 'Subclass Feature',
            infiltrator: 'Subclass Feature',
            sentinel: 'Subclass Feature',
            soldier: 'Subclass Feature',
            vanguard: 'Subclass Feature',
        },
        abi: {
            title: 'Ability Score Increase',
            text: `When you reach {level}, and again at {and_list} level you can increase one ability score of your choice 
                by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an 
                ability score above 20 using this feature.`,
            feat_text: 'Using the optional feats rule, you can forgo taking this feature to take a feat of your choice instead.'
        },
        columns: {
            power_slots: 'Power Slots by Power Level',
            prof_bonus: 'Proficiency Bonus',
            features: 'Features',
            barrier_uses: 'Barrier Uses',
            barrier_ticks: 'Barrier Ticks',
            cantrips: 'Cantrips',
            powers_known: 'Powers Known'
        }

    },
    progression_table: 'Progression Table',
    saves: 'Saves',
    starting_equipment: {
        title: 'Starting Equipment',
        text: 'You start with the following equipment, in addition to the equipment granted by your background:'
    },
    subclasses: 'Subclasses',
}
