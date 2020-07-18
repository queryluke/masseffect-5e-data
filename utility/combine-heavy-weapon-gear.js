const fs = require('fs')
const _ = require('lodash')
const YAML = require('yaml')
const fm = require('front-matter')

const files = fs.readdirSync('../data/weapons')
for (const file of files) {
    const item = require(`../data/weapons/${file}`)

    if (item.type !== 'Heavy Weapon') {
        continue
    }

    let fn = _.kebabCase(item.name)
    item.stats = {
        damage: item.damage,
        range: Number.parseInt(item.range, 10) / 2 * 5,
        damageType: item.dmgType,
        rounds: item.heat,
        image: item.image
    }
    // name
    // rarity
    // type
    // cost
    delete(item.manufacturer)
    item.weight = item.weight * 2
    delete(item.heat)
    delete(item.damage)
    delete(item.range)
    const body = item.notes
    delete(item.notes)
    delete(item.npcHit)
    delete(item.npcMiss)
    delete(item.dmgType)
    delete(item.image)
    delete(item.createdBy)
    delete(item.andromeda)
    delete(item.properties)

    let content = '---\n'
    content += YAML.stringify(item)
    content += `---\r\n${body}`
    fs.writeFileSync(`../data/gear/${fn}.md`, content)
    fs.unlink(`../data/weapons/${file}`, function() {
        return true
    })
}
