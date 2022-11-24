---
level: 14
klass: engineer
subclass: biohacker
mechanics:
  - type: augment
    value:
      model: engineer
      id: muscular-boost
    merge:
      moreInfo:
        additional:
          - model: class-features
            id: improved-muscular-boost
  - type: speed-bonus
    value: [walk]
    bonus:
      type: flat
      value: 10
name: Improved Muscular Boost
---
At 14th level, when you use your Intelligence modifier on a melee attack roll, you now add your full proficiency
modifier and your full Intelligence modifier to the roll. Your speed also increases by <me-distance length="10" />.
