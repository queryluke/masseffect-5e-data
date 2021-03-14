---
primaryAbility: wis
hitDie: 6
profs:
  armor:
    has:
      - light
  weapon:
    has:
      - heavy-pistols
    choices:
      items: [melee,smgs]
      count: 1
  tool: false
  skill:
    choices:
      items: [acrobatics,deception,history,insight,intimidation,performance,sleight-of-hand,survival]
      count: 3
  savingThrow:
    has:
      - cha
      - wis
startingEquipment:
  - choices:
      items: [m-3-predator,m-4-shuriken]
      count: 1
  - choices:
      items: [omni-blade,monomolecular-blade]
      count: 1
  - has:
      - stock-light-armor
progression:
  subclass:
    - 2
    - 6
    - 10
    - 14
  abi:
    - 4
    - 8
    - 12
    - 16
    - 19
  columns:
    - label: features
    - label: barrier_uses
      values: [2,2,3,3,3,4,4,4,4,4,4,5,5,5,5,5,6,6,6,6]
    - label: barrier_ticks
      values: [2,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,5,5]
    - label: cantrips
      values: [4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,8,8]
    - label: powers_known
      values: [3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]
    - label: power_slots
      values: [[2,4,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7],[0,0,0,0,2,3,4,5,6,6,6,6,6,6,6,6,6,6,6,6,6],[0,0,0,0,0,0,0,0,1,2,3,3,3,3,3,3,3,4,5,5],[0,0,0,0,0,0,0,0,0,0,0,0,1,1,2,2,2,2,2,3],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1]]
---
