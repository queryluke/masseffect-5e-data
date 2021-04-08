---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/9/9e/Thresher_Maw_ME2.png/revision/latest?cb=20100704014552
type: organic
unit: alien
alignment: u
profBonus: 8
ac: 22
hp:
  dieCount: 27
  dieType: 20
abilityScores:
  str: 30
  dex: 11
  con: 30
  int: 3
  wis: 11
  cha: 11
savingThrows:
  - str
  - con
senses:
  blindsight: 10
  tremorsense: 24
size: gargantuan
skills: []
speed:
  walk: 50
  burrow: 35
entries:
  features:
    legendary-resistance:
      uses: 3
      perDay: true
  actions:
    grasp:
      attack: melee
      range: 10
      dc: false
      save: false
      damage: [null,null]
    tail:
      attack: melee
      range: 20
      dc: false
      save: false
      damage: [null]
  legendary:
    acid-spit-attack:
      cost: 2
    move:
      cost: 1
    tail-attack:
      cost: 1
powercasting: false
---
