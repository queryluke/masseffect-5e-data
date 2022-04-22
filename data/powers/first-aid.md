---
name: First Aid
version: 1
level: 1
type: tech
tags:
  - heal
classes:
  - engineer
  - infiltrator
  - sentinel
mechanics:
  - castingTime:
      length: 1
      unit: action
    attack: false
    dc: false
    damage:
      - dieCount: 1
        dieType: 8
        bonus:
          type: powercastingMod
        type: hp
    conditions: false
    duration:
      length: 0
      unit: instant
    concentration: false
    range:
      short: 1
      aoe: false
    detonates: false
    primes: false
  - damage:
      - dieCount: 3
  - damage:
      - dieCount: 5
  - damage:
      - dieCount: 7
  - damage:
      - dieCount: 9
advancements:
  - id: adaptive
    name: Adaptive
    text: The healed creature gains resistance to the last damage type it suffered. This effect lasts for 1 minute.
    mechanics: []
  - id: improved-healing
    name: Improved Healing
    text: Increase the healing die type to d12
    mechanics:
      - damage:
          - dieType: 12
---
Inject a friendly, organic creature with nanobots that reduce pain and heal internal injuries. The creature gains hit points
equal to 1d8 + your powercasting ability modifier.

__At Higher Levels__: When you cast this power using a power slot of 2nd level or higher, the healing increases
by 2d8 for each slot level above 1st.
