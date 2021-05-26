---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/e/ea/Defense_Drone.png/revision/latest/scale-to-width-down/606?cb=20120407052056
type: synthetic
unit: mech
alignment: nn
profBonus: 2
ac: 12
hp:
  dieCount: 5
  dieType: 6
abilityScores:
  str: 11
  dex: 14
  con: 11
  int: 10
  wis: 10
  cha: 6
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
  fly: 30
entries:
  actions:
    pulse-cannon:
      attack: ranged
      proficient: true
      range: 50
      dc: false
      mod: dex
      damage: [{"dieCount":'1', "dieType":'10', "mod":true, "type":radiant}]
      target: one
cr: '00500'
shields:
  capacity: 5
  regen: 5
---
