---
placement: body_armor
type: heavy
cost: 44750
manufacturer: cerberus-skunkworks
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/a/ac/ME3_Collector_Armor.png/revision/latest/scale-to-width-down/350?cb=20120314183021
tags:
  - ac
  - movement
  - set_bonus
andromeda: false
set: collector
rarity: rare
name: Collector Carapace
flavor: >-
  The Collectors' chitinous armor is flexible and even tougher than ballistic
  fibers. Its organic construction allows it to be self-healing, and the
  muscle-like tissue that assists movement ensures it is comfortable to wear
  despite its weight. This suit was originally adapted out of salvaged Collector
  technology by Cerberus and is incredibly difficult to find on the galactic
  market.
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
- Increase walking speed by <me-distance length='10' />.
