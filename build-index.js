const fs = require('fs')
const config = require('./package.json')
const versionDir = `./docs/v${config.version.replace(/\./g,'')}`

function setType(dir) {
  const types = [
    {
      type: 'character',
      items: ['backgrounds', 'feats', 'species', 'traits', 'species-variants', 'class-features']
    },
    {
      type: 'equipment',
      items: ['gear', 'vehicles', 'mods', 'armor', 'weapons']
    },
    {
      type: 'manual',
      items: ['manual','conditions', 'weapon-properties']
    },
    {
      type: 'power',
      items: ['powers']
    },
    {
      type: 'bestiary',
      items: ['bestiary']
    }
  ]
  return types.find(t => t.items.includes(dir)).type
}

function setPrimaryType(dir, messages) {
  const types = [
    {
      type: messages.character_title.split('|')[0].trim(),
      items: ['backgrounds', 'feats', 'species', 'traits', 'species-variants', 'class-features']
    },
    {
      type: messages.equipment_title.split('|')[0].trim(),
      items: ['gear', 'vehicles', 'mods', 'armor', 'weapons']
    },
    {
      type: messages.manual.title,
      items: ['manual','conditions', 'weapon-properties']
    },
    {
      type: messages.power_title.split('|')[0].trim(),
      items: ['powers']
    },
    {
      type: messages.bestiary_title.split('|')[0].trim(),
      items: ['bestiary']
    }
  ]
  return types.find(t => t.items.includes(dir)).type
}

function setSubtype(file, messages) {
  switch(file) {
    case 'armor':
    case 'bestiary':
    case 'gear':
    case 'class-features':
    case 'species':
      return messages.class_title.split('|')[1].trim()
    case 'species-variants':
    case 'traits':
      return messages.species_title.split('|')[1].trim()
    case 'powers':
      return null
    case 'manual':
      return null
    case 'conditions':
    case 'weapon-properties':
      return messages.appendix_title
    default:
      return messages[`${file.slice(0, -1)}_title`].split('|')[0].trim()
  }
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
  'manual',
  'mods',
  'powers',
  'species',
  'species-variants',
  'traits',
  'weapons',
  'weapon-properties'
]

const langs = fs.readdirSync(versionDir)

for (const lang of langs) {
  const searchItems = []
  const messages = require(`${versionDir}/${lang}/messages.json`)
  const setBonuses = require(`${versionDir}/${lang}/set-bonuses.json`)
  const classes = require(`${versionDir}/${lang}/classes.json`)
  const subclasses = require(`${versionDir}/${lang}/subclasses.json`)
  const species = require(`${versionDir}/${lang}/species.json`)

  for (const file of files) {
    const items = require(`${versionDir}/${lang}/${file}.json`)
    for (let item of items) {

      // set the type and subtype
      let searchItem = {
        id: item.id,
        title: item.name || item.title,
        type: setType(file, messages),
        qualifiers: [setPrimaryType(file, messages), setSubtype(file, messages)].filter(i => i !== null),
        link: `/${file}/${item.id}`,
        body: cleanBody((item.html || '')),
        html: false
      }

      // create normalized content
      switch (file) {

        // ARMOR
        case 'armor':
          if (item.set) {
            const sb = setBonuses.find(i => i.id === item.set)
            searchItem.body += sb.bonuses.map(i => cleanBody(i.text)).join(' ')
          }
          break

        // BESTIARY
        case 'bestiary':
          searchItem.qualifiers.push(item.unit)
          searchItem.body = ''
          searchItem.subType = false
          for (let key of ['actions', 'features', 'reactions', 'legendary']) {
            if (item.entries[key]) {

            }
          }
          break

        // FEATURES
        case 'class-features':
          searchItem.link = false
          const className = classes.find(i => i.id === item.klass).name
          searchItem.qualifiers.push(className)
          if (item.subclass) {
            const subclassName = subclasses.find(i => i.id === item.subclass).name
            searchItem.qualifiers.push(subclassName)
          }
          searchItem.qualifiers.push(messages.level_nth.replace('{nth}', messages.ordinal_numbers[item.level]))
          searchItem.html = item.html
          break

        // CONDITIONS
        case 'conditions':
          searchItem.link = `/appendix/conditions/${item.id}`
          searchItem.qualifiers.push(messages.conditions_title)
          break

        // GEAR
        case 'gear':
          searchItem.qualifiers.push(messages.gear_types[item.type])
          break

        // MANUAL
        case 'manual':
          searchItem.link = false
          searchItem.html = item.html
          break

        // MODS
        case 'mods':
          searchItem.qualifiers.push(messages.mod_types[item.type])
          break

        // POWERS
        case 'powers':
          searchItem.qualifiers.push(messages.power_types[item.type])
          if (item.advancements) {
            for (const advKey in item.advancements)
            searchItem.body += `  ${item.advancements[advKey].name}: ${cleanBody(item.advancements[advKey].text)}`
          }
          console.log(searchItem)
          break

        // VARIANTS
        case 'species-variants':
          searchItem.link = false
          const vRace = species.find(i => i.id === item.species)
          searchItem.qualifiers.push(vRace.name)
          searchItem.qualifiers.push(messages.variants_title)
          searchItem.qualifiers.push(item.name)
          searchItem.html = item.html
          break

        // TRAITS
        case 'traits':
          searchItem.link = false
          if (item.species.length > 1) {
            let newSearchItem = {}
            let nRace = {}
            for (let i = 1; i < item.species.length; i++) {
              newSearchItem = {...searchItem}
              nRace = species.find(j => j.id === item.species[i])
              newSearchItem.qualifiers.push(nRace.name)
              newSearchItem.qualifiers.push(messages.traits_title)
              searchItems.push(newSearchItem)
            }
          }
          const race = species.find(i => i.id === item.species[0])
          searchItem.qualifiers.push(race.name)
          searchItem.qualifiers.push(messages.traits_title)
          searchItem.html = item.html
          break

        // WEAPON PROPERTIES
        case 'weapon-properties':
          searchItem.link = false
          searchItem.qualifiers.push(messages.weapon_props_title)
          searchItem.html = item.html
          break

        // DEFAULT
        // BACKGROUNDS
        // FEATS
        // SPECIES
        // WEAPONS
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

  fs.writeFileSync(`${versionDir}/${lang}/search-index.json`, JSON.stringify(searchItems, null, 2))
}




