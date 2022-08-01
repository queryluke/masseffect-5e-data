---
rarity: rare
type: weapon
cost: 19500
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
name: High-Caliber Barrel II
flavor: Superior kinetic coils increase shot penetration and damage.
mechanics:
  - type: attack-augment
    attackLimit:
      model: weapon
    augmentTypes: [damage, notes]
    bonus:
      type: flat
      value: 2
    notes:
      - type: text
        text: Ignore 1/2 cover
---
+2 on damage rolls made with this weapon. Ignores half cover.
