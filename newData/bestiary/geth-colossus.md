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
  darkvision: 24
  infrared vision: 24
size: gargantuan
skills:
  - perception
speed:
  walk: 15
entries:
  features:
    repair-protocol:
      uses: 3
      perDay: true
  actions:
    mass-accelerator-machinegun:
      attack: ranged
      proficient: true
      range: 300
      dc: false
      mod: dex
      damage: [{"dieCount":'3', "dieType":'12', "mod":true, "type":piercing},{"dieCount":'3', "dieType":'12', "mod":true, "type":radiant}]
      target: one
    siege-pulse:
      dc: false
      save: false
      recharge: ['6']
  legendary:
    text: >-
      The geth colossus can take 3 legendary actions, choosing from the options
      below. Only one legendary action can be used at a time and only at the end
      of another creature's turn. The geth colossus regains spent legendary
      actions at the start of its turn.
    actions:
      mass-accelerator-machinegun-attack: {"cost":1}
      siege-cannon-attack: {"cost":1}
      siege-pulse-attack: {"cost":2}
cr: '21000'
shields:
  capacity: 100
  regen: 0
---
