---
image: null
type: organic
unit: tracker
alignment: tracker
profBonus: 2
ac: 11
hp:
  dieCount: 1
  dieType: 10
abilityScores:
  str: 16
  dex: 10
  con: 16
  int: 2
  wis: 11
  cha: 7
irv: false
savingThrows: false
senses: false
size: medium
skills: false
speed:
  walk: 30
entries:
  actions:
    - attack: melee
      proficient: true
      range: 5
      dc: false
      mod: str
      damage:
        - {dieCount: '1', dieType: '10', mod: true, type: bludgeoning}
      target: one
      id: gore
cr: '000125'
shields:
  capacity: 5
  regen: 5
---
