---
bonuses:
  - threshold: 2
    text: >-
      Once per short rest, as a reaction to taking damage, you may jumpstart
      your shield regen and immediately gain shield points equal to your regen
      amount.
    mechanics:
      - type: reaction
        name: Cerberus Shade Armor Bonus (2 of 4)
        resource:
          reset: short
        shortDesc: When you take damage, gain {{ shieldRegen }} shield points.
  - threshold: 4
    text: +10 shields. +10 shield regen.
    mechanics:
      - type: shields
        capacity:
          type: flat
          value: 10
        regen:
          type: flat
          value: 10
max: 4
---
