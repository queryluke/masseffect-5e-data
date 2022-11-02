---
rarity: rare
type: weapon
cost: 20000
manufacturer: ''
tags:
  - damage_augment
  - extra_damage
  - primes
placement: ammo
availability:
  - assault_rifle
  - heavy_pistol
  - smg
  - shotgun
  - sniper_rifle
name: Incendiary Ammo
flavor: Fire super-heated plasma.
mechanics:
  - type: weapon-augment
    damageType: fire
    primes: fire
    primeLength: until the end of its next turn
    addDamage:
      - dieCount: 1
        dieType: 4
        type: fire
        addTo: all
    toggle: true
    name: Incendiary Ammo
---
You may use a bonus action to toggle the following effect on or off: damage type becomes fire. Successful ranged attacks deal an additional 1d4 fire damage and the target becomes primed (fire) until the end of its next turn.
