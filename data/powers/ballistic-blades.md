---
name: Ballistic Blades
version: 1
level: 0
type: combat
tags:
  - damage
classes:
  - infiltrator
  - soldier
  - vanguard
  - tracker
mechanics:
  - castingTime:
      unit: attack
    resource:
      reset: short
      max:
        type: flat
        value: 1
    attack:
      type: ranged
      wp: weapon
      proficient: true
      mod: dex
    dc: false
    damage:
      - dieCount: 2
        dieType: 12
        type: piercing
    concentration: false
    range:
      short: 30
    detonates: false
    primes: false
  - damage:
      - dieCount: 4
  - damage:
      - dieCount: 6
  - damage:
      - dieCount: 8
advancements:
  - id: bleeding-blades
    name: Bleeding Blades
    text: >-
      On a hit, the target takes an additional 3d12 damage at the start of its next turn due to
      blood loss. This damage bypasses shields.
    mechanics:
      - damage:
          - {}
          - dieCount: 3
            dieType: 12
            type: bleeding
  - id: exploding-blades
    name: Exploding blades
    text: >-
      On a hit, the target takes an additional 1d12 thunder damage and must pass a Constitution
      saving throw (DC 8 + proficiency bonus) or becomes stunned until the end of your next turn.
    mechanics:
      - damage:
          - {}
          - dieCount: 1
            dieType: 12
            type: thunder
        notes:
          - DC {{ 8 + profBonus }} or stunned
---
Fire a salvo of blades at a target creature or object you can see within range. Make a ranged weapon attack, you add
your proficiency bonus to this roll. On a hit, the target takes 2d12 piercing damage.

You must spend a short or long rest reloading the armguard before you can this ability again.

This feature's damage increases by 2d12 when you reach 5th level (4d12), 11th level (6d12), 17th level (8d12)
