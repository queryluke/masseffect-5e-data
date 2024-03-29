---
name: Tear
version: 1
level: 4
type: biotic
classes:
  - adept
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
      - dieCount: 10
        dieType: 6
        type: necrotic
        bonus:
          type: flat
          value: 40
    conditions: false
    duration:
      length: 0
      unit: instant
    concentration: false
    range:
      short: 90
    detonates: true
    primes: false
  - damage:
      - dieCount: 15
advancements:
  - id: anti-biotics
    name: Anti-Biotics
    text: A creature with an active barrier that is hit by this power must expend all remaining barrier ticks to reduce the damage. The total damage reduction from the remaining barrier ticks is reduced by half.
    mechanics: []
  - id: anti-synthetic
    name: Anti-Synthetic
    text: Non-organic creatures or objects take an extra 40 force damage. This power disintegrates up to a 6m cube of synthetic materials.
    mechanics: []
---
A concentrated ray of warp energy erupts from your outstretched hand toward a target that you can see within range.
The target can be a creature, an object, or a biotic creation, such as a biotic wall.

A creature targeted by this power must make a Dexterity saving throw. On a failed save, the target takes
10d6 + 40 necrotic damage. If this damage leaves it with 0 hit points, the target and everything
it is wearing and carrying is ripped apart at the atomic level, reducing it to a mist of radiated atoms.

This power automatically disintegrates a Large or smaller unshielded object or a biotic creation. If the target is a
Huge or larger object or creation of force, this power disintegrates a <me-distance length="10" adj/> cube portion of it.

__At Higher Levels__. When you cast this power using a power slot of 5th level or higher, the damage increases by 5d6
for each slot level above 4th.
