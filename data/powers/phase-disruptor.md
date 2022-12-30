---
name: Phase Disruptor
version: 1
level: 0
type: biotic
classes:
  - adept
  - sentinel
  - vanguard
  - explorer
tags:
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
      - dieCount: 3
        dieType: 4
        type: force
    conditions: false
    duration:
      length: 0
      unit: instant
    concentration: false
    range:
      short: 120
    detonates: true
    primes: false
advancements:
  - id: improved-damage
    name: Improved Damage
    text: Increase the damage die type to d6.
    mechanics: []
  - id: cripple
    name: Cripple
    text: A creature hit by Phase Disruptor has disadvantage on its next attack roll.
    mechanics: []
---
You focus the energy of your barrier into a high-powered beam at a target creature or object within range. Remove 1
barrier tick and make a ranged power attack on that target. On a hit, the creature takes 3d4 force damage.

You may use additional barrier ticks to create more than one beam at higher levels: two beams at 5th level, three beams
at 11th level, and four beams at 17th level. You can direct the beams at the same target or at different ones.
Make a separate attack roll for each beam.
