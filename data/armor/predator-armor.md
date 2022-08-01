---
placement: body_armor
type: medium
cost: 31450
manufacturer: armax-arsenal
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/8/8a/Heavy-human-Predator_H.png/revision/latest/scale-to-width-down/160?cb=20110516205041
tags:
  - item_capacity
  - null_critical
andromeda: false
set: false
rarity: uncommon
name: Predator Armor
flavor: >-
  Standard issue armor for Turian infantry. The interlocking plates provide
  increased protection against potentially fatal wounds.
mechanics:
  - type: shields
    capacity:
      type: flat
      value: 5
    regen:
      type: flat
      value: 5
  - type: thermal-clip-capacity
    value: 14
  - type: medi-gel-capacity
    value: 4
  - type: grenade-capacity
    value: 2
  - type: global-note
    subType: defenses
    value: Null Critical
    moreInfo:
      model: armor
      id: predator-armor
---
- +4 thermal clip capacity.
- Any critical hit against you becomes a normal hit
