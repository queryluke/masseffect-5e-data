---
name: Poison Spray
version: 1
level: 1
type: tech
classes:
  - engineer
  - infiltrator
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
      save: con
    damage:
      - dieCount: 2
        dieType: 12
        type: poison
    conditions: [poisoned]
    duration:
      length: 0
      unit: instant
    concentration: false
    range:
      short: 5
    detonates: false
    primes: false
  - damage:
      - dieCount: 4
  - damage:
      - dieCount: 6
  - damage:
      - dieCount: 8
  - damage:
      - dieCount: 10
  - damage:
      - dieCount: 12
advancements:
  - id: pepper-spray
    name: Pepper spray
    text: Creatures that fail the Constitution saving throw are also blinded for 1 minute.
    mechanics:
      - conditions: [poisoned, blinded]
  - id: poison-cloud
    name: Poison Cloud
    text: Create a <me-distance length="5" adj/> radius cloud of poison that persists for 1 minute. Each creature that enters the sphere for the first time on a turn or ends its turn there must make the Constitution saving throw.
    mechanics:
      - duration:
          length: 1
          unit: minute
        range:
          aoe:
            size: 5
            type: sphere
---
Shoot an aerosol spray of noxious chemicals from your omni-tool at a creature within melee range. The creature must
succeed on a Constitution saving throw or take 2d12 poison damage and becomes <me-condition id="poisoned"/> until the end
of your next turn.

__At Higher Levels__: When you cast this power using a power slot of 2nd level or higher, the damage increases
by 2d12 for each slot level above 1st.
