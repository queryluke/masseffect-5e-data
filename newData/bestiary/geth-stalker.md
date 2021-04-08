---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/e/ec/ME_geth_stalker.png/revision/latest/scale-to-width-down/350?cb=20130517141111
type: synthetic
unit: geth
alignment: ln
profBonus: 2
ac: 14
hp:
  dieCount: 18
  dieType: 8
abilityScores:
  str: 8
  dex: 16
  con: 8
  int: 12
  wis: 14
  cha: 5
savingThrows:
  - dex
senses:
  darkvision: 30
  infrared vision: 30
size: medium
skills:
  - perception
speed:
  walk: 40
entries:
  actions:
    claw:
      attack: melee
      range: 5
      dc: false
      save: false
      damage: [null]
    eye-cannon:
      attack: ranged
      range: 150
      dc: false
      save: false
      damage: [null]
powercasting:
  mod: int
  innate:
    - id: sabotage
      perDay: at-will
---
