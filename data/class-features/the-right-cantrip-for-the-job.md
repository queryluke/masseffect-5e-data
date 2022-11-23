---
level: 1
klass: explorer
name: The Right Cantrip for the Job
mechanics:
  - type: model-choice
    label: 'Choose a Biotic Cantrip'
    model: powers
    options: true
    hide: true
    limits:
      - attr: level
        value: [0]
      - attr: classes
        value: [explorer]
      - attr: type
        value: [biotic]
  - type: model-choice
    label: 'Choose a Combat Cantrip'
    model: powers
    options: true
    hide: true
    limits:
      - attr: level
        value: [0]
      - attr: classes
        value: [explorer]
      - attr: type
        value: [combat]
---
Your expertise in multiple fields allows you to creatively apply your powers, and if you can't, you can quickly find
one that does fit to your situation.

You have 2 cantrip slots. Each slot must always be occupied by a cantrip of different origin - one Combat and one Biotic.
On a Short Rest, you can change any of the two to any other cantrip.

At 10th level, you can choose one augmentation for each.

In addition, when you finish a short rest, you can select 3 non-Intelligence based skills. Your skillful execution
allows you to add your Intelligence modifier to those skills, in addition to the standard modifier.

All of the biotic cantrips available to the Sentinel are available to the Explorer. All of the combat cantrips
available to the Infiltrator are available to the Explorer.
