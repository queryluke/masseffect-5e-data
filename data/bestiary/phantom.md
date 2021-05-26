---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/4/4d/ME3_Cerberus_Phantom.png/revision/latest/scale-to-width-down/699?cb=20120325214910
type: organic
unit: cerberus
alignment: ne
profBonus: 3
ac: 17
hp:
  dieCount: 20
  dieType: 8
abilityScores:
  str: 16
  dex: 22
  con: 12
  int: 11
  wis: 15
  cha: 15
irv: false
savingThrows:
  - dex
senses: false
size: medium
skills:
  - acrobatics
  - electronics
  - perception
  - stealth
speed:
  walk: 40
entries:
  features:
    barrier:
      uses: 3
      perDay: true
  actions:
    monomolecular-blade:
      ref: weapon
      proficient: true
    palm-blaster:
      attack: ranged
      proficient: true
      range: 10
      dc: false
      mod: dex
      damage: [{"dieCount":'3', "dieType":'10', "mod":true, "type":thunder}]
      target: one
cr: '07000'
shields: false
---
