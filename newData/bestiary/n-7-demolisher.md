---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/0/04/N7_Demolisher_Engineer_MP.png/revision/latest/scale-to-width-down/250?cb=20120717151043
type: organic
unit: n-7
alignment: ln
profBonus: 3
ac: 15
hp:
  dieCount: 15
  dieType: 8
abilityScores:
  str: 13
  dex: 16
  con: 14
  int: 13
  wis: 13
  cha: 14
savingThrows:
  - con
  - dex
senses: []
size: medium
skills:
  - vehicle_handling
  - engineering
  - survival
speed:
  walk: 30
entries:
  actions:
    n-7-eagle:
      ref: weapon
    n-7-hurricane:
      ref: weapon
    arc-grenade:
      ref: grenade
      mark: iii
      uses: 3
    homing-grenade:
      ref: grenade
      mark: i
      uses: 3
    deploy-shield-pylon:
      dc: false
      save: false
      uses: 1
      perDay: true
powercasting: false
---
