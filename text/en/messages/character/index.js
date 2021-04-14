const klass = require('./klass')
module.exports = {
    title: 'Characters',
    abi_title: 'Ability Score Increase',
    background: {
        title: 'Background | Backgrounds'
    },
    feat: {
        title: 'Feats',
        intro: [
          `A feat represents a talent or an area of expertise that gives a character special capabilities. It embodies
            training, experience, and abilities beyond what a class provides. Mass Effect 5e uses a number of feats in the
            Player's Manual, providing page numbers for reference.`,
          `At certain levels, your class gives you the Ability Score Improvement feature. Using the optional feats rule, you
            can forgo taking that feature to take a feat of your choice instead. You can take each feat only once, unless
            the feat’s description says otherwise.`,
          `You must meet any prerequisite specified in a feat to take that feat. If you ever lose a feat’s prerequisite,
            you can’t use that feat until you regain the prerequisite.`
        ],
        prereq: 'Prerequisite'
    },
    klass,
    species: {
        title: 'Species',
        ability_bonus_all: '+1 to all ability scores',
        traits: 'Traits',
        variants: 'Variants',
        age: 'Age',
        speed: 'Your base {type} speed is {distance}.'
    }
}
