---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/7/7b/ME3_Ravager.png/revision/latest/scale-to-width-down/350?cb=20120319195950
type: synorg
unit: reaper
alignment: le
profBonus: 3
ac: 12
hp:
  dieCount: 20
  dieType: 10
abilityScores:
  str: 16
  dex: 14
  con: 10
  int: 8
  wis: 11
  cha: 11
irv:
  conImm:
    - charmed
savingThrows: []
senses:
  darkvision: 24
size: large
skills: false
speed:
  walk: 30
entries:
  actions:
    acid-splash:
      dc: false
      save: false
      recharge: ['5','6']
    twin-artillery-cannons:
      attack: ranged
      proficient: true
      range: 150
      dc: false
      mod: dex
      damage: [{"dieCount":'3', "dieType":'10', "mod":true, "type":piercing},{"dieCount":'3', "dieType":'6', "mod":true, "type":acid}]
      target: one
cr: '06000'
shields: false
---
