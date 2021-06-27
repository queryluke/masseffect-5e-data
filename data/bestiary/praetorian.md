---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/0/09/PraetorianME3.jpg/revision/latest/scale-to-width-down/700?cb=20121201212320
type: synorg
unit: collector
alignment: le
profBonus: 4
ac: 20
hp:
  dieCount: 13
  dieType: 10
abilityScores:
  str: 20
  dex: 19
  con: 21
  int: 11
  wis: 14
  cha: 10
irv:
  conImm:
    - charmed
    - grappled
    - paralyzed
    - petrified
    - poisoned
  res:
    - force
    - necrotic
savingThrows:
  - dex
  - con
  - str
senses:
  darkvision: 30
size: large
skills:
  - acrobatics
  - athletics
  - perception
speed:
  walk: 30
  fly: 30
entries:
  actions:
    - attack: melee
      proficient: true
      range: 5
      dc: false
      mod: str
      damage:
        - {dieCount: '6', dieType: '10', mod: true, type: piercing}
      target: one
      id: claw
    - dc: false
      save: false
      recharge:
        - '5'
        - '6'
      id: pounce
    - dc: false
      save: false
      recharge:
        - '5'
        - '6'
      id: twin-particle-beams
cr: '12000'
shields: false
---
