---
level: 15
klass: adept
name: Biotic Mastery
mechanics:
  - type: model-choice
    label: 'Choose two powers'
    model: powers
    options: true
    known: true
    limits:
      - attr: level
        value: [1]
    hide: true
    isolated: true
    selections: 2
    append:
      type: 'power-at-will'
      levels: [1]
---
At 15th level, you have achieved such mastery over certain biotics that you can cast them at will. Choose two 1st-level
biotic powers that you have learned. You can cast those powers at 1st level without
expending a power slot. If you want to cast either power at a higher level, you must expend a power slot as normal.

By spending 8 hours training, you can exchange one or both of the powers you chose for different powers of the same levels.
