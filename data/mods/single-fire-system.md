---
rarity: uncommon
type: weapon
cost: 15000
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
name: Single Fire System
flavor: Augment the weapons firing system to single fire.
mechanics:
  - type: attack-augment
    attackLimit:
      model: weapon
    augmentTypes: [hit, damage]
    bonus:
      type: flat
      value: 2
    dieIncrease: 1
  - type: adjust-weapon-props
    remove: [burst-fire, double-tap]
---
The weapon loses the Burst Fire and Double Tap properties. +2 bonus to weapon attack rolls. Increase any damage done by 1 die type, d12s become a +1 bonus to damage.
