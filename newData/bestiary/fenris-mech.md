---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/3/32/ME2_FENRIS_Mech.png/revision/latest/scale-to-width-down/350?cb=20120419003938
type: synthetic
unit: mech
alignment: 'n'
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
savingThrows:
  - dex
senses:
  infrared vision: 24
size: small
skills:
  - perception
speed:
  walk: 40
entries:
  actions:
    pounce:
      attack: melee
      range: 10
      dc: false
      save: false
      damage: [null]
    stun:
      attack: melee
      range: 5
      dc: false
      save: false
      damage: [null]
powercasting:
  mod: int
  innate:
    - id: shocking grasp
      perDay: 3
---
