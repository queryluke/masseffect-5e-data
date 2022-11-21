---
name: Hawk Missile Launcher
version: 1
level: 0
type: combat
tags: [damage]
classes:
  - soldier
  - tracker
mechanics:
  - castingTime:
      length: 1
      unit: bonus_action
    attack: false
    dc: false
    damage:
      - dieCount: 3
        dieType: 6
        type: thunder
    conditions: false
    duration:
      length: 0
      unit: instant
    concentration: false
    range:
      short: 150
    detonates: false
    primes: false
    resource:
      reset: short
      max:
        type: flat
        value: 1
  - damage:
      - dieCount: 6
  - damage:
      - dieCount: 9
  - damage:
      - dieCount: 12
advancements:
  - id: anti-shield
    name: Anti-Shield
    text: The missile detonates a small EMP, transforming the damage to lightning.
    mechanics:
      - damage:
          - type: lightning
  - id: three-headed-beast
    name: Three-headed beast
    text: Your missile splits into three separate missiles, each dealing 1d6 damage (2d6 at 5th level, 3d6 at 11th level and 4d6 at 17th level). You can direct the missiles at the same target or at different ones.
    mechanics:
      - damage:
          - dieCount: 1
      - damage:
          - dieCount: 2
      - damage:
          - dieCount: 3
      - damage:
          - dieCount: 4
---
Activate your personal shoulder cannon: The Hawk Missile Launcher. This attack automatically hits a target within range
dealing 3d6 thunder damage.

You can use the Hawk Missile Launcher once per short rest.

This feature's damage increases by 3d6 when you reach 5th level (6d6), 11th level (9d6), 17th level (12d6).
