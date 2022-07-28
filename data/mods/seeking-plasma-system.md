---
rarity: spectre
type: weapon
cost: 75000
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
name: Seeking Plasma System
flavor: Augment the weapons firing system to seeking plasma rounds.
mechanics:
  - type: weapon-augment
    damageType: fire
    notes:
      - type: text
        text: Auto-hit
    heatConsumption: 2
  - type: adjust-weapon-props
    remove: [burst-fire]
  - type: attack-augment
    attackLimit:
      model: weapon
    augmentTypes: [damage]
    dieIncrease: -1
---
The weapon loses the Burst Fire property. Its damage type becomes fire. Reduce any damage done by 1 die type (d4s become a d2). Each attack costs 2 heat. Weapon attacks made with this weapon cannot miss as long as you can see the target.
