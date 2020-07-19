const fs = require('fs')
const path = `../data/bestiary`
const _ = require('lodash')
const files = fs.readdirSync(path)
for (const file of files) {
    const fn = `${path}/${file}`
    const item = require(fn)
    item.actions.forEach((val, idx) => {
        if (val.id) {
            val.id = _.kebabCase(val.id)
        }
    })
    fs.writeFileSync(fn, JSON.stringify(item, null, 2) + '\n')
}
