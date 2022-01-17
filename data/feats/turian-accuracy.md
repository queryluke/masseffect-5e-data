---
name: Turian Accuracy
new: true
mechanics:
  - type: asi-choice
    options: true
    limit: [int, dex, wis]
    amount: 1
    selections: 1
  - type: other
    shortDesc: >-
      Whenever you have advantage on an attack roll using Dexterity, Intelligence, or Wisdom,
      you can reroll one of the dice once.
prerequisite: Turian 
prereq:
  - type: species
    limit: [turian]
---
A virtuoso of ranged weaponry, you have uncanny aim with ranged weapons that rely on precision rather 
than brute force:

- Increase your Dexterity, Intelligence, or Wisdom by 1, to a maximum of 20. 
- Whenever you have advantage on an attack roll using Dexterity, Intelligence, or Wisdom, 
you can reroll one of the dice once.
