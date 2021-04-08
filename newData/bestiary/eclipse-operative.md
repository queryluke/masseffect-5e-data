---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/9/92/Eclipse_Operative.png/revision/latest?cb=20100704072730
type: organic
unit: eclipse
alignment: 'n'
profBonus: 2
ac: 15
hp:
  dieCount: 9
  dieType: 8
abilityScores:
  str: 11
  dex: 14
  con: 13
  int: 16
  wis: 14
  cha: 12
savingThrows:
  - int
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
    m-9-tempest:
      ref: weapon
    summon-combat-drone:
      dc: false
      save: false
      uses: 2
      perDay: true
powercasting:
  mod: int
  innate:
    - id: incinerate
      perDay: 5
      level: 2
---
