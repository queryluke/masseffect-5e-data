---
rarity: uncommon
type: weapon
cost: 8000
manufacturer: ''
tags:
  - increased_range
placement: barrel
availability:
  - heavy_pistol
  - smg
  - shotgun
name: Long Barrel
flavor: >-
  Long barrels allows normally short range weapons to operate at greater
  distances, but with trade-offs in handling.
mechanics:
  - type: weapon-augment
    shortRangeMultiplier: 2
    longRangeMultiplier: 2
  - type: adjust-weapon-props
    remove: [hip-fire]
---
The weapon loses the Hip Fire property. Double the weapon's normal and long range.
