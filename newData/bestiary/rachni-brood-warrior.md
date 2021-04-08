---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/e/e5/Rachni_Brood_Warrior.PNG/revision/latest/scale-to-width-down/700?cb=20100824160815
type: organic
unit: rachni
alignment: u
profBonus: 2
ac: 15
hp:
  dieCount: 12
  dieType: 10
abilityScores:
  str: 19
  dex: 12
  con: 17
  int: 7
  wis: 15
  cha: 7
savingThrows:
  - con
  - wis
senses:
  blindsight: 4
size: large
skills:
  - perception
speed:
  walk: 30
entries:
  features:
    barrier:
      uses: 3
      perDay: true
  actions:
    acid-spit:
      attack: ranged
      range: 50
      dc: false
      save: false
      damage: [null,null]
    impale:
      attack: melee
      range: 10
      dc: false
      save: false
      damage: [null,null]
powercasting:
  mod: wis
  innate:
    - id: stasis
      perDay: 3
    - id: warp
      perDay: 5
---
