
const fs = require('fs')
const fm = require('front-matter')
const _ = require('lodash')

// Markdown it options
const MarkdownIt = require('markdown-it')
const md = new MarkdownIt({ html: true })
md.renderer.rules.table_open = function () {
  return '<v-simple-table><template v-slot:default>'
}
md.renderer.rules.table_close = function () {
  return '</template></v-simple-table>'
}

const target = './.me5e'

const mdDirs = [
  'backgrounds',
  'changelog',
  'class-features',
  'class-spellcasting',
  'conditions',
  'feats',
  'grenades',
  'programs',
  'races',
  'rules',
  'spells',
  'subraces',
  'tools',
  'traits',
  'vehicles'
]
for (let dir of mdDirs) {
  const path = `./data/${dir}`
  const files = fs.readdirSync(path)

  const items = files.map((file) => {
    const fc = fm(fs.readFileSync(`${path}/${file}`, 'utf8'))
    let item = Object.assign(fc.attributes, {})
    item.html = md.render(fc.body)
    item.id = file.replace(/.md$/, '')
    if (dir === 'changelog') {
      item.date = new Date(item.date)
      item.url = `/changelog/${item.slug}`
    }
    return item
  })
  fs.writeFileSync(`${target}/${dir}.json`, JSON.stringify(items, null, 2))
}
// process jsDirs
const jsonDirs = [
  'armor-mechanics',
  'armor-mods',
  'armor',
  'attributions',
  'bestiary',
  'character-progression',
  'classes',
  'commonplace-items',
  'random-height-weight',
  'ship-upgrades',
  'skills',
  'stats-by-cr',
  'weapon-mods',
  'weapon-properties',
  'weapons'
]
for (let dir of jsonDirs) {
  const path = `./data/${dir}`
  const files = fs.readdirSync(path)
  let items = files.map((file) => {
    const item = JSON.parse(fs.readFileSync(`${path}/${file}`, 'utf8'))
    item.id = file.replace(/.json$/, '')
    return item
  })
  fs.writeFileSync(`${target}/${dir}.json`, JSON.stringify(items, null, 2))
}
