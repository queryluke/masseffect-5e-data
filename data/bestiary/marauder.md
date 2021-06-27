---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/9/9b/ME3_Marauder.png/revision/latest/scale-to-width-down/219?cb=20120313015215
type: synorg
unit: reaper
alignment: le
profBonus: 2
ac: 15
hp:
  dieCount: 8
  dieType: 8
abilityScores:
  str: 12
  dex: 16
  con: 13
  int: 8
  wis: 11
  cha: 8
irv: false
savingThrows:
  - dex
senses:
  darkvision: 30
size: medium
skills:
  - survival
speed:
  walk: 30
entries:
  actions:
    - ref: weapon
      proficient: true
      id: phaeston
      weaponId: phaeston
    - dc: false
      save: false
      recharge:
        - '5'
        - '6'
      id: create-armor-plating
cr: '02000'
shields:
  capacity: 15
  regen: 15
---
