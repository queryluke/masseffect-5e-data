---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/6/60/ME3-Rampart-Mech.png/revision/latest/scale-to-width-down/287?cb=20121128090615
type: synthetic
unit: mech
alignment: nn
profBonus: 2
ac: 15
hp:
  dieCount: 15
  dieType: 8
abilityScores:
  str: 16
  dex: 15
  con: 8
  int: 16
  wis: 11
  cha: 8
irv:
  conImm:
    - petrified
    - poisoned
  damImm:
    - poison
    - psychic
  vul:
    - lightning
savingThrows: []
senses: false
size: medium
skills: false
speed:
  walk: 30
entries:
  features:
    hex-shield:
      uses: 1
      perDay: true
    tactical-cloak:
      uses: 1
      perDay: true
  actions:
    omni-blade:
      ref: weapon
      proficient: true
    m-23-katana:
      ref: weapon
      proficient: true
cr: '02000'
shields: false
---
