---
primaryAbility: dex
hitDie: 8
profs:
  armor:
    has:
      - light
  weapon:
    has:
      - heavy-pistols
    choices:
      items: [assault-rifles,melee,smgs,sniper-rifles]
      count: 2
  tool:
    choices:
      items: [hacking-tools,thieves-tools]
  skill:
    choices:
      items: [athletics,acrobatics,deception,electronics,history,insight,investigation,perception,persuasion,sleight-of-hand,stealth,vehicle-handling]
      count: 3
  savingThrow:
    has:
      - dex
      - int
startingEquipment:
  - choices:
      items: [m-3-predator,m-4-shuriken,m-92-mantis]
      count: 1
  - choices:
      items: [omni-blade,omni-taser,monomolecular-blade]
      count: 1
  - has:
      - stock-light-armor
progression:
  subclass:
    - 3
    - 9
    - 13
    - 17
  abi:
    - 4
    - 8
    - 10
    - 12
    - 16
    - 19
  columns:
    - label: sneak_attack_damage
      values: [1d6,1d6,2d6,2d6,3d6,3d6,4d6,4d6,5d6,5d6,6d6,6d6,7d6,7d6,8d6,8d6,9d6,9d6,10d6,10d6]
    - label: features
    - label: tactical_cloak_uses
      values: [2,2,2,2,2,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5]
    - label: combat_powers
      values: [0,1,1,1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4]
    - label: tech_points
      values: [2,2,3,4,6,6,7,7,11,11,13,13,15,15,17,17,20,20,23,25]
    - label: tech_point_limit
      values: [1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,3]
---
