---
primaryAbility:
  - dex
  - str
hitDie: 10
profs:
  armor:
    has:
      - light
      - medium
      - heavy
  weapon:
    has:
      - assault_rifle
      - heavy_pistol
      - melee
      - shotgun
      - smg
      - sniper_rifle
  tool: false
  skill:
    choices:
      items: [acrobatics,athletics,history,intimidation,medicine,perception,persuasion,stealth,survival,vehicle-handling]
      count: 3
  saving-throw:
    has:
      - str
      - dex
startingEquipment:
  - choices:
      items: [m-3-predator,m-4-shuriken,m-8-avenger,m-92-mantis,m-23-katana]
      count: 1
  - choices:
      items: [omni-blade,omni-hamer]
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
    - 15
    - 18
  abi:
    - 4
    - 6
    - 8
    - 12
    - 14
    - 16
    - 19
  columns:
    - label: features
    - label: combat_powers
      values: [1,1,1,2,2,2,2,3,3,3,3,4,4,4,5,5,5,6,6,6]
---
