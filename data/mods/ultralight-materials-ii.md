---
rarity: rare
type: weapon
cost: 20000
manufacturer: ''
tags:
  - reduced_weight
placement: body
availability:
  - assault_rifle
  - heavy_pistol
  - smg
  - shotgun
  - sniper_rifle
name: Ultralight Materials II
flavor: >-
  Superior lightweight alloys replace weapon parts, making weapon less obtrusive
  and easier to handle.
mechanics:
  - type: adjust-weapon-props
    remove: [two-handed]
    add: [light]
---
Reduces the weapon's weight by one half. If the weapon has the Heavy property, remove it. If the weapon does not have the heavy property it gains the Light property. If the weapon has the two-handed property, remove it.
