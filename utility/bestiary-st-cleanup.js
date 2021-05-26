const fs = require('fs')
const path = `../data/bestiary`
const _ = require('lodash')
const files = fs.readdirSync(path)
for (const file of files) {
    const fn = `${path}/${file}`
    const item = require(fn)
    const newSpeeds = []
    for (const speed of item.speed) {
        newSpeeds.push({type: speed.type, range: ((Number.parseInt(speed.range, 10) / 2) * 5) })
    }
    item.speed = newSpeeds
    fs.writeFileSync(fn, JSON.stringify(item, null, 2) + '\n')
}
