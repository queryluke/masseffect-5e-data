---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/9/98/ME3_adjutant.png/revision/latest/scale-to-width-down/700?cb=20121128185320
type: synorg
unit: cerberus
alignment: le
profBonus: 3
ac: 18
hp:
  dieCount: 15
  dieType: 10
abilityScores:
  str: 15
  dex: 18
  con: 16
  int: 10
  wis: 12
  cha: 8
irv: false
savingThrows:
  - dex
senses:
  darkvision: 30
size: large
skills: false
speed:
  walk: 30
entries:
  features:
    - mod: wis
      list:
        - {id: singularity, perDay: 3}
      id: innate-powercasting
  actions:
    - attack: ranged
      proficient: true
      range: 50
      dc: false
      mod: dex
      damage:
        - {dieCount: '1', dieType: '10', mod: true, type: piercing}
      target: one
      id: arm-cannon
    - attack: melee
      proficient: true
      range: 5
      dc: false
      mod: str
      damage:
        - {dieCount: '1', dieType: '8', mod: true, type: bludgeoning}
      target: one
      id: bash
    - attack: melee
      proficient: true
      range: 5
      dc: false
      mod: str
      damage:
        - {dieCount: '1', dieType: '6', mod: true, type: piercing}
        - {dieCount: '3', dieType: '6', mod: true, type: necrotic}
      target: one
      id: reaper-infection
cr: '06000'
shields: false
---
