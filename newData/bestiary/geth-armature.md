---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/a/a9/ArmatureLanding.png/revision/latest/scale-to-width-down/350?cb=20090125024722
type: synthetic
unit: geth
alignment: ln
profBonus: 5
ac: 15
hp:
  dieCount: 10
  dieType: 12
abilityScores:
  str: 22
  dex: 10
  con: 25
  int: 18
  wis: 6
  cha: 8
savingThrows:
  - int
senses:
  darkvision: 24
  infrared vision: 24
size: huge
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
powercasting: false
---
