---
name: Stasis
version: 1
level: 2
type: biotic
classes:
  - adept
  - sentinel
  - vanguard
tags:
  - control
  - debuff
mechanics:
  - castingTime:
      length: 1
      unit: action
    attack: false
    dc:
      base: 8
      proficient: true
      save: str
    damage: false
    conditions: [paralyzed]
    duration:
      length: 1
      unit: minute
    concentration: true
    range:
      short: 90
    detonates: false
    primes: force
advancements:
  - id: shatter
    name: Shatter
    text: When stasis ends via a successful saving throw or detonating attack, the target takes 2d8 force damage for each round of combat it was in stasis.
    mechanics: []
  - id: deep-stasis
    name: Deep Stasis
    text: The creature has disadvantage on its saving throws to escape Stasis.
    mechanics: []
---
Lock a target in a high-gravity mass effect field. Choose a creature you can see within range. The creature must make a
Strength saving throw. On a failed save, the creature is <me-condition id="paralyzed" />, <me-condition id="primed" sub="force" />, and has resistance to all damage for
the duration of the power. At the end of each of its turns, the target can make another Strength saving throw. On a success,
the power ends. A detonating attack immediately ends the power.
