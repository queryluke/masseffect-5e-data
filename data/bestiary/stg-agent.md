---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/7/7c/STG_busybodies.png/revision/latest/scale-to-width-down/640?cb=20141208193957
type: organic
unit: archetype
alignment: ln
profBonus: 2
ac: 16
hp:
  dieCount: 12
  dieType: 8
abilityScores:
  str: 10
  dex: 16
  con: 11
  int: 15
  wis: 14
  cha: 12
irv: false
savingThrows:
  - int
senses: false
size: medium
skills:
  - stealth
  - survival
speed:
  walk: 30
entries:
  features:
    innate-powercasting:
      mod: int
      list: [{"id":decoy, "perDay":3},{"id":overload, "perDay":5, "level":2}]
    grenades:
      list: [{"id":flashbang-grenade, "mark":iii, "uses":2}]
  actions:
    scorpion:
      ref: weapon
      proficient: true
cr: '03000'
shields:
  capacity: 10
  regen: 5
---
