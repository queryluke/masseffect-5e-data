---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/8/83/N7_Paladin_Sentinel_MP.png/revision/latest/scale-to-width-down/250?cb=20120717151128
type: organic
unit: n-7
alignment: ln
profBonus: 3
ac: 16
hp:
  dieCount: 17
  dieType: 8
abilityScores:
  str: 14
  dex: 12
  con: 16
  int: 13
  wis: 13
  cha: 16
savingThrows:
  - con
senses: []
size: medium
skills:
  - survival
speed:
  walk: 30
entries:
  features:
    barrier:
      uses: 1
      perDay: true
    omni-shield:
      uses: 1
      perDay: true
    variant--fire-shield:
      uses: 1
      perDay: true
    variant--cryo-shield:
      uses: 1
      perDay: true
  actions:
    n-7-hurricane:
      ref: weapon
powercasting:
  mod: cha
  innate:
    - id: incinerate
      perDay: at-will
    - id: energy_drain
      perDay: 3
    - id: snap_freeze
      perDay: 3
      level: 4
---
