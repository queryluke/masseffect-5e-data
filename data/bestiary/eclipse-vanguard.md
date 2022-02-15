---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/4/45/Eclipse_Vanguard.png/revision/latest?cb=20100624033844
type: organic
unit: eclipse
alignment: nn
profBonus: 2
ac: 14
hp:
  dieCount: 9
  dieType: 8
abilityScores:
  str: 13
  dex: 13
  con: 14
  int: 14
  wis: 15
  cha: 13
irv: false
savingThrows: false
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
    - uses: 1
      perDay: true
      id: tech-armor
    - mod: wis
      casterLevel: '6'
      list:
        - shockwave
        - warp
      id: powercasting
  actions:
    - ref: weapon
      proficient: true
      id: m-27-scimitar
      weaponId: m-27-scimitar
cr: '03000'
shields: false
---
