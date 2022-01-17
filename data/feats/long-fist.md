---
name: Long Fist
new: true
mechanics:
  - type: asi-choice
    options: true
    limit: [str, dex]
    selections: 1
  - type: augment
    model: weapon
    limits:
      - path: 'type'
        values: ['melee']
    augments:
      - path: 'range'
        value: 5
        type: append
      - path: 'notes'
        value: Re-roll 1's
        type: append
  - type: augment
    model: weapons
    modelId: unarmed-strike
    augments:
      - path: 'damage.dieType'
        value: 8
        type: replace
prerequisite: Elcor
prereq:
  - type: species
    limit: [elcor]
---
You’ve trained in an ancient Elcor martial art which adds range and impact to your slow and sweeping strikes.
- Increase your Dexterity or Strength score by 1, to a maximum of 20.
- When you make a melee attack on your turn, your reach for it is 2 meters greater than normal.
- Your unarmed strike uses a d8 for damage.
- Whenever you roll a 1 on a damage die for a melee attack, you can reroll the die and must use the new roll.



