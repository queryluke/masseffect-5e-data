---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/2/27/ME3_Husk.png/revision/latest/scale-to-width-down/350?cb=20120320012912
type: synorg
unit: reaper
alignment: le
profBonus: 2
ac: 11
hp:
  dieCount: 1
  dieType: 8
abilityScores:
  str: 13
  dex: 8
  con: 14
  int: 3
  wis: 6
  cha: 5
irv: false
savingThrows:
  - wis
senses:
  darkvision: 30
size: medium
skills: false
speed:
  walk: 30
entries:
  actions:
    - attack: melee
      proficient: true
      range: 5
      dc: false
      mod: str
      damage:
        - {dieCount: '1', dieType: '6', mod: true, type: slashing}
      target: one
      id: swipe
cr: '00500'
shields: false
---
