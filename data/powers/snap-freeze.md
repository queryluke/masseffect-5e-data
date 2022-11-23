---
name: Snap Freeze
version: 1
level: 3
type: tech
classes:
  - engineer
  - sentinel
  - infiltrator
  - explorer
tags:
  - control
  - damage
mechanics:
  - castingTime:
      length: 1
      unit: action
    attack:
      type: ranged
      wp: power
      proficient: true
    dc: false
    damage:
      - dieCount: 6
        dieType: 4
        type: bludgeoning
      - dieCount: 6
        dieType: 8
        type: cold
      - dieCount: 6
        dieType: 12
        type: bludgeoning
    conditions: [restrained, blinded, deafened]
    duration:
      length: 0
      unit: instant
    concentration: false
    range:
      short: 90
    detonates: false
    primes: false
  - damage:
      - dieCount: 8
      - dieCount: 8
      - dieCount: 8
  - damage:
      - dieCount: 10
      - dieCount: 10
      - dieCount: 10
  - damage:
      - dieCount: 12
      - dieCount: 12
      - dieCount: 12
advancements:
  - id: solid-freeze
    name: Solid Freeze
    text: The ice is rock solid. Creatures have disadvantage on their Strength checks to break it.
    mechanics: []
  - id: brittle-freeze
    name: Brittle Freeze
    text: A critical success on the Strength check completely shatters the affected creature's appendage. If legs, it falls prone and loses half its remaining hit points. If head, it immediately dies.
    mechanics: []
---
Launch a globe of supercooled helium. Make a ranged power attack on a target within range, choosing a location on its
body. The location can be body, legs, or head.

__Legs__. +2 bonus to hit. The target is <me-condition id="restrained"/> for the next minute. Any creature can use its
action to make a Strength check against your power save DC to try and break the ice. On a success, the affected
creature is freed but suffers 6d4 bludgeoning damage.

__Body__. On a hit, the target takes 6d8 cold damage.

__Head (Large or smaller creature)__. -5 penalty to hit. The creature becomes <me-condition id="blinded"/> and
<me-condition id="deafened"/> for the next minute. Any creature can use an action to make a Strength check against your
power save DC to and break the ice. On a success, the affected creature is freed but suffers 6d12 bludgeoning damage.

__At Higher Levels__: When you cast this power using a power slot of 4th level or higher, the damage increases
by 2 dice for each slot level above 3rd.
