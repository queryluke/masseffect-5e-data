---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/c/ce/Collector_Guardian.png/revision/latest/scale-to-width-down/350?cb=20100623060233
type: organic
unit: collector
alignment: le
profBonus: 2
ac: 16
hp:
  dieCount: 10
  dieType: 8
abilityScores:
  str: 16
  dex: 15
  con: 16
  int: 8
  wis: 8
  cha: 9
savingThrows:
  - con
senses:
  darkvision: 24
size: medium
skills:
  - athletics
speed:
  walk: 30
  fly: 15
entries:
  actions:
    weapon-bash:
      attack: melee
      range: 5
      dc: false
      save: false
      damage: [null]
    collector-assault-rifle:
      ref: weapon
    hex-shield:
      dc: false
      save: false
      uses: 1
      perDay: true
powercasting: false
---
