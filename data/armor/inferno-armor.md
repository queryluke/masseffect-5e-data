---
placement: body_armor
type: medium
cost: 31600
manufacturer: cerberus-skunkworks
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/9/96/ME3_Inferno_Armor.png/revision/latest?cb=20120314170848
tags:
  - attack_bonus
  - set_bonus
andromeda: false
set: inferno
rarity: rare
name: Inferno Armor
flavor: >-
  Built specifically for Cerberus field officers, the Inferno armor has a VI
  dedicated to recognizing signs of stress and medical trauma. This application
  helps assess soldiers but can be useful in any high-risk situations. The
  Inferno's microframe computer also manages biotic amp and omni-tool power, and
  microservos help the wearer's movements to counteract the armor's weight.
mechanics:
  - type: attack-augment
    attackLimit:
      model: power
    augmentTypes: [dc, hit]
    bonus:
      type: flat
      value: 1
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
---
- +1 bonus to power attack rolls and power saving throw DCs.
