---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/3/3f/Eclipse_Commando.png/revision/latest?cb=20100625014253
type: organic
unit: eclipse
alignment: 'n'
profBonus: 3
ac: 15
hp:
  dieCount: 16
  dieType: 8
abilityScores:
  str: 15
  dex: 13
  con: 15
  int: 14
  wis: 14
  cha: 16
savingThrows:
  - wis
  - cha
senses: []
size: medium
skills: []
speed:
  walk: 30
entries:
  features:
    barrier:
      uses: 3
      perDay: true
  actions:
    m-300-claymore:
      ref: weapon
    leadership:
      dc: false
      save: false
      recharge: [after]
powercasting:
  mod: cha
  casterLevel: '12'
  casterType: full
  list:
    - charge
    - warp
---
