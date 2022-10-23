---
bonuses:
  - threshold: 2
    text: >-
      You gain a +2 bonus to power attack rolls and to the saving throw DCs of
      your powers.
    mechanics:
      - type: attack-augment
        attackLimit:
          model: power
        augmentTypes: [dc, hit]
        bonus:
          type: flat
          value: 2
max: 2
---
