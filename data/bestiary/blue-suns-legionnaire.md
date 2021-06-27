---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/9/94/Blue_Suns_Legionnaire.png/revision/latest/scale-to-width-down/369?cb=20100626080854
type: organic
unit: blue_suns
alignment: nn
profBonus: 2
ac: 12
hp:
  dieCount: 3
  dieType: 8
abilityScores:
  str: 12
  dex: 14
  con: 13
  int: 9
  wis: 10
  cha: 10
irv: false
savingThrows: false
senses: false
size: medium
skills:
  - survival
speed:
  walk: 30
entries:
  features:
    - uses: 1
      perDay: true
      id: tech-armor
    - list:
        - {id: inferno-grenade, mark: iii, uses: 2}
      id: grenades
  actions:
    - ref: weapon
      proficient: true
      id: m-15-vindicator
      weaponId: m-15-vindicator
cr: '00500'
shields:
  capacity: 5
  regen: 5
---
