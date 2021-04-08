---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/e/eb/ME3_Banshee.png/revision/latest/scale-to-width-down/548?cb=20120319210941
type: synorg
unit: reaper
alignment: le
profBonus: 5
ac: 16
hp:
  dieCount: 30
  dieType: 10
abilityScores:
  str: 11
  dex: 16
  con: 11
  int: 12
  wis: 18
  cha: 20
savingThrows:
  - dex
  - wis
senses:
  darkvision: 24
size: large
skills: []
speed:
  walk: 15
entries:
  features:
    barrier:
      uses: 3
      perDay: true
  actions:
    impale:
      attack: melee
      range: 5
      dc: false
      save: false
      damage: [null]
    wail:
      dc: false
      save: false
      recharge: ['5','6']
  legendary:
    cast-a-power:
      cost: 3
    impale-attack:
      cost: 1
    wail-attack:
      cost: 2
powercasting:
  mod: cha
  innate:
    - id: charge
      perDay: at-will
    - id: nova
      perDay: at-will
    - id: warp
      perDay: 6
      level: 4
---
