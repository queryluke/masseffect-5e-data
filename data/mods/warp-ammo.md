---
rarity: rare
type: weapon
cost: 20000
manufacturer: ''
tags:
  - damage_augment
  - ignore_resistance
  - detonates
placement: ammo
availability:
  - assault_rifle
  - heavy_pistol
  - smg
  - shotgun
  - sniper_rifle
name: Warp Ammo
flavor: Fire tiny dark matter charges.
mechanics:
  - type: weapon-augment
    damageType: necrotic
    detonates: true
    notes:
      - type: text
        text: 'Hit: -2 barrier ticks, cannot be reduced by barrier'
    toggle: true
    name: Warp Ammo
---
You may use a bonus action to toggle the following effect on or off: damage type becomes necrotic damage. Successful ranged attacks detonate primed targets and a target with an active barrier will have 2 barrier ticks removed and cannot benefit from the barriers damage reduction for this attack.
