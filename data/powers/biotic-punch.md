---
name: Biotic Punch
version: 1
level: 0
type: biotic
tags:
  - damage
  - buff
classes:
  - adept
  - sentinel
  - vanguard
  - explorer
mechanics:
  - castingTime:
      length: 1
      unit: action
    attack:
      type: melee
      wp: power
      proficient: true
    dc: false
    damage:
      - dieCount: 1
        dieType: 8
        type: bludgeoning
    duration:
      length: 0
      unit: instant
    concentration: false
    range:
      short: 1
      aoe: false
    detonates: true
    primes: false
  - damage:
      - dieCount: 2
  - damage:
      - dieCount: 3
  - damage:
      - dieCount: 4
advancements:
  - id: efficient-punch
    name: Efficient Punch
    text: On a hit, gain 3 barrier ticks.
    mechanics: []
  - id: siphoning-strike
    name: Siphoning Strike
    text: On a hit, instead of gaining barrier ticks, gain 10 shield points.
    mechanics: []

---
Increase the mass of your fist and strike at a target. Make a melee power attack on a target creature or object within range.
On a hit, deal 1d8 bludgeoning damage. If you have an active barrier, regain 2 barrier ticks and reset the duration of
your barrier to 1 minute.

This power's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), 17th level (4d8).
