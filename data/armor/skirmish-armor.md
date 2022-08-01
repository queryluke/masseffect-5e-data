---
placement: body_armor
type: medium
cost: 39950
manufacturer: batarian-state-arms
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/0/02/Light-human-Skirmish.png/revision/latest/scale-to-width-down/160?cb=20100209143516
tags:
  - ac
  - item_capacity
  - movement
andromeda: false
set: false
rarity: uncommon
name: Skirmish Armor
flavor: >-
  Batarian State Arms' Skirmish armor provides enhanced speed to better escape
  the blast of the grenade you just threw.
mechanics:
  - type: shields
    capacity:
      type: flat
      value: 5
    regen:
      type: flat
      value: 5
  - type: thermal-clip-capacity
    value: 10
  - type: medi-gel-capacity
    value: 4
  - type: grenade-capacity
    value: 6
  - type: speed-bonus
    value: [walk]
    bonus:
      type: flat
      value: 10
  - type: ac
    bonus:
      type: flat
      value: 1
---
- +1 AC.
- Increase your walking speed by <me-distance length='10' />.
- Increase your grenade capacity by 4.
