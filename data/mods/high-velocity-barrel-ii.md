---
rarity: rare
type: weapon
cost: 50000
manufacturer: ''
tags:
  - damage_reroll
placement: barrel
availability:
  - assault_rifle
  - heavy_pistol
  - smg
  - shotgun
  - sniper_rifle
name: High-Velocity Barrel II
flavor: Increase bullet velocity to ensure bullets pierce armor.
mechanics:
  - type: attack-augment
    attackLimit:
      model: weapon
    augmentTypes: [damage]
    rerollIfLessThan: 3
---
When you roll a 1 or 2 on a damage die for an attack you make with this weapon, you can reroll the die and must use the new roll, even if the new roll is a 1 or a 2.
