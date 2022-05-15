---
level: 6
klass: vanguard
subclass: nemesis
name: Biotic Attacks
mechanics:
  - type: model-choice
    options: true
    model: powers
    limits:
      - attr: type
        value: [biotic]
      - attr: level
        value: [0]
    known: true
    hide: true
    append:
      type: 'power-attack'
  - type: model-choice
    options: true
    model: powers
    limits:
      - attr: type
        value: [biotic]
      - attr: level
        value: [1]
    known: true
    hide: true
    append:
      type: 'power-attack'
---
At 6th level, you choose one biotic cantrip you know and one biotic power of 1st level you know.
You may cast either power as an attack.

By spending 8 hours training, you can exchange one or both of the powers you chose for different powers of the same levels.
