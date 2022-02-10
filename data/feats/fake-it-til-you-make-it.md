---
name: Fake It 'til You Make It
new: true
mechanics:
  - type: asi
    ability: cha
    amount: 1
  - type: skill-check
    value: [deception, performance]
    effect:
      type: advantage
      note: when attempting to convince a creature you can accomplish a task
  - type: other
    shortDesc: When you fail an ability check or saving throw or miss with an attack roll, spent a hit dice to add a d4 to the roll.
    resource:
      reset: short
      resource:
        displayType: hit-dice
prerequisite: Human or Batarian
prereq:
  - type: species
    limit: [human, batarian]
---
You mimic confidence, competence and an optimistic mindset, which you hope help you realize those qualities in
your real life. You gain the following benefits:

- Increase your Charisma score by 1, to a maximum of 20.
- If you fail a saving throw or ability check, or miss with an attack roll, you spend a hit die to roll d4 and
add it to the total, possibly changing the outcome. Once you use this feature, you can’t use it again until you
finish a short or long rest.
- You have advantage on Charisma (Deception) and Charisma (Performance) checks when trying to convince a creature you
can accomplish something without a problem.
