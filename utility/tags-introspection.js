const powers = require('./../docs/v142/en/powers.json')

const powerTags = powers.reduce((a, c) => a.concat(c.tags || []), [])
const unique = [...new Set(powerTags)]
console.log(unique)
