---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/3/3f/Eclipse_Commando.png/revision/latest?cb=20100625014253
type: organic
unit: eclipse
alignment: nn
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
irv: false
savingThrows:
  - wis
  - cha
senses: false
size: medium
skills: false
speed:
  walk: 30
entries:
  features:
    - uses: 3
      perDay: true
      id: barrier
    - mod: cha
      casterLevel: '12'
      list:
        - charge
        - warp
      id: powercasting
  actions:
    - ref: weapon
      proficient: true
      id: m-300-claymore
      weaponId: m-300-claymore
    - dc: false
      save: false
      recharge: short
      id: leadership
cr: '05000'
shields: false
---
