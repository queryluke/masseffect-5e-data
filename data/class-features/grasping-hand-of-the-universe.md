---
level: 18
klass: vanguard
subclass: void-fist
name: Grasping Hand of the Universe
mechanics:
  - type: augment
    value:
      model: vanguard
      id: enlightened-fist
      limit: global-note
    merge:
      moreInfo:
        additional:
          - {}
          - model: class-features
            id: grasping-hand-of-the-universe
---
At 18th level, your Biotic Punch's reach increases to <me-distance length="25" />. When you hit a non
adjacent target, you can move them <me-distance length="10" /> towards you. You can also make
Trip and Shove maneuvers at that distance.
