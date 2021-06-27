---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/c/c0/ME2_Loki_Mech.png/revision/latest?cb=20120917060158
type: synthetic
unit: mech
alignment: nn
profBonus: 2
ac: 10
hp:
  dieCount: 5
  dieType: 8
abilityScores:
  str: 10
  dex: 12
  con: 11
  int: 8
  wis: 6
  cha: 5
irv:
  conImm:
    - petrified
    - poisoned
  damImm:
    - poison
    - psychic
  vul:
    - lightning
savingThrows: false
senses:
  infrared_vision: 30
size: medium
skills:
  - perception
speed:
  walk: 25
entries:
  features:
    - mod: int
      list:
        - {id: shocking-grasp, perDay: 5}
      id: innate-powercasting
  actions:
    - ref: weapon
      proficient: true
      id: m-4-shuriken
      weaponId: m-4-shuriken
    - ref: weapon
      proficient: true
      id: m-3-predator
      weaponId: m-3-predator
cr: '00125'
shields: false
---
