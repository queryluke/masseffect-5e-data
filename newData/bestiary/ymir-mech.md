---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/5/5f/ME2_YMIR_Mech.png/revision/latest/scale-to-width-down/700?cb=20120419005946
type: synthetic
unit: mech
alignment: 'n'
profBonus: 4
ac: 18
hp:
  dieCount: 17
  dieType: 10
abilityScores:
  str: 20
  dex: 6
  con: 18
  int: 16
  wis: 8
  cha: 12
savingThrows:
  - str
  - int
senses:
  infrared vision: 30
size: large
skills: []
speed:
  walk: 15
entries:
  actions:
    mass-accelerator-machinegun:
      attack: ranged
      range: 150
      dc: false
      save: false
      damage: [null,null]
    rocket-launcher:
      dc: false
      save: false
      recharge: ['5','6']
powercasting: false
---
