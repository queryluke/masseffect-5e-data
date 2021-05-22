---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/a/a9/ArmatureLanding.png/revision/latest/scale-to-width-down/350?cb=20090125024722
type: synthetic
unit: geth
alignment: ln
profBonus: 5
ac: 15
hp:
  dieCount: 10
  dieType: 12
abilityScores:
  str: 22
  dex: 10
  con: 25
  int: 18
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
size: huge
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
cr: '15000'
shields:
  capacity: 100
  regen: 0
---
