---
placement: arms
type: medium
cost: 24550
manufacturer: andromeda-initiative
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/8/89/MEA_Pathfinder_Vigilant_Arms.png/revision/latest/scale-to-width-down/350?cb=20180507232659
tags:
  - extra_damage
  - set_bonus
andromeda: false
set: pathfinder
rarity: rare
name: Pathfinder Gauntlets
flavor: >-
  Pathfinder hardsuits are heavily modified from the Initiative suit baseline,
  foregoing certain scientific instruments in favor of added combat capability.
  The role of a Pathfinder includes threat neutralization, and improved
  stabilizers and targeting controls help ensure they can protect his or her
  team.
mechanics:
  - type: thermal-clip-capacity
    value: 2
  - type: medi-gel-capacity
    value: 2
  - type: attack-augment
    attackLimit:
      model: weapon
      modelTypes: [melee]
    augmentTypes: [damage]
    rerollIfLessThan: 2
---
- When you roll a 1 on a damage die for an attack you make with a melee weapon, you can reroll the
die and must use the new roll, even if the new roll is a 1.
