---
primaryAbility:
  - str
  - wis
hitDie: 12
profs:
  armor:
    has:
      - light
      - medium
  weapon:
    has:
      - heavy_pistol
      - melee
    choices:
      items: [shotgun,smg]
      count: 1
  tool: false
  skill:
    choices:
      items: [acrobatics,athletics,deception,insight,intimidation,performance,persuasion,sleight_of_hand,survival]
      count: 3
  savingThrow:
    has:
      - str
      - wis
startingEquipment:
  - choices:
      items: [m-3-predator,m-4-shuriken,m-23-katana]
      count: 1
  - choices:
      items: [omni-blade,omni-hammer,monomolecular-blade,riot-shield]
      count: 1
  - choices:
      items: [stock-light-armor,stock-medium-armor]
      count: 1
progression:
  subclass:
    - 3
    - 6
    - 10
    - 14
    - 18
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
      values: [3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,9,9,10]
    - label: cantrips
      values: [4,4,4,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6]
    - label: powers_known
      values: [0,2,3,3,4,4,5,5,6,6,6,7,8,8,9,9,10,10,11,11]
    - label: power_slots_by_power_level
      values: [[0,2,3,4,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7],[0,0,0,0,0,0,0,0,2,2,3,3,4,4,5,5,6,6,6,6],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,2,2]]
---
