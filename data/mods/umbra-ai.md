---
rarity: rare
type: armor
cost: 40000
manufacturer: alliance
tags:
  - extra_damage
placement: head
availability:
  - light
  - medium
  - heavy
name: Umbra AI
flavor: >-
  By detecting the focal point of the wearer's eyes and enhancing the image at
  that location, the visor helps direct a biotic power or a shot from an
  omni-tool exactly where the wearer is looking.
mechanics:
  - type: attack-augment
    attackLimit:
      models: [power]
      modelTypes: [tech]
    augmentTypes: [damage]
    rerollIfLessThan: 3
---
When you roll a 1 or 2 on a damage die for an attack you make with a tech power, you can reroll the die and must use the new roll, even if the new roll is a 1 or a 2.
