---
name: Havoc Strike
version: 1
level: 0
type: combat
classes:
  - soldier
  - vanguard
tags:
  - damage
mechanics:
  - castingTime:
      length: 1
      unit: attack
    attack: false
    dc:
      base: 8
      proficient: true
      mod: str
      save: dex
    damage:
      - dieCount: 2
        dieType: 8
        type: thunder
    conditions: false
    duration:
      length: 0
      unit: instant
    concentration: false
    range:
      short: 25
      aoe:
        type: sphere
        size: 5
    detonates: false
    primes: false
    resource:
      reset: short
      max:
        type: flat
        value: 2
  - damage:
      - dieCount: 4
  - damage:
      - dieCount: 6
  - damage:
      - dieCount: 8
advancements:
  - id: improved-distance
    name: Improved Distance
    text: You can jump up to <me-distance length="35" />.
    mechanics: []
  - id: improved-radius
    name: Improved Radius
    text: Increase the radius of the impact to <me-distance length="10" />.
    mechanics:
      - range:
          aoe:
            size: 10
---
Use a propulsion jet built into your leg armor to spring to a location within <me-distance length="25" /> and strike the ground with violent force.
Each creature within a <me-distance length="5" adj/> radius of where you land must make a Dexterity saving throw (DC 8 + proficiency bonus + STR modifier).
On a failed save, a creature takes 2d8 thunder damage or half as much on a successful one.

You can use this feature twice between short or long rests.

This feature's damage increases by 2d8 when you reach 5th level (4d8), 11th level (6d8), 17th level (8d8).
