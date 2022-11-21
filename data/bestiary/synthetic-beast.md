---
image: null
type: synthetic
unit: tracker
alignment: tracker
profBonus: 2
ac: variable
hp:
  dieCount: 1
  dieType: 8
abilityScores:
  str: 14
  dex: 14
  con: 14
  int: 12
  wis: 10
  cha: 3
irv:
  vul:
    - lightning
  imm:
    - poison
    - psychic
  conImm:
    - poisoned
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
        - {dieCount: '1', dieType: '6', mod: true, type: bludgeoning}
      target: one
      id: maul
cr: '000125'
shields:
  capacity: 10
---
