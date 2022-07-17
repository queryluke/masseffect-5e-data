---
rarity: rare
type: armor
cost: 40000
manufacturer: ariake-technologies
tags:
  - extra_damage
placement: chest
availability:
  - light
  - medium
  - heavy
name: Adrenaline Regulator
flavor: Biofeedback system regulating wearer's adrenaline surges.
mechanics:
  - type: attack-augment
    attackLimit:
      type: melee
      model: weapon
      modelTypes: [melee]
    augmentTypes: [damage]
    rerollIfLessThan: 3
---
When you roll a 1 or 2 on a damage die for an attack you make with a melee weapon, you can reroll the die and must use the new roll, even if the new roll is a 1 or a 2.
