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

const ignore = []
const staticData = ['about.json', 'stats-by-cr.json']
const staticMdData = ['guides-index.md', 'manual-index.md']
const versionDir = `./docs/v${config.version.replace(/\./g,'')}`

if (!fs.existsSync(versionDir)) {
  fs.mkdirSync(versionDir);
}

const textPath = `./text`
const dataPath = `./newData`

const langs = fs.readdirSync(textPath)
const dataDirs = fs.readdirSync(dataPath)

for (const lang of langs) {
  const targetPath = `${versionDir}/${lang}`

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
    const modelDataPath = `${dataPath}/${dir}`
    const modelTextPath = `${textSourcePath}/${dir}`
    const modelTargetFile = `${targetPath}/${dir}.json`
    const modelFns = fs.readdirSync(modelDataPath)
    const items = modelFns.map(file => {
      const item = combineItem(file,`${modelDataPath}/${file}`, `${modelTextPath}/${file}`)
      if (dir === 'changelog') {
        item.date = new Date(item.date)
        item.url = `/changelog/${item.slug}`
      }
      return item
    })
    fs.writeFileSync(modelTargetFile, JSON.stringify(items, null, 2))
    processedModels.push(dir)
  }

  ignore.push('messages')

  // To copy the messages dir
  fse.copy(`${textSourcePath}/messages`, `${targetPath}/messages`, function (err) {
    if (err) return console.error(err)
    console.log('success!')
  })

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
      return  combineItem(file, `${modelTextPath}/${file}`)
    })
    fs.writeFileSync(modelTargetFile, JSON.stringify(items, null, 2))
  }
}

function combineItem(id, file1, file2 = null) {
  const fc = fm(fs.readFileSync(file1, 'utf8'))
  let item = fc.attributes
  let body = fc.body
  if (file2) {
    if (fs.existsSync(file2)) {
      const tFc = fm(fs.readFileSync(file2, 'utf8'))
      const tItem = tFc.attributes
      item = _.merge(item, tItem)
      body = tFc.body
    }
  }
  item.html = md.render(body)
  item.id = id.replace(/.md$/, '')
  return item
}
