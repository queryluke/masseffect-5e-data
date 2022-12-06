---
name: Piercing
mechanics:
  - type: augment
    value:
      model: main-augments
      id: MA_weaponry-ranged
      limit: [attack]
    merge:
      damage:
        - type: piercing
  - type: augment
    value:
      model: main-augments
      id: MA_weaponry-melee
      limit: [attack]
    merge:
      damage:
        - type: piercing
type: integrated-weaponry-damage
---
