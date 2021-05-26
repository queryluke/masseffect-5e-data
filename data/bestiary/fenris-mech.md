---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/3/32/ME2_FENRIS_Mech.png/revision/latest/scale-to-width-down/350?cb=20120419003938
type: synthetic
unit: mech
alignment: nn
profBonus: 2
ac: 14
hp:
  dieCount: 10
  dieType: 6
abilityScores:
  str: 12
  dex: 16
  con: 11
  int: 10
  wis: 14
  cha: 8
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
  infrared_vision: 30
size: small
skills:
  - perception
speed:
  walk: 40
entries:
  features:
    innate-powercasting:
      mod: int
      list: [{"id":shocking-grasp, "perDay":3}]
  actions:
    pounce:
      attack: melee
      proficient: true
      range: 10
      dc: false
      mod: str
      damage: [{"dieCount":'2', "dieType":'6', "mod":true, "type":bludgeoning}]
      target: one
    stun:
      attack: melee
      proficient: true
      range: 5
      dc: false
      mod: str
      damage: [{"dieCount":'2', "dieType":'8', "mod":true, "type":lightning}]
      target: one
cr: '00500'
shields: false
---
