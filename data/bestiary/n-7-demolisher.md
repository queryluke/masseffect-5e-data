---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/0/04/N7_Demolisher_Engineer_MP.png/revision/latest/scale-to-width-down/250?cb=20120717151043
type: organic
unit: n_7
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
irv: false
savingThrows:
  - con
  - dex
senses: false
size: medium
skills:
  - vehicle-handling
  - engineering
  - survival
speed:
  walk: 30
entries:
  features:
    - list:
        - {id: arc-grenade, mark: iii, uses: 3}
        - {id: homing-grenade, mark: i, uses: 3}
      id: grenades
  actions:
    - ref: weapon
      proficient: true
      id: n-7-eagle
      weaponId: n-7-eagle
    - ref: weapon
      proficient: true
      id: n-7-hurricane
      weaponId: n-7-hurricane
    - dc: false
      save: false
      uses: 1
      perDay: true
      id: deploy-shield-pylon
cr: '05000'
shields:
  capacity: 20
  regen: 10
---
