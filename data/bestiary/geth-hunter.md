---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/b/be/ME3_Geth_Hunter.png/revision/latest/scale-to-width-down/300?cb=20120326002931
type: synthetic
unit: geth
alignment: ln
profBonus: 2
ac: 14
hp:
  dieCount: 8
  dieType: 8
abilityScores:
  str: 14
  dex: 14
  con: 16
  int: 16
  wis: 12
  cha: 10
irv:
  conImm:
    - poisoned
  damImm:
    - poison
    - psychic
savingThrows:
  - int
senses:
  darkvision: 60
size: medium
skills:
  - electronics
  - stealth
speed:
  walk: 40
entries:
  features:
    - uses: 3
      perDay: true
      id: tactical-cloak
  actions:
    - ref: weapon
      proficient: true
      id: geth-plasma-shotgun
      weaponId: geth-plasma-shotgun
cr: '04000'
shields:
  capacity: 20
  regen: 10
---
