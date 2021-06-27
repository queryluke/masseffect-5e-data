---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/3/38/Noveria_rachni_queen.png/revision/latest/scale-to-width-down/700?cb=20090919061419
type: organic
unit: rachni
alignment: ln
profBonus: 6
ac: 21
hp:
  dieCount: 22
  dieType: 20
abilityScores:
  str: 25
  dex: 10
  con: 18
  int: 22
  wis: 25
  cha: 18
irv:
  conImm:
    - charmed
savingThrows:
  - wis
  - con
  - str
senses:
  blindsight: 30
size: gargantuan
skills:
  - perception
  - history
speed:
  walk: 15
entries:
  actions:
    - attack: melee
      proficient: true
      range: 10
      dc: false
      mod: str
      damage:
        - {dieCount: '3', dieType: '12', mod: true, type: piercing}
      target: one
      id: bite
    - attack: melee
      proficient: true
      range: 20
      dc: false
      mod: str
      damage:
        - {dieCount: '4', dieType: '10', mod: true, type: piercing}
      target: one
      id: impale
cr: '18000'
shields: false
---
