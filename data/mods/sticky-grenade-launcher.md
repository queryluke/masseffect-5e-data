---
rarity: spectre
type: weapon
cost: 65000
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
name: Sticky Grenade Launcher
flavor: Augment the weapons firing system to a sticky grenade launcher.
mechanics:
  - type: weapon-augment
    damageType: thunder
    addDamage:
      - dieCount: 3
        dieType: 6
        type: thunder
        addTo: all
    notes:
      - type: tooltip
        text: 'Miss: explosion'
        tooltipText: >-
          On a miss, the grenade lands 4 meters beyond the target. At the end of your turn, each creature
          within 2 meters of the grenade must succeed on a DC 10 Dexterity saving throw or take 3d6 thunder damage.
  - type: adjust-weapon-props
    remove: [burst-fire]
---
The weapon loses the Burst Fire property. Its damage type becomes thunder. On a hit, the target takes an
additional 3d6 thunder damage and becomes prone. On a miss, the grenade lands <me-distance length="10" /> beyond the
target. At the end of your turn, each creature within <me-distance length="5" /> of the grenade must succeed on a
DC 10 Dexterity saving throw or take 3d6 thunder damage.
