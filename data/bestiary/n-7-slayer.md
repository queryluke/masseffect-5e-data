---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/9/97/N7_Slayer_Vanguard_MP.png/revision/latest/scale-to-width-down/250?cb=20120717151234
type: organic
unit: n_7
alignment: ln
profBonus: 3
ac: 14
hp:
  dieCount: 14
  dieType: 8
abilityScores:
  str: 16
  dex: 14
  con: 13
  int: 13
  wis: 14
  cha: 12
irv: false
savingThrows:
  - str
  - dex
senses: false
size: medium
skills:
  - acrobatics
  - survival
speed:
  walk: 40
entries:
  features:
    barrier:
      uses: 2
      perDay: true
    powercasting:
      mod: wis
      casterLevel: 9
      list: [charge,phase-disruptor,biotic-slash]
  actions:
    monomolecular-blade:
      ref: weapon
      proficient: true
    n-7-piranha:
      ref: weapon
      proficient: true
cr: '05000'
shields:
  capacity: 15
  regen: 5
---
