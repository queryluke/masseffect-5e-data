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
      items.push(...generateExaltedLineages())
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

function generateExaltedLineages () {
  const speciesNames = fs.readdirSync('./text/en/species').map(file => {
    const species = fm(fs.readFileSync(`./text/en/species/${file}`, 'utf8'))
    return {
      id: file.replace('.md', ''),
      ...species.attributes
    }
  })

  const species = fs.readdirSync('./data/species').map(file => {
    const species = fm(fs.readFileSync(`./data/species/${file}`, 'utf8'))
    return {
      id: file.replace('.md', ''),
      ...species.attributes
    }
  })
  const traits = fs.readdirSync('./data/traits').map(file => {
    const traits = fm(fs.readFileSync(`./data/traits/${file}`, 'utf8'))
    return {
      id: file.replace('.md', ''),
      ...traits.attributes
    }
  })
  const exaltedLineages = []
  const edgeType = 'exalted-lineages'
  for (const sp of species) {
    if (sp.type === 'subspecies' || sp.type === 'variant' || sp.id === 'kett') {
      continue
    }
    let id = `EXL_${sp.id}`
    let name = sp.name || speciesNames.find(i => i.id === sp.id)?.name
    const mechanics = [
      ...sp.mechanics.filter(i => i.type.startsWith('asi') || i.type.startsWith('speed'))
    ]
    const profMechanics = traits.filter(i => i.species.includes(sp.id))
      .reduce((acc, curr) => acc.concat(curr.mechanics), [])
      .filter(i => i.type.startsWith('skill'))
    mechanics.push(...profMechanics)
    if (sp.subspecies) {
      for (const sub of species.filter(i => i.type === 'subspecies' && i.species === sp.id)) {
        const subId = `${id}-${sub.id}`
        let subName = sub.name || speciesNames.find(i => i.id === sub.id)?.name
        subName = `${name} (${subName})`
        const subMechanics = [
          ...sub.mechanics.filter(i => i.type.startsWith('asi') || i.type.startsWith('speed'))
        ]
        const subProfMechanics = traits.filter(i => i.species.includes(sub.id))
          .reduce((acc, curr) => acc.concat(curr.mechanics), [])
          .filter(i => i?.type.startsWith('skill'))
        subMechanics.push(...subProfMechanics)
        exaltedLineages.push({
          id: subId,
          name: subName,
          mechanics: [...profMechanics, ...subMechanics].sort((a, b) => a.type - b.type),
          type: edgeType
        })
      }
    } else {
      exaltedLineages.push({
        id,
        name,
        mechanics: profMechanics,
        type: edgeType
      })
    }
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
