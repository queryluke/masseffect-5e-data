const fs = require('fs')
const _ = require('lodash')
const YAML = require('yaml')
const fm = require('front-matter')

// grenades
let files = fs.readdirSync('../data/grenades')
for (const file of files) {
    const fc = fm(fs.readFileSync(`../data/grenades/${file}`, 'utf8'))
    const item = Object.assign(fc.attributes, {})
    let fn = _.kebabCase(item.name)
    item.stats = {
        damage: item.damage,
        range: Number.parseInt(item.range, 10) / 2 * 5,
        blast: Number.parseInt(item.blast, 10) / 2 * 5,
        damageType: item.damageType
    }
    delete(item.damage)
    delete(item.range)
    delete(item.blast)
    delete(item.damageType)

    item.type = 'Grenade'
    item.cost = 500
    item.weight = 1
    item.rarity = 'Uncommon'

    let content = '---\n'
    content += YAML.stringify(item)
    content += `---\r\n${fc.body}`
    fs.writeFileSync(`../data/gear/${fn}.md`, content)
}

// heavy weapons
files = fs.readdirSync('../data/weapons')
for (const file of files) {
    const fc = fm(fs.readFileSync(`../data/grenades/${file}`, 'utf8'))
    const item = Object.assign(fc.attributes, {})

    if (item.type !== 'Heavy Weapon') {

    }


    let fn = _.kebabCase(item.name)
    item.stats = {
        damage: item.damage,
        range: Number.parseInt(item.range, 10) / 2 * 5,
        blast: Number.parseInt(item.blast, 10) / 2 * 5,
        damageType: item.damageType
    }
    delete(item.damage)
    delete(item.range)
    delete(item.blast)
    delete(item.damageType)

    item.type = 'Grenade'
    item.cost = 500
    item.weight = 1
    item.rarity = 'Uncommon'

    let content = '---\n'
    content += YAML.stringify(item)
    content += `---\r\n${fc.body}`
    fs.writeFileSync(`../data/gear/${fn}.md`, content)
}
