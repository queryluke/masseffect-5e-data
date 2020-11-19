const fs = require('fs')
const path = `../data/bestiary`
const _ = require('lodash')
const files = fs.readdirSync(path)
for (const file of files) {
    const fn = `${path}/${file}`
    const item = require(fn)
    item.actions.forEach((val, idx) => {
        /*
        if (val.range) {
            val.range = (val.range / 2) * 5
        }
        if (val.hit && val.hit.match(/\d{1,3}m /g)) {
            val.hit = val.hit.replace(/(\d{1,3})m /g, function (a, b) {
                return `<me-distance length='${(Number.parseInt(b, 10) / 2) * 5}' /> `
            })
        }
        */
        if (val.description && val.description.match(/\d{1,3}m /g)) {
            val.description = val.description.replace(/(\d{1,3})m /g, function (a, b) {
                return `<me-distance length='${(Number.parseInt(b, 10) / 2) * 5}' /> `
            })
        }
    })
    /*
    item.features.forEach((val, idx) => {
        if (val.description && val.description.match(/\d{1,3}m /g)) {
            val.description = val.description.replace(/(\d{1,3})m /g, function (a, b) {
                return `<me-distance length='${(Number.parseInt(b, 10) / 2) * 5}' /> `
            })
        }
    })
    */
    fs.writeFileSync(fn, JSON.stringify(item, null, 2) + '\n')
}
