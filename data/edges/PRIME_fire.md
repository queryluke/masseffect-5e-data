---
name: Fire
type: primers
mechanics:
  - range:
      aoe:
        size: 10
        type: sphere
    damage:
      dieCount: 1
      dieType: 6
      type: fire
    shortDesc: >-
      Each creature within a <me-distance length="10" adj /> radius, including the primed target, catch fire,
      taking {{ damage }} damage . Each creature continues to burn for 1 minute, taking {{ damage }} damage at the start of its
      turn. A creature that is on fire can use its action put out the fire.
  - damage:
      dieCount: 3
  - damage:
      dieCount: 4
  - damage:
      dieCount: 5
---
Each creature within a <me-distance length="10" adj /> radius, including the primed target, catch fire,
taking 1d6 fire damage. Each creature continues to burn for 1 minute, taking 1d6 fire damage at the start of its
turn. A creature that is on fire can use its action put out the fire. The fire damage increases by 1d6 at 5th (2d6),
11th (3d6), and 17th (4d6) level.
