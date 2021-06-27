---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/e/e6/Codex_ME_-_Mass_Accelerators.png/revision/latest?cb=20140820141725
type: organic_or_synthetic
unit: archetype
alignment: nn
profBonus: 2
ac: 12
hp:
  dieCount: 6
  dieType: 8
abilityScores:
  str: 12
  dex: 15
  con: 11
  int: 13
  wis: 12
  cha: 10
irv: false
savingThrows: false
senses:
  darkvision: 60
size: medium
skills:
  - perception
  - stealth
speed:
  walk: 30
entries:
  features:
    - mod: int
      list:
        - {id: concussive-shot, perDay: 5}
      id: innate-powercasting
  actions:
    - ref: weapon
      proficient: true
      id: m-92-mantis
      weaponId: m-92-mantis
    - ref: weapon
      proficient: true
      id: m-4-shuriken
      weaponId: m-4-shuriken
cr: '01000'
shields:
  capacity: 5
  regen: 5
---
