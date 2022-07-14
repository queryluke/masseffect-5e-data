---
bonuses:
  - threshold: 2
    mechanics:
      - type: reroll-damage
        limits:
          source: power
          types: [biotic, tech]
        ifLessThan: 2
    text: >-
      When you roll a 1 on a damage die for an attack you make with a biotic or
      tech power, you can reroll the die and must use the new roll, even if the
      new roll is a 1.
  - threshold: 4
    mechanics:
      - type: reroll-damage
        limits:
          source: power
          types: [biotic, tech]
        ifLessThan: 3
    text: >-
      When you roll a 1 or 2 on a damage die for an attack you make with a
      biotic or tech power, you can reroll the die and must use the new roll,
      even if the new roll is a 1 or 2.
max: 4
---
