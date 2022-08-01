---
rarity: rare
type: weapon
cost: 12500
manufacturer: ''
tags:
  - increased_range
  - extra_damage
placement: barrel
availability:
  - shotgun
name: Shotgun Choke
flavor: >-
  This barrel extension tightens the spread of the shotgun's pellets increasing
  its effective firing distance and damage, but decreasing its close-quarters
  capabilities.
mechanics:
  - type: attack-augment
    attackLimit:
      model: weapon
    augmentTypes: [damage]
    bonus:
      type: flat
      value: 1
  - type: adjust-weapon-props
    remove: [hip-fire]
  - type: weapon-augment
    shortRangeMultiplier: 2
    longRangeMultiplier: 2
---
The weapon loses the Hip Fire property. Double the weapon's normal and long range. +1 to weapon damage rolls made with this weapon.
