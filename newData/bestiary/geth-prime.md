---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/c/c9/ME3_Geth_Prime.png/revision/latest/scale-to-width-down/229?cb=20120403192110
type: synthetic
unit: geth
alignment: ln
profBonus: 4
ac: 18
hp:
  dieCount: 20
  dieType: 10
abilityScores:
  str: 16
  dex: 18
  con: 16
  int: 14
  wis: 10
  cha: 10
savingThrows:
  - con
  - int
senses: []
size: large
skills:
  - electronics
speed:
  walk: 30
entries:
  actions:
    weapon-bash:
      attack: melee
      range: 5
      dc: false
      save: false
      damage: [null]
    geth-pulse-rifle:
      ref: weapon
    summon-combat-drone:
      dc: false
      save: false
      uses: 3
      perDay: true
    summon-geth-turret:
      dc: false
      save: false
      uses: 1
      perDay: true
  legendary:
    activate-radar-jamming:
      cost: 2
    geth-pulse-rifle-attack:
      cost: 1
    summon-turret-or-drone:
      cost: 3
powercasting: false
---
