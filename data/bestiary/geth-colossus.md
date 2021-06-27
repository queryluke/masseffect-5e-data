---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/6/64/Geth_Colossus_01.jpg/revision/latest/scale-to-width-down/350?cb=20080922231050
type: synthetic
unit: geth
alignment: ln
profBonus: 7
ac: 17
hp:
  dieCount: 9
  dieType: 20
abilityScores:
  str: 28
  dex: 8
  con: 28
  int: 20
  wis: 6
  cha: 8
irv:
  conImm:
    - charmed
    - deafened
    - frightened
    - frozen
    - grappled
    - invisible
    - lifted
    - paralyzed
    - petrified
    - poisoned
    - restrained
    - stunned
  damImm:
    - poison
    - psychic
  res:
    - bludgeoning
    - piercing
    - slashing
  vul:
    - lightning
savingThrows:
  - int
senses:
  darkvision: 30
  infrared_vision: 30
size: gargantuan
skills:
  - perception
speed:
  walk: 15
entries:
  features:
    - uses: 3
      perDay: true
      id: repair-protocol
  actions:
    - attack: ranged
      proficient: true
      range: 300
      dc: false
      mod: dex
      damage:
        - {dieCount: '3', dieType: '12', mod: true, type: piercing}
        - {dieCount: '3', dieType: '12', mod: true, type: radiant}
      target: one
      id: mass-accelerator-machinegun
    - dc: false
      save: false
      recharge:
        - '6'
      id: siege-pulse
  legendary:
    actions:
      - cost: 1
        id: mass-accelerator-machinegun-attack
      - cost: 1
        id: siege-cannon-attack
      - cost: 2
        id: siege-pulse-attack
cr: '21000'
shields:
  capacity: 100
  regen: 0
---
