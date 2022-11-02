---
rarity: spectre
type: weapon
cost: 69000
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
name: Plasma Charge System
flavor: Augment the weapons firing system to plasma rounds.
mechanics:
  - type: weapon-augment
    damageType: radiant
    notes:
      - type: tooltip
        tooltipText: >-
          Hit or miss, each creature within 2 meters of the target takes 2d10 radiant damage.
          Use a bonus action to charge the weapon before firing, consuming 2 heat. If charged, increase the hit or miss radiant
          damage to 4d10.
        text: Plasma Charge
        html: true
    addDamage:
      dieCount: 2
      dieType: 10
      type: radiant
      addTo: all
  - type: adjust-weapon-props
    remove: [burst-fire, double-tap]
---
The weapon loses the Burst Fire and Double Tap property. Its damage type becomes radiant.
Hit or miss, each creature within <me-distance length="5" /> of the target takes 2d10 radiant damage.
Use a bonus action to charge the weapon before firing, consuming 2 heat. If charged, increase the hit or miss radiant
damage to 4d10.
