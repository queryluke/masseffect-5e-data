---
placement: body_armor
type: light
cost: 39950
manufacturer: elanus-risk-control-services
image: null
tags:
  - special
andromeda: false
set: false
rarity: uncommon
name: Duelist Armor
flavor: >-
  Duelist armor was originally commissioned to Elanus Risk Control systems for
  use in cage fighting and other live-action combat sports. The armor focuses on
  keeping the wearer alive after a fatal wound because managers were tired of
  losing so many fighters in the ring. The armor is as light as fabric and
  allows full range of motion.
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
    value: 2
  - type: other
    shortDesc: If you fall below 0 hit points you immediately become stabilized.
    resource:
      reset: long
---
- Once per long rest, if you fall below 0 hit points you immediately become stabilized.
