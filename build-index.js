const fs = require('fs')

function ordinal (value) {
  return["st","nd","rd"][((value+90)%100-10)%10-1]||"th"
}



function setType(dir) {
  const types = [
    { type: 'character', items: ['backgrounds', 'feats', 'species', 'traits', 'subspecies'] },
    { type: 'equipment', items: ['gear', 'vehicles', 'mods', 'armor', 'weapons'] },
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
  'subspecies',
  // can go in any order
  'backgrounds',
  'conditions',
  'feats',
  'gear',
  'species',
  'powers',
  'vehicles',
  'armor',
  'mods',
  'bestiary',
  'weapons',
  'rules'
]


const searchItems = []

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

      // SPECIES
      case 'species':
        const body = [cleanBody(item.html)]
        body.push(item.age)
        body.push(item.alignment)
        body.push(item.size)
        body.push(item.speed)
        searchItem.body = body.join(' ')
        searchItem.link = `/species/${item.id}`
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
          for (let sub of item.variants) {
            const index = searchItems.findIndex(si => si.id.replace('_','-') === sub)
            if (index > -1) {
              searchItems[index].qualifiers.push(item.name)
              searchItems[index].qualifiers.push('Variant')
              searchItems[index].link = `/species/${item.id}`
            }
          }
        }
        break

      // POWERS
      case 'powers':
        searchItem.qualifiers.push(item.type)
        searchItem.body = cleanBody(item.html)
        if (item.advancementOptions) {
          searchItem.body += ` ${item.advancementOptions[0].description}`
          searchItem.body += ` ${item.advancementOptions[1].description}`
        }
        break

      // VEHICLES
      case 'vehicles':
        searchItem.body = cleanBody(item.html)
        if (item.weapons) {
          for (let attack of item.weapons) {
            item.body += ` ${attack.damage}`
          }
        }
        break

      // RULES
      case 'rules':
        searchItem.link = `manual/${item.section}#${item.id}`
        searchItem.body = cleanBody(item.html)
        break

      // WEAPONS
      case 'weapons':
        searchItem.body = ''
        if (item.properties.length > 0) {
          searchItem.body += item.properties.join(', ')
        }
        if (item.notes) {
          searchItem.body += ` ${item.notes}`
        }
        break

      // BESTIARY
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

      // CLASSES
      case 'classes':
        searchItem.body = cleanBody((item.html || ''))
        searchItem.link = `/classes/${item.id}`
        break

      // DEFAULT
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
 Class Features
 */

const classFeatures = require(`./.me5e/class-features.json`)
for (let cf of classFeatures) {
  if (cf.id === 'ability-score-improvement') {
    continue
  }
  if (cf.subclass) {
    searchItems.push({
      id: `${cf.id}---${cf['class']}---${cf.subclass}`,
      title: cf.name,
      type: 'character',
      subType: 'class_features',
      qualifiers: [cf['class'],cf.subclass,`${ordinal(cf.level)}-level`],
      body: cleanBody((cf.html || ''))
    })
  } else {
    searchItems.push({
      id: `${cf.id}---${cf['class']}`,
      title: cf.name,
      type: 'character',
      subType: 'class_features',
      qualifiers: [cf['class'],`${ordinal(cf.level)}-level`],
      body: cleanBody((cf.html || ''))
    })
  }
}

for (const i of searchItems) {
  if (typeof i.id === 'undefined') {
    console.log(i)
  }
}

fs.writeFileSync(`./.me5e/search-index.json`, JSON.stringify(searchItems, null, 2))
