---
level: 3
klass: musician
subclass: tradition
mechanics:
  - type: augment
    value:
      model: musician
      id: musicians-inspiration
    merge:
      resource:
        max:
          type: modComparison
          value: [cha, wis]
  - type: augment
    value:
      model: musician
      id: musicians-touch
      limit: [skill-check]
    merge:
      effect:
        note: Use Performance instead of History and Deception, Intimidation, or Persuasion (Musicians' Touch)
name: Musician's Inspiration
---
At 3rd level, your upbringing fills you with stories to tell. You can use your Musician's Touch in History checks as
well. Additionally, you can use your Inspiration a number of extra times equal to your Wisdom modifier (minimum +1)
