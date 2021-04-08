---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/6/64/Geth_Colossus_01.jpg/revision/latest/scale-to-width-down/350?cb=20080922231050
type: synthetic
unit: geth
alignment: ln
profBonus: 7
ac: 17
hp:
  dieCount: 9
  dieType: 20
abilityScores:
  str: 28
  dex: 8
  con: 28
  int: 20
  wis: 6
  cha: 8
savingThrows:
  - int
senses:
  darkvision: 24
  infrared vision: 24
size: gargantuan
skills:
  - perception
speed:
  walk: 15
entries:
  features:
    repair-protocol:
      uses: 3
      perDay: true
  actions:
    mass-accelerator-machinegun:
      attack: ranged
      range: 300
      dc: false
      save: false
      damage: [null,null]
    siege-pulse:
      dc: false
      save: false
      recharge: ['6']
  legendary:
    mass-accelerator-machinegun-attack:
      cost: 1
    siege-cannon-attack:
      cost: 1
    siege-pulse-attack:
      cost: 2
powercasting: false
---
