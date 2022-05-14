---
level: 10
klass: vanguard
subclass: shock-trooper
name: Shotgun Savvy
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
            id: shotgun-savvy
  - type: augment
    value:
      model: vanguard
      id: zero-sum
    limit: [global-note]
    merge:
      shortDesc: Instead of a melee or shotgun attack roll, flip a coin. On heads, it's a critical hit. On tails, it's a critical miss.
      moreInfo:
        additional:
          - model: class-features
            id: biotic-fury
---
At 10th level, Brutal critical and Zero-sum can be applied to shotgun weapon attacks.
