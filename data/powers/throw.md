---
name: Throw
version: 1
level: 0
type: biotic
classes:
  - adept
  - sentinel
  - vanguard
tags:
  - damage
mechanics:
  - castingTime:
      length: 1
      unit: action
    attack:
      type: ranged
      proficient: true
    dc: false
    damage:
      - dieCount: 1
        dieType: 8
        type: force
    conditions: false
    duration:
      length: 0
      unit: instant
    concentration: false
    range:
      short: 120
    detonates: true
    primes: false
  - damage:
      - dieCount: 2
  - damage:
      - dieCount: 3
  - damage:
      - dieCount: 4
advancements:
  - id: radial-blast
    name: Radial Blast
    text: On a hit, the damage is dealt to each creature within a <me-distance length="5" adj/> radius of the target.
    mechanics:
      - range:
          aoe:
            size: 5
            type: sphere
  - id: improved-damage
    name: Improved Damage
    text: Increase the damage die type to d12
    mechanics:
      - damage:
          - dieType: 12
---
Make a ranged power attack on a target you can see within range. On a hit, the target takes 1d8
force damage. If the target is Medium or smaller, it is pushed backward <me-distance length="30" />.

This power's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), 17th level (4d8).
