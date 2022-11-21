---
name: Fortification
version: 1
level: 0
type: combat
classes:
  - soldier
  - vanguard
  - tracker
tags:
  - buff
mechanics:
  - castingTime:
      length: 1
      unit: reaction
      reaction: which you take when you are targeted by an attack you can see
    attack: false
    dc: false
    damage: false
    conditions: false
    duration:
      length: 1
      unit: round
    concentration: false
    range:
      short: 0
    detonates: false
    primes: false
    resource:
      reset: short
      max:
        type: flat
        value: 1
advancements:
  - id: lasting-fortification
    name: Lasting Fortification
    text: Fortification lasts an additional turn.
    mechanics:
      - duration:
          length: 2
  - id: venting-fortification
    name: Venting Fortification
    text: When fortification ends, the currents are sent to your gauntlets. Your next melee weapon attack is made at advantage and deals an additional 2d10 bludgeoning damage.
    mechanics: []
---
Reinforce your armor using protective Foucault currents. Gain +5 AC until the start of your next turn, including against
the triggering attack.

You must finish a short or long rest before you can use this ability again.
