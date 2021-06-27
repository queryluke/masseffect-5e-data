---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/8/83/N7_Paladin_Sentinel_MP.png/revision/latest/scale-to-width-down/250?cb=20120717151128
type: organic
unit: n_7
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
irv: false
savingThrows:
  - con
senses: false
size: medium
skills:
  - survival
speed:
  walk: 30
entries:
  features:
    - uses: 1
      perDay: true
      id: barrier
    - uses: 1
      perDay: true
      id: omni-shield
    - uses: 1
      perDay: true
      id: variant--fire-shield
    - uses: 1
      perDay: true
      id: variant--cryo-shield
    - mod: cha
      list:
        - {id: incinerate, perDay: at_will}
        - {id: energy-drain, perDay: 3}
        - {id: snap-freeze, perDay: 3, level: 4}
      id: innate-powercasting
  actions:
    - ref: weapon
      proficient: true
      id: n-7-hurricane
      weaponId: n-7-hurricane
cr: '07000'
shields:
  capacity: 20
  regen: 10
---
