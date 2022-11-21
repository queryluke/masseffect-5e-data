---
image: null
type: organic
unit: tracker
alignment: tracker
profBonus: 2
ac: 14
hp:
  dieCount: 1
  dieType: 8
abilityScores:
  str: 10
  dex: 16
  con: 10
  int: 4
  wis: 14
  cha: 6
irv: false
savingThrows: []
senses: false
size: small
skills:
  - perception
speed:
  fly: 60
entries:
  actions:
    - attack: melee
      proficient: true
      range: 5
      dc: false
      mod: dex
      damage:
        - {dieCount: '1', dieType: '4', mod: true, type: slashing}
      target: one
      id: claw
cr: '000125'
shields:
  capacity: 5
  regen: 5
---
