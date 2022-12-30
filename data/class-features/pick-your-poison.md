---
level: 2
klass: engineer
subclass: chemist
mechanics:
  - type: model-choice
    label: 'Choose one power'
    model: powers
    options: true
    limits:
      - attr: id
        value: [fuel-spill,noxious-gas]
    hide: true
    append:
      klass: engineer
      merge:
        notes:
          - 'Up to 3 active areas'
name: Pick your Poison
---
When you first pick this subclass at 2nd level, choose one of the following powers: Noxious Gas or Fuel Spill.

You are always considered to have this spell prepared, and it doesn't count towards your total spells known.
You also gain proficiency with the chemist's kit.

Additionally, when you use Fuel Spill or Noxious Gas, you are now able to have a
maximum of 3 areas of those powers active at once.
