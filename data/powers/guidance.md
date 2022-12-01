---
name: Guidance
version: 1
level: 1
type: tech
classes:
  - engineer
  - musician
  - infiltrator
  - sentinel
  - explorer
tags:
  - buff
mechanics:
  - castingTime:
      length: 1
      unit: bonus_action
    attack: false
    dc: false
    damage: false
    conditions: false
    duration:
      length: 10
      unit: minute
    concentration: false
    range:
      short: 90
    detonates: false
    primes: false
advancements:
  - id: multi-tap
    name: Multi-Tap
    text: Guidance can be active on up to 3 different targets.
    mechanics: []
  - id: improved-tap
    name: Improved Tap
    text: Increase the die type to d10
    mechanics: []
---
Tap into the VI of a willing creature. Once within the next 10 minutes, the target can roll a d6 and add the number
rolled to one ability check, saving throw, or attack roll of its choice. It can roll the die before or after making the roll.

You may only have guidance active on a single target.
