---
name: Lightning
type: primers
mechanics:
  - damage:
      dieCount: 3
      dieType: 4
      type: lightning
    range:
      aoe:
        size: 10
        type: sphere
    shortDesc: >-
      Each creature within a <me-distance length="10" adj /> radius, including the primed target,
      suffers {{ damage }} damage.
  - damage:
      dieCount: 4
  - damage:
      dieCount: 5
  - damage:
      dieCount: 6
---
Each creature within a <me-distance length="10" adj /> radius, including the primed target,
suffers 3d4 lightning damage. The lightning damage increases by 1d4 at 5th (4d4), 11th (5d4), and 17th (6d4) level.
