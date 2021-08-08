---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/8/8f/Collector_CapME3.jpg/revision/latest/scale-to-width-down/335?cb=20121201212047
type: organic
unit: collector
alignment: le
profBonus: 3
ac: 16
hp:
  dieCount: 19
  dieType: 8
abilityScores:
  str: 15
  dex: 18
  con: 14
  int: 11
  wis: 14
  cha: 14
irv: false
savingThrows:
  - dex
  - con
senses:
  darkvision: 30
size: medium
skills:
  - athletics
  - science
  - survival
speed:
  walk: 30
  fly: 15
entries:
  actions:
    - ref: weapon
      proficient: true
      id: collector-assault-rifle
      weaponId: collector-assault-rifle
    - dc: false
      save: false
      recharge: short
      id: leadership
    - dc: false
      save: false
      recharge:
        - '5'
        - '6'
      id: summon-seeker-swarm
cr: '07000'
shields: false
---
