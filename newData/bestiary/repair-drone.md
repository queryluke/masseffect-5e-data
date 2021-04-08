---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/2/21/Maintenance_Drone.png/revision/latest/scale-to-width-down/350?cb=20100909024927
type: synthetic
unit: mech
alignment: 'n'
profBonus: 2
ac: 11
hp:
  dieCount: 5
  dieType: 6
abilityScores:
  str: 8
  dex: 12
  con: 10
  int: 11
  wis: 11
  cha: 6
savingThrows: []
senses: []
size: small
skills: []
speed:
  fly: 35
entries:
  actions:
    defibrillators:
      attack: melee
      range: 5
      dc: false
      save: false
      damage: [null]
    stabalize:
      dc: false
      save: false
      recharge: [after]
powercasting:
  mod: int
  innate:
    - id: first aid
      perDay: 3
---
