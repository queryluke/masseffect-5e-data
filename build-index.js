const fs = require('fs')

function ordinal (value) {
  const j = value % 10
  const k = value % 100
  if (j === 1 && k !== 11) {
    return `${value}st`
  }
  if (j === 2 && k !== 12) {
    return `${value}nd`
  }
  if (j === 3 && k !== 13) {
    return `${value}rd`
  }
  return `${value}th`
}



function setType(dir) {
  const types = [
    { type: 'character', items: ['backgrounds', 'feats', 'races', 'traits', 'subraces'] },
    { type: 'equipment', items: ['grenades', 'programs', 'tools', 'vehicles', 'armor-mods', 'armor', 'weapon-mods', 'weapons'] },
    { type: 'rule', items: ['conditions', 'rules'] },
    { type: 'power', items: ['powers'] },
    { type: 'bestiary', items: ['bestiary'] },
  ]

  return types.find(t => t.items.includes(dir)).type
}

function cleanBody(text) {
  let returnText = text.replace(/<me-condition(.*)\/>/g, (match) => {
    const condition = match.match(/id="(.*?)"/)
    const sub = match.match(/sub="(.*?)"/)
    return sub && sub[1] ? `${condition[1]}-${sub[1]}` : condition[1]
  })
  returnText = returnText.replace(/<\/?.*?\/?>/g,'')
  return returnText
}

const files = [
  // must go first
  'traits',
  'subraces',
  // can go in any order
  'backgrounds',
  'conditions',
  'feats',
  'grenades',
  'programs',
  'races',
  'powers',
  'tools',
  'vehicles',
  'armor-mods',
  'armor',
  'bestiary',
  'weapon-mods',
  'weapons',
  'rules'
]


const searchItems = []

/******************
  MD Dirs
 */
for (const file of files) {
  const items = require(`./.me5e/${file}.json`)
  for (let item of items) {

    // set the type and subtype
    let searchItem = {
      id: item.id,
      title: item.name || item.title,
      type: setType(file),
      subType: file,
      qualifiers: [],
      link: null
    }

    // create normalized content
    switch (file) {

      case 'races':
        const body = [cleanBody(item.html)]
        body.push(item.age)
        body.push(item.alignment)
        body.push(item.size)
        body.push(item.speed)
        searchItem.body = body.join(' ')
        searchItem.link = `/races/${item.id}`
        if (item.traits) {
          for (let trait of item.traits) {
            const index = searchItems.findIndex(si => si.id === trait)
            if (index > -1) {
              if (searchItems[index].qualifiers.length > 0) {
                searchItems[index].qualifiers[0] += ` + ${item.name}`
              } else {
                searchItems[index].qualifiers.push(item.name)
              }
            }
          }
        }
        if (item.variants) {
          for (let subrace of item.variants) {
            const index = searchItems.findIndex(si => si.id.replace('_','-') === subrace)
            if (index > -1) {
              searchItems[index].qualifiers.push(item.name)
              searchItems[index].qualifiers.push('Variant')
              searchItems[index].link = `/races/${item.id}`
            }
          }
        }
        break
      case 'spells':
        searchItem.qualifiers.push(item.type)
        searchItem.body = cleanBody(item.html)
        if (item.advancementOptions) {
          searchItem.body += ` ${item.advancementOptions[0].description}`
          searchItem.body += ` ${item.advancementOptions[1].description}`
        }
        break
      case 'vehicles':
        searchItem.body = cleanBody(item.html)
        if (item.weapons) {
          for (let attack of item.weapons) {
            item.body += ` ${attack.damage}`
          }
        }
        break
      case 'rules':
        searchItem.link = `manual/${item.section}#${item.id}`
        searchItem.body = cleanBody(item.html)
        break
      case 'weapons':
        searchItem.body = ''
        if (item.properties.length > 0) {
          searchItem.body += item.properties.join(', ')
        }
        if (item.notes) {
          searchItem.body += ` ${item.notes}`
        }
        break
      case 'bestiary':
        searchItem.subType = 'bestiary'
        searchItem.qualifiers.push(item.unit)
        searchItem.body = ''
        for (let key of ['Actions', 'Features', 'Reactions', 'Lair Actions', 'Legendary Actions']) {
          const splitKey = key.split(' ')
          const attrKey = `${splitKey[0].toLowerCase()}${splitKey[1] || ''}`
          if (item[attrKey].length > 0) {
            let groupString = ` ${key}`
            for (let v  of item[attrKey]) {
              let string = ` ${v.name}`
              switch(v.type) {
                case 'weapon':
                case 'grenade':
                  continue
                case 'melee':
                  string += ` Melee Weapon Attack +${v.attackMod} to hit, reach ${v.range}m, ${v.target} Hit ${v.hit}`
                  if (v.miss) {
                    string += ` Miss: ${v.miss}`
                  }
                  break
                case 'ranged':
                  string += ` Ranged Weapon Attack +${v.attackMod} to hit, range ${v.range}/${v.range * 3}m, ${v.target} Hit ${v.hit}`
                  if (v.miss) {
                    string += ` Miss ${v.miss}`
                  }
                  break
                default:
                  if (v.recharge) {
                    string += ` (${v.recharge})`
                  }
                  string += ` ${v.description}`
              }
              groupString += `${string} `
            }
            searchItem.body += `${groupString} `
          }
        }
        break
      default:
        searchItem.body = cleanBody((item.html || ''))
        if (item.feature) {
          searchItem.body += `${item.feature} `
        }
        if (item.setBonus) {
          searchItem.body += `${item.setBonus} `
        }
        searchItem.body += `${item.description}`
        break
    }
    searchItems.push(searchItem)
  }
}

/******************
 Json Files
 */


/******************
 Classes
 */

const classes = require(`./.me5e/classes.json`)
const spellcastings = require(`./.me5e/class-spellcasting.json`)
const classFeatures = require(`./.me5e/class-features.json`)
for (let klass of classes) {

  let item = {
    id: klass.id,
    title: klass.name,
    type: 'character',
    subType: 'classes',
    qualifiers: [klass.name],
    body: klass.description,
    link: `/classes/${klass.id}`
  }

  const spellcasting = spellcastings.find(i => i.id === klass.id)
  item.body += ` Spell Casting ${spellcasting.html}`

  searchItems.push(item)

  let subclassFeatureIndex = 0;
  for (let p of klass.progression) {
    for (let f of p.features) {
      if (f === 'ability_score_improvement') {
        continue
      }
      if (f === 'subclass') {
        for (let sc of klass.subclasses) {
          for (let scf of sc.features[subclassFeatureIndex]) {
            searchItems.push(createScfItem(scf, p.level, [klass.name, sc.name]))
          }
        }
        subclassFeatureIndex++
      } else {
        searchItems.push(createScfItem(f, p.level, [klass.name]))
      }
    }
  }
}

function createScfItem(id, level, qualifiers) {
  const cf = classFeatures.find(i => i.id === id)
  if (typeof cf !== 'undefined') {
    const nthLevel = ordinal(level)
    qualifiers.push(`${nthLevel}-level`)
    return {
      id: `${cf.id}---${qualifiers[0]}`,
      title: cf.name,
      type: 'character',
      subType: 'class_features',
      qualifiers: qualifiers,
      body: cleanBody(cf.html.replace('{{ level }}', nthLevel))
    }
  } else {
    console.log(`could not find ${id}`)
  }
}

for (const i of searchItems) {
  if (typeof i.id === 'undefined') {
    console.log(i)
  }
}

fs.writeFileSync(`./.me5e/search-index.json`, JSON.stringify(searchItems, null, 2))
