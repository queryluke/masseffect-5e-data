---
name: Nova
version: 1
level: 0
type: biotic
classes:
  - vanguard
tags:
  - damage
mechanics:
  - castingTime:
      length: 1
      unit: action
    attack: false
    dc:
      base: 8
      proficient: true
      save: dex
    damage:
      - dieCount:
          type: barrierTicks
          value: current
        dieType: 8
        type: force
    conditions: false
    duration:
      length: 0
      unit: instant
    concentration: false
    range:
      short: 0
      aoe:
        type: sphere
        size: 5
    detonates: true
    primes: false
  - damage:
      - dieCount:
          type: multi
          value:
            - type: barrierTicks
              value: current
            - type: flat
              value: 1
  - damage:
      - dieCount:
          type: multi
          value:
            - type: barrierTicks
              value: current
            - type: flat
              value: 2
  - damage:
      - dieCount:
          type: multi
          value:
            - type: barrierTicks
              value: current
            - type: flat
              value: 3
advancements:
  - id: improved-damage
    name: Improved Damage
    text: Increase the damage die to d12.
    mechanics:
      - damage:
          dieType: 12
  - id: half-blast
    name: Half blast
    text: When you cast nova, it consumes half of your remaining barrier ticks (rounded up) but deals damage as if you had used all of your remaining barrier ticks.
    mechanics: []
---
Transfer the energy of your barrier into a biotic explosion, consuming your remaining barrier ticks. Creatures within a
<me-distance length="5" adj/> sphere centered on you must make a Dexterity saving throw. On a failed save, a creature is knocked prone and takes
force damage equal to Xd8, where X is the number of barrier ticks. On a successful save, a creature takes half as much
damage.

This power's damage increases by 1d8 when you reach 5th level (X + 1d8), 11th level (X + 2d8), 17th level (X + 3d8)
