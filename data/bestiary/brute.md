---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/9/90/ME3_Brute.png/revision/latest/scale-to-width-down/700?cb=20120320023753
type: synorg
unit: reaper
alignment: le
profBonus: 4
ac: 18
hp:
  dieCount: 13
  dieType: 10
abilityScores:
  str: 20
  dex: 12
  con: 18
  int: 9
  wis: 6
  cha: 12
irv:
  res:
    - bludgeoning
    - piercing
    - slashing
savingThrows:
  - str
  - con
senses:
  darkvision: 30
size: large
skills:
  - athletics
speed:
  walk: 40
entries:
  actions:
    - attack: melee
      proficient: true
      range: 5
      dc: false
      mod: str
      damage:
        - {dieCount: '5', dieType: '12', mod: true, type: bludgeoning}
      target: one
      id: clobber
    - attack: melee
      proficient: true
      range: 5
      dc: false
      mod: str
      damage:
        - {dieCount: '3', dieType: '8', mod: true, type: bludgeoning}
      target: one
      id: smash
cr: '10000'
shields: false
---
