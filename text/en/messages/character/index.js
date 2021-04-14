const klass = require('./klass')
module.exports = {
    title: 'Characters',
    abi_title: 'Ability Score Increase',
    background: {
        title: 'Background | Backgrounds'
    },
    feat: {
        title: 'Feats'
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
