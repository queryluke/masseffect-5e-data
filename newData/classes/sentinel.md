---
primaryAbility:
  - wis
  - int
  - cha
hitDie: 10
profs:
  armor:
    has:
      - light
      - medium
      - heavy
  weapon:
    has:
      - heavy_pistol
    choices:
      items: [assault_rifle,melee,shotgun,smg]
      count: 2
  tool: false
  skill:
    choices:
      items: [athletics,engineering,insight,intimidation,medicine,persuasion,science,survival]
      count: 3
  savingThrow:
    has:
      - cha
      - con
startingEquipment:
  - choices:
      items: [m-3-predator,m-4-shuriken,m-8-avenger]
      count: 1
  - choices:
      items: [omni-blade,omni-hamer,monomolecular-blade,riot-shield]
      count: 1
  - has:
      - stock-light-armor
      - stock-medium-armor
      - stock-heavy-armor
progression:
  subclass:
    - 3
    - 7
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
      values: [3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,8,8]
    - label: cantrips
      values: [2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4]
    - label: powers_known
      values: [2,3,4,5,6,7,8,9,10,10,11,11,12,12,13,13,14,14,15,15]
    - label: power_slots
      values: [1,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4]
    - label: power_level
      values: [1,1,1,1,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3]
---
