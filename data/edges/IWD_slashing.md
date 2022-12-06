---
name: Slashing
mechanics:
  - type: augment
    value:
      model: main-augments
      id: MA_weaponry-ranged
      limit: [attack]
    merge:
      damage:
        - type: slashing
  - type: augment
    value:
      model: main-augments
      id: MA_weaponry-melee
      limit: [attack]
    merge:
      damage:
        - type: slashing
type: integrated-weaponry-damage
---
