const fs = require('fs')

function ordinal (value) {
  return["st","nd","rd"][((value+90)%100-10)%10-1]||"th"
}



function setType(dir) {
  const types = [
    { type: 'character', items: ['backgrounds', 'feats', 'species', 'traits', 'subspecies', 'species-variants', 'class-features'] },
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
  'armor',
  'backgrounds',
  'bestiary',
  'conditions',
  'class-features',
  'feats',
  'gear',
  'mods',
  'powers',
  'rules',
  'species',
  'species-variants',
  'subspecies',
  'traits',
  'weapons',
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
      link: `/${file}/${item.id}`,
      body: cleanBody((item.html || '')),
      html: false
    }

    // create normalized content
    switch (file) {

      // ARMOR
      case 'armor':
        searchItem.body += `\n${item.features.map(i => cleanBody(i)).join(' ')}\n${item.setBonus.map(i => cleanBody(i)).join(' ')}`
        break

        // BESTIARY
      case 'bestiary':
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

      // FEATURES
      case 'class-features':
        searchItem.link = false
        searchItem.html = item.html
        searchItem.subType = 'features'
        searchItem.qualifiers.push(item['class'])
        if (item.subclass) {
          searchItem.qualifiers.push(item.subclass.replace(/-/g,' '))
        }
        searchItem.qualifiers.push(`${item.level}${ordinal(item.level)} level`)
        break

      // CONDITIONS
      case 'conditions':
        searchItem.link = `/appendix/conditions/${item.id}`
        break

      // GEAR
      case 'gear':
        searchItem.qualifiers.push(item.type)
        break

      // MODS
      case 'mods':
        searchItem.qualifiers.push(item.type)
        break

      // POWERS
      case 'powers':
        searchItem.qualifiers.push(item.type)
        if (item.advancementOptions) {
          searchItem.body += ` ${item.advancementOptions[0].description}`
          searchItem.body += ` ${item.advancementOptions[1].description}`
        }
        break

      // RULES
      case 'rules':
        searchItem.link = `manual/${item.section}#${item.id}`
        break

      // VARIANTS
      case 'species-variants':
        searchItem.link = `species/${item.species}`
        searchItem.qualifiers.push(item.species)
        searchItem.subType = 'variant'
        break

      // TRAITS
      case 'traits':
        searchItem.link = false
        searchItem.html = item.html
        searchItem.qualifiers.push(item.species)
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

      // DEFAULT
        // BACKGROUNDS
        // FEATS
        // SPECIES
      default:
        break
    }
    searchItems.push(searchItem)
  }
}

for (const i of searchItems) {
  if (typeof i.id === 'undefined') {
    console.log(i)
  }
}

fs.writeFileSync(`./.me5e/search-index.json`, JSON.stringify(searchItems, null, 2))
