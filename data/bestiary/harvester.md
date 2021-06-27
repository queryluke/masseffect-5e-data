---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/9/92/ME2_Harvester.jpg/revision/latest/scale-to-width-down/200?cb=20100210004033
type: organic
unit: alien
alignment: u
profBonus: 6
ac: 16
hp:
  dieCount: 26
  dieType: 12
abilityScores:
  str: 26
  dex: 14
  con: 24
  int: 16
  wis: 15
  cha: 16
irv:
  conImm:
    - poisoned
  damImm:
    - poison
savingThrows:
  - str
  - con
  - wis
senses: false
size: huge
skills:
  - perception
speed:
  walk: 60
  fly: 90
entries:
  actions:
    - attack: melee
      proficient: true
      range: 10
      dc: false
      mod: str
      damage:
        - {dieCount: '2', dieType: '6', mod: true, type: piercing}
      target: one
      id: stomp
  legendary:
    actions:
      - cost: 1
        id: detect
      - cost: 1
        id: stomp-attack
      - cost: 2
        id: trample-attack
cr: '19000'
shields: false
---
