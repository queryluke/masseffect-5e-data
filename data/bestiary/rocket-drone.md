---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/2/2f/Virmire_geth_rocket_drone.png/revision/latest/scale-to-width-down/640?cb=20091209133938
type: synthetic
unit: mech
alignment: nn
profBonus: 2
ac: 11
hp:
  dieCount: 5
  dieType: 6
abilityScores:
  str: 10
  dex: 10
  con: 10
  int: 10
  wis: 10
  cha: 4
irv:
  conImm:
    - poisoned
  damImm:
    - poison
    - psychic
  vul:
    - lightning
savingThrows: false
senses: false
size: small
skills: false
speed:
  fly: 25
entries:
  actions:
    distortion-rocket:
      attack: ranged
      proficient: true
      range: 75
      dc: false
      mod: dex
      damage: [{"dieCount":'2', "dieType":'8', "mod":true, "type":thunder}]
      target: one
cr: '00500'
shields: false
---
