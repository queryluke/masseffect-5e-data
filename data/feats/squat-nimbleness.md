---
name: Squat Nimbleness
new: true
mechanics:
  - type: asi-choice
    options: true
    limit: [str, dex]
    amount: 1
    selections: 1
  - type: skill-choice
    limit: [acrobatics, athletics]
    options: true
    selections: 1
  - type: speed-bonus
    value: [walk]
    bonus:
      type: flat
      value: 5
  - type: skill-check
    value: [acrobatics, athletics]
    effect:
      type: advantage
      note: to escape being grappled
prerequisite: Volus
prereq:
  - type: species
    limit: [volus]
---
You are uncommonly nimble for your species. You gain the following benefits:

- Increase your Strength or Dexterity score by 1 to a maximum of 20.
- Increase your walking speed by 5 feet.
- You gain proficiency in the Acrobatics or Athletics skill (your choice).
- You have advantage on any Strength (Athletics) or Dexterity (Acrobatics) check you make to
escape from being grappled.
