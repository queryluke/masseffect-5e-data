---
rarity: uncommon
type: weapon
cost: 13000
manufacturer: ''
tags:
  - augmentation
placement: ammo
availability:
  - assault_rifle
  - heavy_pistol
  - smg
  - shotgun
  - sniper_rifle
name: Burst Fire System
flavor: Augment the weapons firing system to automatic.
mechanics:
  - type: attack-augment
    attackLimit:
      model: weapon
    augmentTypes: [hit]
    bonus:
      type: flat
      value: -2
  - type: attack-augment
    attackLimit:
      model: weapon
    augmentTypes: [damage]
    dieIncrease: -1
  - type: adjust-weapon-props
    add: [burst-fire]
  - type: weapon-heat-increase
    value: 6
---
The weapon gains 6 heat and the Burst Fire attribute, but you have a -2 penalty with attack rolls and you reduce any damage done by 1 die type (d4s become a d2).
