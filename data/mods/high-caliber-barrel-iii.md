---
rarity: spectre
type: weapon
cost: 32000
manufacturer: ''
tags:
  - extra_damage
  - special
placement: barrel
availability:
  - assault_rifle
  - heavy_pistol
  - smg
  - shotgun
  - sniper_rifle
name: High-Caliber Barrel III
flavor: Superior kinetic coils increase shot penetration and damage.
mechanics:
  - type: attack-augment
    attackLimit:
      model: weapon
    augmentTypes: [damage, notes]
    bonus:
      type: flat
      value: 3
    notes:
      - type: text
        text: Ignore 1/2 cover
---
+3 on damage rolls made with this weapon. Ignores half cover.
