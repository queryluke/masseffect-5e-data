---
primaryAbility:
  - int
hitDie: 8
profs:
  armor:
    has:
      - light
      - medium
  weapon:
    has:
      - heavy_pistols
    choices:
      items: [assault_rifles,melee,smgs]
      count: 1
  tool:
    choices:
      items: [armorsmiths_workbench,tailors_tools,tinkers_tools,weaponsmiths_workbench]
  skill:
    choices:
      items: [athletics,electronics,engineering,history,investigation,medicine,science,vehicle_handling]
      count: 3
  savingThrow:
    has:
      - con
      - int
startingEquipment:
  - choices:
      items: [m-3-predator,m-4-shuriken,m-8-avenger]
      count: 1
  - choices:
      items: [omni-blade,omni-taser,omni-torch]
      count: 1
  - choices:
      items: [stock-light-armor,stock-medium-armor]
      count: 1
progression:
  subclass:
    - 2
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
    - label: tech_points
      values: [2,4,5,7,11,13,15,17,20,23,26,26,30,30,34,34,39,42,45,50]
    - label: tech_point_limit
      values: [1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,6,6]
---
