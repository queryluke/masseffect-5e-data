---
rarity: rare
type: armor
cost: 40000
manufacturer: serrice-council
tags:
  - extra_damage
placement: head
availability:
  - light
  - medium
  - heavy
name: Savant Biotic Amp
flavor: >-
  One of the most powerful biotic amps on the market. Serrice Council amps are
  incredibly rare—and highly prized—items on the galactic market.
mechanics:
  - type: attack-augment
    attackLimit:
      models: [power]
      modelTypes: [biotic]
    augmentTypes: [damage]
    rerollIfLessThan: 3
---
When you roll a 1 or 2 on a damage die for an attack you make with a biotic power, you can reroll the die and must use the new roll, even if the new roll is a 1 or a 2.
