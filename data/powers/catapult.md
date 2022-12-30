---
name: Catapult
version: 1
level: 1
type: biotic
tags:
  - damage
classes:
  - adept
  - sentinel
  - vanguard
  - explorer
mechanics:
  - castingTime:
      length: 1
      unit: action
    attack: false
    dc:
      save: dex
    damage:
      - dieCount: 3
        dieType: 10
        type: bludgeoning
    duration:
      length: 0
      unit: instant
    concentration: false
    range:
      short: 40
      aoe:
        type: line
        size: 90
    detonates: false
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
  - id: disarm
    name: Disarm
    text: You may target objects being carried. If the creature carrying the object is unwilling, it must succeed on a STR saving throw, or the target is object by this power.
    mechanics: []
  - id: counterstrike
    name: Counterstrike
    text: When a creature you can see casts a power or makes an attack within range, you may use your reaction to cast this power, flinging the object toward the creature. The creature automatically fails its Dexterity saving throw. If the creature was casting a power, it must succeed on a Constitution saving throw or the power fails (DC 10 or half the Catapult damage, whichever is higher). If the creature was making an attack roll, it has disadvantage on the attack roll.
    mechanics:
      - altCasting:
          - length: 1
            unit: reaction
            reaction: which you take when a creature you can see casts a power or makes an attack
---
Choose one Tiny object that is not being worn or carried within range. The object is thrown in a straight line up to <me-distance length="90" /> in a direction you choose before falling to the ground, stopping early if it impacts against a solid surface.

If the object would strike a creature, that creature must make a Dexterity saving throw. On a failed save, the object strikes the creature and stops moving. When the object strikes something, the object and what it strikes each take 3d10 bludgeoning damage.

__At Higher Levels__: When you cast this power using a power slot of 2nd level or higher, the size of the object increases by 1 (Small, Medium, Large, Huge) and the damage increases by 2d10, for each slot level above 1st.

Disarm
