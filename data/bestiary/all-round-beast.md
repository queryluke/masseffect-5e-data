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
  str: 14
  dex: 16
  con: 12
  int: 4
  wis: 12
  cha: 6
irv: false
savingThrows: false
senses: false
size: medium
skills: false
speed:
  walk: 40
  note: choose 16m swimming or climbing, or 8m of burrowing
entries:
  actions:
    - attack: melee
      proficient: true
      range: 5
      dc: false
      mod: str
      damage:
        - {dieCount: '1', dieType: '8', mod: true, type: piercing}
      target: one
      id: melee-strike
cr: '00125'
shields:
  capacity: 5
  regen: 5
---
