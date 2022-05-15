---
level: 10
klass: vanguard
subclass: nemesis
name: Biotic Fury
mechanics:
  - type: augment
    value:
      model: vanguard
      id: brutal-critical-1
    limit: [global-note]
    merge:
      moreInfo:
        additional:
          - model: class-features
            id: biotic-fury
  - type: augment
    value:
      model: vanguard
      id: zero-sum
    limit: [global-note]
    merge:
      shortDesc: Instead on a melee or power attack roll, flip a coin. On heads, it's a critical hit. On tails, it's a critical miss.
      moreInfo:
        additional:
          - model: class-features
            id: biotic-fury
---
Starting at 10th level, the effects of brutal critical and zero-sum can be applied to your biotic powers
that require a power attack roll.
