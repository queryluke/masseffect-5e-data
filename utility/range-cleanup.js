const fs = require('fs')



let path = `../data/bestiary`
let files = fs.readdirSync(path)

for (const file of files) {
    const fn = `${path}/${file}`
    const item = require(fn)
    for (let i = 0; i < item.speed.length; i++) {
        const oldSpeed = item.speed[i].range
        if (![20,25,30,35].includes(oldSpeed) && item.speed[i].type === 'walk') {
            console.log(`${file} has an odd speed`)
        } else {
            if (item.speed[i].type !== 'walk' && oldSpeed === 25) {
                item.speed[i].range = 25
            } else {
                item.speed[i].range = oldSpeed === 20
                  ? 25
                  : oldSpeed === 25
                      ? 30
                      : oldSpeed === 30
                        ? 35
                        : oldSpeed === 35
                          ? 40
                          : oldSpeed
            }
        }
    }
    for (let i = 0; i < item.senses.length; i++) {
        if (item.senses[i].range !== 20) {
            console.log(`${file} has an odd sense`)
        } else {
            item.senses[i].range = 24
        }
    }
    fs.writeFileSync(fn, JSON.stringify(item, null, 2) + '\n')
}
