---
rarity: rare
type: weapon
cost: 20000
manufacturer: ''
tags:
  - damage_augment
  - primes
placement: ammo
availability:
  - assault_rifle
  - heavy_pistol
  - smg
  - shotgun
  - sniper_rifle
name: Cryo Ammo
flavor: Fire supercooled projectiles.
mechanics:
  - type: weapon-augment
    damageType: cold
    primes: cold
    primesLength: until the end of its next turn
    notes:
      - type: tooltip
        tooltipText: "Hit: reduce the target's movement speed by 1/2 until the end of its next turn"
        text: 'Movement: 1/2'
    toggle: true
    name: Cryo Ammo
---
You may use a bonus action to toggle the following effect on or off: damage type becomes cold. Successful ranged weapon attacks cause the target to become primed (cold) and reduce its movement speed by half until the end of its next turn.
