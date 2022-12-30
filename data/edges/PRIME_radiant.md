---
name: Radiant
type: primers
mechanics:
  - damage:
      dieCount: 3
      dieType: 4
      type: radiant
    dc:
      base: 15
      save: con
    shortDesc: >-
      Each creature within <me-distance length="10" /> of the detonated creature suffers {{ damage }} damage
      must succeed on DC 15 Constitution saving throw or become <me-condition id="poisoned" /> for 1 hour.
  - damage:
      dieCount: 4
  - damage:
      dieCount: 5
  - damage:
      dieCount: 6
---
A creature that is primed: radiant is also <me-condition id="poisoned" /> until the primed: radiant condition ends.
When a creature that is primed: radiant detonates, each creature within <me-distance length="10" /> of it suffers
3d4 radiant damage and must succeed on DC 15 Constitution saving throw or become <me-condition id="poisoned" /> for 1 hour.
