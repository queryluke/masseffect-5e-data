---
image: >-
  https://pre00.deviantart.net/0c66/th/pre/f/2012/139/9/3/mass_effect__elcor_warriors_by_lipatov-d50d2p0.jpg
type: organic
unit: alien
alignment: ln
profBonus: 3
ac: 20
hp:
  dieCount: 10
  dieType: 10
abilityScores:
  str: 20
  dex: 4
  con: 24
  int: 16
  wis: 18
  cha: 8
irv:
  res:
    - bludgeoning
    - piercing
    - slashing
savingThrows:
  - str
  - con
senses: false
size: large
skills:
  - history
  - insight
speed:
  walk: 20
entries:
  actions:
    mass-accelerator-cannon:
      attack: ranged
      proficient: true
      range: 300
      dc: false
      mod: int
      damage: [{"dieCount":'5', "dieType":'8', "mod":false, "type":radiant}]
      target: one
cr: '06000'
shields:
  capacity: 50
  regen: 10
---
