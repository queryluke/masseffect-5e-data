---
bonuses:
  - threshold: 2
    text: +1 AC.
    mechanics:
      - type: ac
        bonus:
          type: flat
          value: 1
  - threshold: 3
    text: +10 Shields, +5 Shield Regen.
    mechanics:
      - type: shields
        capacity:
          type: flat
          value: 10
        regen:
          type: flat
          value: 5
  - threshold: 4
    text: >-
      Once per short rest, as a reaction to taking damage, you may jumpstart
      your shield regen and immediately gain shield points equal to your regen
      amount.
    mechanics:
      - type: reaction
        name: Hyper Guardian Armor (Set Bonus 4 of 4)
        resource:
          reset: short
        shortDesc: When you take damage, gain {{ shieldRegen }} shield points.
max: 4
---
