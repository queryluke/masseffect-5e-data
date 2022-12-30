---
name: Slam
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
    attack: false
    dc: false
    damage:
      - dieCount: 2
        dieType: 8
        type: bludgeoning
    conditions: false
    duration:
      length: 0
      unit: instant
    concentration: false
    range:
      short: 90
    detonates: false
    primes: false
advancements:
  - id: stun
    name: Stun
    text: If the target is a creature, it must pass a Constitution saving throw or becomes stunned until the end of your next turn.
    mechanics:
      - dc:
          base: 8
          proficient: true
          save: con
        notes:
          - 'CON save (DC {{ dc }}) or stunned'
  - id: reaction
    name: Reaction
    text: When a creature or object you can see becomes lifted, you may cast Slam on it as a reaction.
    mechanics:
      - altCasting:
          - length: 1
            unit: reaction
            reaction: When a creature you can see becomes lifted
---
Target a lifted creature or object and slam it to the ground dealing 2d8 bludgeoning damage and knocking it prone. The
target is no longer lifted.

The number of targets increases by 1 when you reach 5th level (2), 11th level (3) and 17th level (4).
