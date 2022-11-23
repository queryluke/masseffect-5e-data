---
primaryAbility:
  - int
  - dex
hitDie: 8
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
      items: [assault_rifle,shotgun,smg,sniper_rifle]
      count: 2
  skill:
    choices:
      items: [acrobatics,athletics,deception,electronics,engineering,history,intimidation,investigation,medicine,perception,performance,persuasion,science,sleight-of-hand,stealth,survival,vehicle-handling]
      count: 4
  saving-throw:
    has:
      - int
      - dex
startingEquipment:
  - choices:
      items: [monomolecular-blade,omni-blade,omni-claws]
      count: 1
  - choices:
      items: [m-3-predator,m-92-mantis,m-27-scimitar]
      count: 1
  - choices:
      items: [stock-light-armor,stock-medium-armor]
      count: 1
progression:
  subclass:
    - 3
    - 5
    - 9
    - 15
  abi:
    - 4
    - 6
    - 8
    - 12
    - 16
    - 19
---
