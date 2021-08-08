---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/9/92/Eclipse_Operative.png/revision/latest?cb=20100704072730
type: organic
unit: eclipse
alignment: nn
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
irv: false
savingThrows:
  - int
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
        - {id: incinerate, perDay: 5, level: 2}
      id: innate-powercasting
  actions:
    - ref: weapon
      proficient: true
      id: m-9-tempest
      weaponId: m-9-tempest
    - dc: false
      save: false
      uses: 2
      perDay: true
      id: summon-combat-drone
cr: '03000'
shields:
  capacity: 10
  regen: 10
---
