---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/9/98/ME3_adjutant.png/revision/latest/scale-to-width-down/700?cb=20121128185320
type: synorg
unit: cerberus
alignment: le
profBonus: 3
ac: 18
hp:
  dieCount: 15
  dieType: 10
abilityScores:
  str: 15
  dex: 18
  con: 16
  int: 10
  wis: 8
  cha: 12
savingThrows:
  - dex
senses:
  darkvision: 24
size: large
skills: []
speed:
  walk: 30
entries:
  actions:
    arm-cannon:
      attack: ranged
      range: 50
      dc: false
      save: false
      damage: [null]
    bash:
      attack: melee
      range: 5
      dc: false
      save: false
      damage: [null]
    reaper-infection:
      attack: melee
      range: 5
      dc: false
      save: false
      damage: [null]
powercasting:
  mod: cha
  innate:
    - id: singularity
      perDay: 3
---
