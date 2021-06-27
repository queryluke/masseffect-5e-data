---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/8/8c/Blue_Suns_Commander.png/revision/latest/scale-to-width-down/369?cb=20100626053904
type: organic
unit: blue_suns
alignment: nn
profBonus: 3
ac: 16
hp:
  dieCount: 20
  dieType: 8
abilityScores:
  str: 13
  dex: 16
  con: 14
  int: 15
  wis: 12
  cha: 14
irv: false
savingThrows:
  - con
  - wis
senses: false
size: medium
skills:
  - survival
  - perception
  - athletics
speed:
  walk: 30
entries:
  features:
    - uses: 1
      perDay: true
      id: tech-armor
    - recharge: short
      id: leadership
    - mod: int
      list:
        - {id: target-painting, perDay: 3}
      id: innate-powercasting
  actions:
    - ref: weapon
      proficient: true
      id: m-76-revenant
      weaponId: m-76-revenant
    - ref: weapon
      proficient: true
      id: m-300-claymore
      weaponId: m-300-claymore
cr: '05000'
shields:
  capacity: 20
  regen: 10
---
