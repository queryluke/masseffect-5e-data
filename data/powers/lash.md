---
name: Lash
version: 1
level: 2
type: biotic
classes:
  - adept
  - sentinel
  - vanguard
  - explorer
tags:
  - damage
  - control
mechanics:
  - castingTime:
      length: 1
      unit: action
    attack:
      type: ranged
      wp: power
      proficient: true
    dc: false
    damage:
      - dieCount: 4
        dieType: 8
        type: force
    conditions: [grappled]
    duration:
      length: 1
      unit: minute
    concentration: true
    range:
      short: 60
    detonates: false
    primes: force
  - damage:
      - dieCount: 6
  - damage:
      - dieCount: 8
  - damage:
      - dieCount: 10
advancements:
  - id: improved-grapple
    name: Improved Grapple
    text: The grappled creature has disadvantage when trying to escape.
    mechanics: []
  - id: improved-damage
    name: Improved Damage
    text: Increase the damage die type to d12.
    mechanics:
      - damage:
          - dieType: 12
---
Make a ranged power attack on a target you can see within range. On a hit, the target takes 4d8 force damage and becomes
<me-condition id="grappled"/>. While grappled the creature is <me-condition id="primed" sub="force"/>. To escape the grapple,
the creature must succeed on a contested Strength (Athletics) check against your Constitution. This power also ends if
the creature is hit with a detonating attack or if you move more than <me-distance length="60" /> away from the target.

__At Higher Levels__: When you cast this power using a power slot of 3rd or higher, the damage increases by 2d8 for each
slot level above the 2nd.
