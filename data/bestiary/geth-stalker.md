---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/e/ec/ME_geth_stalker.png/revision/latest/scale-to-width-down/350?cb=20130517141111
type: synthetic
unit: geth
alignment: ln
profBonus: 2
ac: 14
hp:
  dieCount: 18
  dieType: 8
abilityScores:
  str: 8
  dex: 16
  con: 8
  int: 12
  wis: 14
  cha: 5
irv:
  conImm:
    - poisoned
  damImm:
    - poison
    - psychic
  vul:
    - lightning
savingThrows:
  - dex
senses:
  darkvision: 30
  infrared_vision: 30
size: medium
skills:
  - perception
speed:
  walk: 40
entries:
  features:
    innate-powercasting:
      mod: int
      list: [{"id":sabotage, "perDay":at_will}]
  actions:
    claw:
      attack: melee
      proficient: true
      range: 5
      dc: false
      mod: str
      damage: [{"dieCount":'1', "dieType":'8', "mod":true, "type":slashing}]
      target: one
    eye-cannon:
      attack: ranged
      proficient: true
      range: 150
      dc: false
      mod: dex
      damage: [{"dieCount":'3', "dieType":'6', "mod":true, "type":radiant}]
      target: one
cr: '03000'
shields:
  capacity: 5
  regen: 5
---
