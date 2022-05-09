---
name: Shockwave
version: 1
level: 1
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
    attack: false
    dc:
      base: 8
      proficient: true
      save: dex
    damage:
      - dieCount: 3
        dieType: 6
        type: force
    conditions: [prone]
    duration:
      length: 0
      unit: instant
    concentration: false
    range:
      short: 0
      aoe:
        type: line
        size: 30
    detonates: true
    primes: false
  - damage:
      - dieCount: 5
  - damage:
      - dieCount: 7
  - damage:
      - dieCount: 9
  - damage:
      - dieCount: 11
advancements:
  - id: controlled-shockwave
    name: Controlled Shockwave
    text: The shockwave travels <me-distance length="40" />. You may change the direction of the line every <me-distance length="10" />.
    mechanics:
      - range:
          aoe:
            size: 40
  - id: improved-damage
    name: Improved Damage
    text: Increase damage die type to d10
    mechanics:
      - damage:
          - dieType: 10
---
Create a cascading shockwave in a <me-distance length="5" adj/> wide by <me-distance length="30" adj/> long line originating from you. Each creature caught in the line must
make a Dexterity saving throw. On a failed save, a creature takes 3d6 force damage and is knocked <me-condition id="prone"/>.
On a successful save, a creature takes half as much damage.

__At Higher Levels__: When you cast this power using a power slot of 2nd level or higher, the damage increases by 2d6 for
each slot level above the 1st.
