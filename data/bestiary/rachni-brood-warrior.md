---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/e/e5/Rachni_Brood_Warrior.PNG/revision/latest/scale-to-width-down/700?cb=20100824160815
type: organic
unit: rachni
alignment: u
profBonus: 2
ac: 15
hp:
  dieCount: 12
  dieType: 10
abilityScores:
  str: 19
  dex: 12
  con: 17
  int: 7
  wis: 15
  cha: 7
irv: false
savingThrows:
  - con
  - wis
senses:
  blindsight: 4
size: large
skills:
  - perception
speed:
  walk: 30
entries:
  features:
    - uses: 3
      perDay: true
      id: barrier
    - mod: wis
      list:
        - {id: stasis, perDay: 3}
        - {id: warp, perDay: 5}
      id: innate-powercasting
  actions:
    - attack: ranged
      proficient: true
      range: 50
      dc: false
      mod: dex
      damage:
        - {dieCount: '2', dieType: '6', mod: false, type: acid}
        - {dieCount: '2', dieType: '6', mod: false, type: necrotic}
      target: one
      id: acid-spit
    - attack: melee
      proficient: true
      range: 10
      dc: false
      mod: str
      damage:
        - {dieCount: '2', dieType: '10', mod: true, type: piercing}
        - {dieCount: '1', dieType: '10', mod: false, type: acid}
      target: one
      id: impale
cr: '04000'
shields: false
---
