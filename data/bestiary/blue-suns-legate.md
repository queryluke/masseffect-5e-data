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
    tech-armor:
      uses: 1
      perDay: true
    leadership:
      recharge: short
    innate-powercasting:
      mod: int
      list: [{"id":target-painting, "perDay":3}]
  actions:
    m-76-revenant:
      ref: weapon
      proficient: true
    m-300-claymore:
      ref: weapon
      proficient: true
cr: '05000'
shields:
  capacity: 20
  regen: 10
---
