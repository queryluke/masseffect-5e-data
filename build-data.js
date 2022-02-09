const fs = require('fs')
const fse = require('fs-extra')
const fm = require('front-matter')
const _ = require('lodash')
const config = require('./package.json')

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

md.renderer.rules.link_close = function(tokens, idx) {
  const pToken = tokens[idx - 2]
  const href = pToken.attrs[0][1]
  if (/^\//.test(href)) {
    return `</nuxt-link>`
  } else {
    return '</a>'
  }
}

const setLinkLocalePrefix = (lang = null) => {
  md.renderer.rules.link_open = function(tokens, idx) {
    const token = tokens[idx]
    let href = token.attrs[0][1]
    if (/^\//.test(href)) {
      if (lang) {
        href = `/${lang}${href}`
      }
      return `<nuxt-link to="${href}">`
    } else {
      return `<a href="${href}" target="_blank">`
    }
  }
}

const ignore = ['messages', 'subspecies']
const staticData = ['about.json']
const staticMdData = ['guides-index.md', 'manual-index.md']
const versionDir = `./docs/v${config.version.replace(/\./g,'')}`

if (!fs.existsSync(versionDir)) {
  fs.mkdirSync(versionDir);
}

const textPath = `./text`
const dataPath = `./data`

const langs = fs.readdirSync(textPath)
const dataDirs = fs.readdirSync(dataPath)

for (const lang of langs) {
  const targetPath = `${versionDir}/${lang}`
  setLinkLocalePrefix(lang === 'en' ? null : lang)

  // create the target if it doesn't exist
  if (!fs.existsSync(targetPath)) {
    fs.mkdirSync(targetPath);
  }

  // copy any staticData
  for (const f of staticData) {
    fs.copyFile( `${dataPath}/${f}`, `${targetPath}/${f}`, (err) => {
      if (err) throw err;
    });
  }

  // copy and convert any static md files
  for (const f of staticMdData) {
    const fc = fm(fs.readFileSync(`${dataPath}/${f}`, 'utf8'))
    let item = fc.attributes
    fs.writeFileSync(`${targetPath}/${f.replace('.md', '.json')}`, JSON.stringify(item, null, 2))
  }

  const textSourcePath = `${textPath}/${lang}`

  const processedModels = []

  // process data dirs
  for (const dir of dataDirs) {
    if (ignore.includes(dir) || staticData.includes(dir) || staticMdData.includes(dir)) {
      continue
    }
    // don't render the changelog in anything but english
    if (dir === 'changelog' && lang !== 'en') {
      continue
    }
    const modelDataPath = `${dataPath}/${dir}`
    const modelTextPath = `${textSourcePath}/${dir}`
    const modelTargetFile = `${targetPath}/${dir}.json`
    const modelFns = fs.readdirSync(modelDataPath)
    const items = modelFns.map(file => {
      const item = combineItem(file,dir, `${modelDataPath}/${file}`, `${modelTextPath}/${file}`)
      if (dir === 'changelog') {
        item.date = new Date(item.date)
        item.url = `/changelog/${item.slug}`
      }
      if (dir === 'species') {
        if (item.subspecies) {
          const subspecies = fm(fs.readFileSync(`${dataPath}/subspecies/${item.subspecies}.md`, 'utf8'))
          item.subspecies = {
            name: subspecies.attributes.name,
            html: md.render(subspecies.body)
          }
        } else {
          item.subspecies = false
        }
      }
      return item
    })
    if (dir === 'edges') {
      items.push(...generateExaltedLineages().sort((a, b) => a.name < b.name ? -1 : 1))
    }
    fs.writeFileSync(modelTargetFile, JSON.stringify(items, null, 2))
    processedModels.push(dir)
  }

  // compile the messages into a json file
  const messages = require(`${textSourcePath}/messages`)
  fs.writeFileSync(`${targetPath}/messages.json`, JSON.stringify(messages, null, 2))

  // process text dirs
  const textDirs = fs.readdirSync(textSourcePath)
  for (const dir of textDirs) {
    if (ignore.includes(dir) || staticData.includes(dir) || staticMdData.includes(dir) || processedModels.includes(dir)) {
      continue
    }
    const modelTextPath = `${textSourcePath}/${dir}`
    const modelTargetFile = `${targetPath}/${dir}.json`
    const modelFns = fs.readdirSync(modelTextPath)
    const items = modelFns.map(file => {
      return  combineItem(file, dir, `${modelTextPath}/${file}`)
    })
    fs.writeFileSync(modelTargetFile, JSON.stringify(items, null, 2))
  }
}

function getSpeciesInfo () {
  const species = fs.readdirSync('./data/species').map(file => {
    return combineItem(file, 'species', `./data/species/${file}`, `./text/en/species/${file}`)
  })

  const traits = fs.readdirSync('./data/traits').map(file => {
    return combineItem(file, 'traits', `./data/traits/${file}`, `./text/en/traits/${file}`)
  })
  return { species, traits }
}

function generateExaltedLineages () {
  const { species, traits } = getSpeciesInfo()
  const exaltedLineages = []
  const edgeType = 'exalted-lineages'
  const asiRiciSSFilter = (mechanic) => {
    // console.log(mechanic)
    return ['resistance', 'sense', 'comdition-immunity', 'immunity'].includes(mechanic.type)
      || mechanic.type === 'speed' && mechanic.speed !== 'walk'
      || mechanic.type.startsWith('asi')
  }
  for (const sp of species) {
    if (sp.id === 'kett' || sp.id === 'behemoth') {
      continue
    }
    let id = `EXL_${sp.id}`
    let name = sp.name
    let mechanics = []

    if (['variant', 'subspecies'].includes(sp.type) && sp.id !== 'ardat-yakshi') {
      const parent = species.find(i => i.id === sp.species)
      const parentName = parent.name
      name = `${parentName} (${name})`
      if (sp.type === 'variant') {
        mechanics.push(...(sp.mechanics || parent.mechanics))
      } else {
        mechanics.push(...[...sp.mechanics, ...parent.mechanics])
      }
    } else if (sp.subspecies) {
      continue
    } else {
      mechanics.push(...sp.mechanics)
    }

    const exclusions = ['hermetic-suit', 'pressurized-suit', 'contra-gravitic-levitation']
    const traitMechanics = traits.filter(i => i.species.includes(sp.id) && !exclusions.includes(i.id))
      .reduce((acc, curr) => acc.concat(curr.mechanics), [])
    mechanics.push(...traitMechanics)
    mechanics = mechanics.filter(asiRiciSSFilter).sort((a, b) => a.type - b.type)
    let html = ''
    const asis = mechanics.filter(i => i.type === 'asi').map(i => `+${i.amount} ${i.ability.toUpperCase()}`)
    html += '<div class="text-subtitle-1">Ability Score Increase</div>'
    if (asis.length) {
      html += `<p>${asis.join(', ')}</p>`
    }
    const resistances = mechanics.filter(i => i.type === 'resistance').map(i => `${i.value || ''}${i.note ? ` (${i.note})` : ''}`)
    if (resistances.length) {
      html += '<div class="text-subtitle-1">Resistances</div>'
      html += `<p>${resistances.join(', ')}</p>`
    }
    const conImms = mechanics.filter(i => i.type === 'condition-immunity').map(i => `${i.value || ''}${i.note || ''}`)
    if (conImms.length) {
      html += '<div class="text-subtitle-1">Condition Immunities</div>'
      html += `<p>${conImms.join(', ')}</p>`
    }
    const speeds = mechanics.filter(i => i.type === 'speed' && i.speed !== 'walk').map(i => `${i.speed}ing <me-distance length="${i.distance}" />${i.note ? ` (${i.note})` : ''}`)
    if (speeds.length) {
      html += '<div class="text-subtitle-1">Speeds</div>'
      html += `<p>${speeds.join(', ')}</p>`
    }
    const senses = mechanics.filter(i => i.type === 'sense').map(i => `${i.sense} <me-distance length="${i.distance}" />`)
    if (senses.length) {
      html += '<div class="text-subtitle-1">Senses</div>'
      html += `<p>${senses.join(', ')}</p>`
    }

    exaltedLineages.push({
      id,
      name,
      mechanics,
      html,
      type: edgeType
    })
  }

  return exaltedLineages
}

function combineItem(id, dir, file1, file2 = null) {
  const fc = fm(fs.readFileSync(file1, 'utf8'))
  let item = fc.attributes
  let body = fc.body
  if (file2) {
    if (fs.existsSync(file2)) {
      const tFc = fm(fs.readFileSync(file2, 'utf8'))
      const tItem = tFc.attributes
      item = _.mergeWith(item, tItem, (objValue, srcValue) => {
        if (_.isArray(objValue) && _.isObject(objValue[0]) && objValue[0].id) {
          const newArray = []
          for (let dIndex = 0; dIndex < objValue.length; dIndex++) {
            if (objValue[dIndex].id) {
              const tIndex = srcValue.findIndex(i => i.id === objValue[dIndex].id)
              if (tIndex > -1) {
                newArray.push(_.merge(objValue[dIndex], srcValue[tIndex]))
              } else {
                newArray.push(objValue[dIndex])
              }
            }
          }
          return newArray.concat(srcValue.filter(i => !newArray.map(j => j.id).includes(i.id)))
        }
      })
      body = tFc.body
    }
  }
  item.html = md.render(body)
  item.id = id.replace(/.md$/, '')
  if (item.mechanics?.length) {
    item.mechanics = appendResourceIds(item.mechanics, item.id, item.name, dir)
  }
  return item
}

function appendResourceIds (mechanics, id, name, model) {
  const newMechanics = []
  for (const m of mechanics) {
    let newM = m
    if (m.resource) {
      if (!m.resource.id) {
        newM = {
          ...m,
          resource: {
            ...m.resource,
            id
          }
        }
      }
    }
    if (['action', 'reaction', 'other', 'bonus-action', 'attack'].includes(m.type)) {
      newM = {
        name,
        moreInfo: {
          model: model,
          id: id
        },
        ...newM,
      }
    }
    newMechanics.push(newM)
  }
  return newMechanics
}
