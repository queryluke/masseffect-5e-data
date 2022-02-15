---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/e/eb/ME3_Banshee.png/revision/latest/scale-to-width-down/548?cb=20120319210941
type: synorg
unit: reaper
alignment: le
profBonus: 5
ac: 16
hp:
  dieCount: 30
  dieType: 10
abilityScores:
  str: 11
  dex: 16
  con: 11
  int: 12
  wis: 20
  cha: 18
irv: false
savingThrows:
  - dex
  - wis
senses:
  darkvision: 30
size: large
skills: false
speed:
  walk: 15
entries:
  features:
    - uses: 3
      perDay: true
      id: barrier
    - mod: wis
      list:
        - {id: charge, perDay: at_will}
        - {id: nova, perDay: at_will}
        - {id: warp, perDay: 6, level: 4}
      id: innate-powercasting
  actions:
    - attack: melee
      proficient: true
      range: 5
      dc: false
      mod: str
      damage:
        - {dieCount: '3', dieType: '8', mod: true, type: piercing}
      target: one
      id: impale
    - dc: false
      save: false
      recharge:
        - '5'
        - '6'
      id: wail
  legendary:
    actions:
      - cost: 3
        id: cast-a-power
      - cost: 1
        id: impale-attack
      - cost: 2
        id: wail-attack
cr: '13000'
shields: false
---
