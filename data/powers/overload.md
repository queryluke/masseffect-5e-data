---
name: Overload
version: 1
level: 1
type: tech
classes:
  - engineer
  - infiltrator
  - sentinel
  - explorer
tags:
  - damage
mechanics:
  - castingTime:
      length: 1
      unit: action
    dc:
      base: 8
      proficient: true
      save: dex
    damage:
      - dieCount: 3
        dieType: 6
        type: lightning
    conditions: false
    duration:
      length: 0
      unit: instant
    concentration: false
    range:
      short: 120
    detonates: false
    primes: lightning
  - damage:
      - dieCount: 5
  - damage:
      - dieCount: 7
  - damage:
      - dieCount: 9
  - damage:
      - dieCount: 11
  - damage:
      - dieCount: 13
advancements:
  - id: extended-leap
    name: Extended Leap
    text: Overload can leap to as many as five other targets within <me-distance length="30" />.
    mechanics: []
  - id: heavy-overload
    name: Heavy Overload
    text: Increase the damage die type to d8.
    mechanics:
      - damage:
          - dieType: 8
---
Unleash an electrostatic discharge at a creature or object within range. Three bolts then leap from that target to as
many as three other targets, each of which must be within <me-distance length="15" /> of the first target. A target can be a creature or an
object and can be targeted by only one of the bolts.

A target becomes <me-condition id="primed" sub="lightning"/> until the start of your next turn and must make a Dexterity
saving throw. The target takes 3d6 lightning damage on a failed save, or half as much on a successful one.

__At Higher Levels__: When you cast this power using a power slot of 2nd level or higher, the damage increases
by 2d6 for each slot level above 1st.

