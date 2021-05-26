---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/0/08/N7_Shadow_Infiltrator_MP.png/revision/latest/scale-to-width-down/250?cb=20120717151201
type: organic
unit: n_7
alignment: ln
profBonus: 3
ac: 15
hp:
  dieCount: 11
  dieType: 8
abilityScores:
  str: 12
  dex: 18
  con: 14
  int: 16
  wis: 11
  cha: 12
irv: false
savingThrows:
  - dex
senses: false
size: medium
skills:
  - acrobatics
  - survival
speed:
  walk: 35
entries:
  features:
    tactical-cloak:
      uses: 3
      perDay: true
    innate-powercasting:
      mod: int
      list: [{"id":electric-slash, "perDay":4, "level":3}]
  actions:
    m-97-viper:
      ref: weapon
      proficient: true
cr: '07000'
shields:
  capacity: 20
  regen: 10
---
