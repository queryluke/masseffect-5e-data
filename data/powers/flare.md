---
name: Flare
level: 4
version: 2
type: biotic
tags:
  - damage
classes:
  - adept
mechanics:
  - castingTime:
      length: 1
      unit: action
    attack: false
    dc:
      base: 8
      proficient: true
      save: dex
    damage:
      - dieCount: 6
        dieType: 12
        type: radiant
    conditions: [blinded]
    duration:
      length: 0
      unit: instant
    concentration: false
    range:
      short: 150
    detonates: true
    primes: false
  - damage:
      - dieCount: 8
advancements:
  - id: improved-blind
    name: Improved Blind
    text: Each creature is blinded no matter the result of its saving throw.
    mechanics: []
  - id: heat-seeking-flare
    name: Heat seeking flare
    text: Instead of choosing 4 targets, you may instead choose 1. If you do so, the target has disadvantage on the saving throw. Increase the damage by 4d12.
    mechanics:
      - damage:
          - {}
          - dieCount: 10
      - damage:
          - {}
          - dieCount: 12
---
Rapidly altering the mass of air particles creates radioactive projectiles that seek out the targets and explode. Choose
up to 4 creatures that you can see within range. Each creature must make a Constitution saving throw. On a failed save,
a creature is <me-condition id="blinded"/> until the end of your next turn and takes radiant damage equal to 6d12. On a
successful save, a creature takes half damage but suffers no other negative effect.

__At Higher Levels__: When you cast this power using a power slot of 5th level, increase the damage by 2d12.
