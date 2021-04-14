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
    proficiencies: 'Proficiencies',
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
            at_level: `When you reach {level}, | When you reach {level}, and again at {and_list} level,`,
            text: `{at_level} you can increase one ability score of your choice 
                by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an 
                ability score above 20 using this feature.`,
            feat_text: 'Using the optional feats rule, you can forgo taking this feature to take a feat of your choice instead.'
        },
        columns: {
            barrier_ticks: 'Barrier Ticks',
            barrier_uses: 'Barrier Uses',
            cantrips: 'Cantrips',
            combat_powers: 'Combat Powers',
            features: 'Features',
            power_level: 'Power Level',
            power_slots_by_power_level: 'Power Slots by Power Level',
            power_slots: 'Power Slots',
            powers_known: 'Powers Known',
            prof_bonus: 'Proficiency Bonus',
            sneak_attack_damage: 'Sneak Attack Damage',
            tactical_cloak_uses: 'Tactical Cloak Uses',
            tech_points: 'Tech Points',
            tech_point_limit: 'Tech Point Limit',
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
