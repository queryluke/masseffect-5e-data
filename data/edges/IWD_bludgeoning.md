---
name: Bludgeoning
mechanics:
  - type: augment
    value:
      model: main-augments
      id: MA_weaponry-ranged
      limit: [attack]
    merge:
      damage:
        - type: bludgeoning
  - type: augment
    value:
      model: main-augments
      id: MA_weaponry-melee
      limit: [attack]
    merge:
      damage:
        - type: bludgeoning
type: integrated-weaponry-damage
---
