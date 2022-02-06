---
name: STG Training
new: true
mechanics:
  - type: asi-choice
    options: true
    limit: [int, dex]
    amount: 1
    selections: 1
  - type: skill-check
    value: [vehicle-handling, acrobatics, stealth, slight-of-hand]
    effect:
      type: mod
      value: int
prerequisite: Salarian
prereq:
  - type: species
    limit: [salarian]
---
The Special Tasks Group is trained to run every step and action through potential outcome scenarios
for the best possible result.

- Increase your Intelligence or Dexterity score by 1, to a maximum of 20.
- Whenever you make a Dexterity check, you gain a bonus to the check equal to your
Intelligence modifier (minimum of +1).
