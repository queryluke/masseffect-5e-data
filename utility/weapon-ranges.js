const fs = require('fs')
const path = `../data/weapons`
const _ = require('lodash')
const YAML = require('yaml')
const fm = require('front-matter')
const files = fs.readdirSync(path)
const ranges = {}
const newRanges = {
  '5': 5,
  '10': 10,
  '15': 15,
  '20': 20,
  '25': 25,
  '35': 30,
  '45': 30,
  '50': 60,
  '75': 90,
  '100': 120,
  '125': 120,
  '150': 150,
  '200': 300,
  '250': 500
}
for (const file of files) {
    const fc = fm(fs.readFileSync(`${path}/${file}`, 'utf8'))
    let item = Object.assign(fc.attributes, {})
    const range = item.range.toString()
    const newRange = {}
    if (newRanges[range]) {
      newRange.short = newRanges[range]
    } else {
      console.log('cant find range for ' + item.name)
    }
    if (item.type !== 'melee') {
      const long = newRange.short * (item.type === 'shotgun' ? 2 : 3)
      newRange.long = long
    }
    item = {...item, range: newRange }
    let content = '---\n'
    content += YAML.stringify(item)
    content += `---\r\n${fc.body}`
    fs.writeFileSync(`../data/weapons/${file}`, content)
}
console.log(ranges)


