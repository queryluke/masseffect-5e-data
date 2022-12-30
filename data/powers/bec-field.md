---
name: B.E.C. Field
version: 1
level: 1
tags:
  - buff
classes:
  - engineer
  - musician
  - infiltrator
  - tracker
type: tech
mechanics:
  - castingTime:
      length: 1
      unit: action
    attack: false
    dc: false
    damage:
      - type: temp
        bonus:
          type: flat
          value: 5
      - type: cold
        bonus:
          type: flat
          value: 5
    duration:
      length: 1
      unit: hour
    concentration: false
    range:
      short: 0
    detonates: false
    primes: false
  - damage:
      - bonus:
          value: 10
      - bonus:
          value: 10
  - damage:
      - bonus:
          value: 15
      - bonus:
          value: 15
  - damage:
      - bonus:
          value: 20
      - bonus:
          value: 20
  - damage:
      - bonus:
          value: 25
      - bonus:
          value: 25
  - damage:
      - bonus:
          value: 30
      - bonus:
          value: 30
advancements:
  - id: reactive
    name: Reactive
    text: >-
      When you are hit by a ranged attack while the this power is active, you may use your reaction to deal the cold damage to a creature within <me-distance length="5" /> of you.
    mechanics: []
  - id: cold-aura
    name: Cold Aura
    text: >-
      While the BEC field is active, you are immune to the Frozen condition. Creatures that take damage from this power are primed (cold).
    mechanics:
      - primes: cold
---
You generate a Bose-Einstein Condensate field around your armor that acts to entangle incoming attacks on a quantum level.
You gain 5 temporary hit points for the duration. If a creature hits you with a melee attack while you have these hit
points, the creature takes 5 cold damage.

__At Higher Levels__. When you cast this power using a power slot of 2nd level or higher, both the temporary
hit points and the cold damage increase by 5 for each slot.
