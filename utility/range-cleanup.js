const fs = require('fs')


/*
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
*/

let path = `../data/weapons`
let files = fs.readdirSync(path)
const updates = {
    '10m => 12m': [],
    '14m => 12m': [],
    '18m => 24m': [],
    '20m => 24m': [],
    '30m => 36m': [],
    '40m => 36m': [],
    '50m => 60m': [],
    '80m => 60m': [],
    '100m => 120m': []
}

for (const file of files) {
    const fn = `${path}/${file}`
    const item = require(fn)
    switch (item.range) {
        case 50:
            item.range = 60
            updates['20m => 24m'].push(item.name)
            break
        case 45:
            item.range = 60
            updates['18m => 24m'].push(item.name)
            break
        case 25:
            item.range = 30
            updates['10m => 12m'].push(item.name)
            break
        case 35:
            item.range = 30
            updates['14m => 12m'].push(item.name)
            break
        case 75:
            item.range = 90
            updates['30m => 36m'].push(item.name)
            break
        case 100:
            item.range = 90
            updates['40m => 36m'].push(item.name)
            break
        case 250:
            item.range = 300
            updates['100m => 120m'].push(item.name)
            break
        case 125:
            item.range = 150
            updates['50m => 60m'].push(item.name)
            break
        case 200:
            item.range = 150
            updates['80m => 60m'].push(item.name)
            break
        default:
            continue


    }
    // fs.writeFileSync(fn, JSON.stringify(item, null, 2) + '\n')
}
let string = ''
for (const up of Object.keys(updates)) {
    string += `- ${up}\n`
    string += `  - ${updates[up].join(`\n  - `)}\n`
}
console.log(string)
