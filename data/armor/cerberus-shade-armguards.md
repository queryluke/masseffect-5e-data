---
placement: arms
type: medium
cost: 20250
manufacturer: cerberus-skunkworks
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/6/67/Cerberus_shade.jpg/revision/latest/scale-to-width-down/700?cb=20130308134524
tags:
  - attack_bonus
  - extra_damage
  - set_bonus
andromeda: false
set: cerberus-shade
rarity: spectre
name: Cerberus Shade Armguards
flavor: >-
  Cerberus Shade armor is worn by Phantoms who need to be prepared for a wide
  variety of threats. Its capacitors give modest boosts to shields and shield
  regeneration time. Many small improvements increase the performance of biotic
  amps and omni-tools, heat management and kinetic coils for ranged weapons, and
  synthetic muscle assistors for melee capability.
mechanics:
  - type: thermal-clip-capacity
    value: 2
  - type: medi-gel-capacity
    value: 2
  - type: attack-augment
    attackLimit:
      type: melee
      model: weapon
    augmentTypes: [damage, hit]
    bonus:
      type: flat
      value: 1
---
- +1 bonus to melee weapon attack and damage rolls
