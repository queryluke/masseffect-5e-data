---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/6/69/Collector_Assassin.png/revision/latest/scale-to-width-down/350?cb=20100623060453
type: organic
unit: collector
alignment: le
profBonus: 2
ac: 14
hp:
  dieCount: 10
  dieType: 8
abilityScores:
  str: 10
  dex: 18
  con: 10
  int: 8
  wis: 8
  cha: 8
irv: false
savingThrows:
  - dex
senses:
  darkvision: 30
size: medium
skills:
  - athletics
speed:
  walk: 30
  fly: 15
entries:
  actions:
    - attack: melee
      proficient: true
      range: 5
      dc: false
      mod: str
      damage:
        - {dieCount: '2', dieType: '6', mod: true, type: slashing}
      target: one
      id: claw
    - ref: weapon
      proficient: true
      id: particle-rifle
      weaponId: particle-rifle
cr: '03000'
shields: false
---
