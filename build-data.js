
const fs = require('fs')
const fm = require('front-matter')
const _ = require('lodash')
const config = require('./package.json')
const versionDir = `./docs/v${config.version.replace(/\./g,'')}`

if (!fs.existsSync(versionDir)) {
  fs.mkdirSync(versionDir);
}

// copy about page
fs.copyFile( './data/about.json', `${versionDir}/about.json`, (err) => {
  if (err) throw err;
});

// Markdown it options
const MarkdownIt = require('markdown-it')
const md = new MarkdownIt({ html: true })

md.use(require('markdown-it-container'), 'alert')
    .use(require('markdown-it-multimd-table'))

md.renderer.rules.table_open = function () {
  return '<v-simple-table class="mb-8"><template v-slot:default>'
}
md.renderer.rules.table_close = function () {
  return '</template></v-simple-table>'
}

md.renderer.rules.blockquote_open = function () {
  return '<v-card class="blockquote-card"><v-card-text>'
}
md.renderer.rules.blockquote_close = function () {
  return '</v-card-text></v-card>'
}

md.renderer.rules.link_open = function () {
  return '</v-card-text></v-card>'
}

md.renderer.rules.container_alert_open = function () {
  return '<v-alert value type="info">';
}
md.renderer.rules.container_alert_close = function () {
  return '</v-alert>';
}

md.renderer.rules.image = function (tokens, idx, options, env, self) {
  const token = tokens[idx]
  const srcIndex = token.attrIndex('src');
  const src = token.attrs[srcIndex][1]
  return `<v-img src="${src}" />`
}

md.renderer.rules.link_open = function(tokens, idx) {
  const token = tokens[idx]
  const href = token.attrs[0][1]
  if (/^\//.test(href)) {
    return `<nuxt-link to="${href}">`
  } else {
    return `<a href="${href}" target="_blank">`
  }
}
md.renderer.rules.link_close = function(tokens, idx) {
  const pToken = tokens[idx - 2]
  const href = pToken.attrs[0][1]
  if (/^\//.test(href)) {
    return `</nuxt-link>`
  } else {
    return '</a>'
  }
}

const mdDirs = [
  'abilities',
  'rules',
  'gmg',
  'backgrounds',
  'changelog',
  'class-features',
  'subclasses',
  'classes',
  'conditions',
  'feats',
  'gear',
  'mods',
  'species-variants', // before species
  // 'subspecies', // before species
  'traits', // before species
  'species',
  'powers',
  'tool-profs',
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
    if (dir === 'species') {
      const traits = require(`${versionDir}/traits.json`)
      const variants = require(`${versionDir}/species-variants.json`)
      item.traits = traits.filter(i => i.species === item.id || i.species.includes(item.id))
      item.variants = variants.filter(i => i.species === item.id)
    }
    return item
  })
  fs.writeFileSync(`${versionDir}/${dir}.json`, JSON.stringify(items, null, 2))
}
// process jsDirs
const jsonDirs = [
  'armor-mechanics',
  'armor',
  'attributions',
  'bestiary',
  'character-progression',
  'commonplace-items',
  'random-height-weight',
  'ship-upgrades',
  'skills',
  'stats-by-cr',
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
  fs.writeFileSync(`${versionDir}/${dir}.json`, JSON.stringify(items, null, 2))
}
