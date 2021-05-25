---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/8/82/ME3_Swarmer.png/revision/latest/scale-to-width-down/350?cb=20120319204747
type: synorg
unit: reaper
alignment: le
profBonus: 2
ac: 10
hp:
  dieCount: 3
  dieType: 4
abilityScores:
  str: 4
  dex: 12
  con: 8
  int: 4
  wis: 4
  cha: 4
irv:
  conImm:
    - charmed
savingThrows:
  - dex
senses:
  darkvision: 30
size: tiny
skills: false
speed:
  walk: 35
entries:
  actions:
    suicide-attack:
      attack: melee
      proficient: true
      range: 5
      dc: false
      mod: dex
      damage: [{"dieCount":'1', "dieType":'6', "mod":true, "type":acid}]
      target: one
cr: '00125'
shields: false
---
