---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/2/25/Eclipse_Engineer.png/revision/latest?cb=20100625014624
type: organic
unit: eclipse
alignment: 'n'
profBonus: 2
ac: 14
hp:
  dieCount: 10
  dieType: 8
abilityScores:
  str: 11
  dex: 13
  con: 12
  int: 14
  wis: 13
  cha: 10
savingThrows: []
senses: []
size: medium
skills:
  - electronics
speed:
  walk: 30
entries:
  features:
    tech-armor:
      uses: 1
      perDay: true
  actions:
    m-6-carnifex:
      ref: weapon
    summon-combat-drone:
      dc: false
      save: false
      uses: 1
      perDay: true
powercasting:
  mod: int
  innate:
    - id: incinerate
      perDay: 3
      level: 2
---
