---
rarity: uncommon
type: weapon
cost: 20000
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
name: High-Velocity Barrel I
flavor: Increase bullet velocity to ensure bullets pierce armor.
mechanics:
  - type: attack-augment
    attackLimit:
      model: weapon
    augmentTypes: [damage]
    rerollIfLessThan: 2
---
When you roll a 1 on a damage die for an attack you make with this weapon, you can reroll the die and must use the new roll, even if the new roll is a 1.
