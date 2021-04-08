---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/1/16/ME3_Cerberus_Atlas.png/revision/latest/scale-to-width-down/700?cb=20120322140845
type: synthetic
unit: cerberus
alignment: 'n'
profBonus: 5
ac: 20
hp:
  dieCount: 14
  dieType: 10
abilityScores:
  str: 20
  dex: 10
  con: 20
  int: 18
  wis: 10
  cha: 9
savingThrows:
  - str
  - int
senses:
  darkvision: 24
size: large
skills: []
speed:
  walk: 15
entries:
  actions:
    smash:
      attack: melee
      range: 5
      dc: false
      save: false
      damage: [null]
    mass-accelerator-cannon:
      attack: ranged
      range: 300
      dc: false
      save: false
      damage: [null]
    rocket-launcher:
      dc: false
      save: false
      recharge: ['5','6']
    smoke:
      ref: grenade
      mark: grenade
      uses: 5
  legendary:
    eject:
      cost: 3
    mass-accelerator-cannon-attack:
      cost: 1
    smash-attack:
      cost: 1
powercasting: false
---
