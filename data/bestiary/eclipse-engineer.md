---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/2/25/Eclipse_Engineer.png/revision/latest?cb=20100625014624
type: organic
unit: eclipse
alignment: nn
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
irv: false
savingThrows: false
senses: false
size: medium
skills:
  - electronics
speed:
  walk: 30
entries:
  features:
    - uses: 1
      perDay: true
      id: tech-armor
    - mod: int
      list:
        - {id: incinerate, perDay: 3, level: 2}
      id: innate-powercasting
  actions:
    - ref: weapon
      proficient: true
      id: m-6-carnifex
      weaponId: m-6-carnifex
    - dc: false
      save: false
      uses: 1
      perDay: true
      id: summon-combat-drone
cr: '02000'
shields:
  capacity: 10
  regen: 5
---
