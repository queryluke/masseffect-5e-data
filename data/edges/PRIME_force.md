---
name: Force
type: primers
mechanics:
  - damage:
      dieCount: 2
      dieType: 6
      type: force
    shortDesc: >-
      Detonated creature suffers {{ damage }} damage, is knocked back <me-distance length="15" />, and becomes becomes <me-condition id="prone" />.
  - damage:
      dieCount: 3
  - damage:
      dieCount: 4
  - damage:
      dieCount: 5
---
When a creature that is primed: force detonates, it suffers 2d6 force damage, is knocked back
<me-distance length="15" /> and becomes <me-condition id="prone" />. The force damage increases by 1d6 at 5th (3d6), 11th (4d6), and 17th (5d6) level.
