---
bonuses:
  - threshold: 2
    text: +1 bonus to weapon attack and damage rolls
    mechanics:
      - type: attack-augment
        attackLimit:
          model: weapon
        augmentTypes: [damage, hit]
        bonus:
          type: flat
          value: 1
max: 2
---
