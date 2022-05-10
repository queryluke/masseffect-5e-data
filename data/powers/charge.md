---
name: Charge
version: 1
level: 0
type: biotic
tags:
  - damage
  - movement
classes:
  - vanguard
mechanics:
  - castingTime:
      length: 1
      unit: action
    attack: false
    dc:
      save: dex
    damage:
      - dieCount: 1
        dieType: 10
        type: force
    duration:
      length: 0
      unit: instant
    range:
      short: 40
    detonates: true
    primes: false
  - damage:
      - dieCount: 2
  - damage:
      - dieCount: 3
  - damage:
      - dieCount: 4
advancements:
  - id: barrier-regen
    name: Barrier Regen
    text: After you cast Charge, if you have an active barrier, regain 2 barrier ticks and reset the duration of your barrier to 1 minute.
    mechanics: []
  - id: area-charge
    name: Area Charge
    text: Each creature within <me-distance length="10"/> of the target must make the Dexterity saving throw.
    mechanics:
      - range:
          aoe:
            type: sphere
            size: 10
---
Choose a creature or object within range and use the target's mass to pull yourself to its location with incredible force
(this movement does not provoke opportunity attacks). The target must make a Dexterity saving throw.
On a failed save the target takes 1d10 force damage and becomes <me-condition id="prone" />. Charge ignores half cover.

The damage increases by 1d10 when you reach the 5th level (2d10), 11th level (3d10) and 17th level (4d10).
