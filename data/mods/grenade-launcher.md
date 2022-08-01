---
rarity: spectre
type: weapon
cost: 48000
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
name: Grenade Launcher
flavor: Augment the weapons firing system to explosive projectiles.
mechanics:
  - type: weapon-augment
    heatConsumption: 2
    damageType: thunder
    damageMultiplier: 2
    onlyShortRange: true
    addAoe:
      type: sphere
      size: 10
    dc:
      base: 13
      proficient: false
      save: dex
    toggle: false
  - type: adjust-weapon-props
    remove: [burst-fire, double-tap]
---
The weapon loses the Burst Fire and Double Tap property. Its damage type becomes thunder. When you attack
with this weapon choose a target location within the weapon's normal range. Each creature within <me-distance length="10" />
of the target must make a DC 13 Dexterity saving throw. On a failed save, a target takes thunder damage equal to
twice the weapon's damage, or half as much on a successful one. Each attack costs 2 heat.
