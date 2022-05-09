---
name: Fly
version: 1
level: 2
type: biotic
classes:
  - adept
  - sentinel
  - vanguard
tags:
  - movement
mechanics:
  - castingTime:
      length: 1
      unit: action
    attack: false
    dc: false
    damage: false
    conditions: false
    duration:
      length: 10
      unit: minute
    concentration: true
    range:
      short: 0
    detonates: false
    primes: false
    toggle:
      id: power-fly
      whenOn:
        - type: speed
          speed: fly
          distance: 60
advancements:
  - id: speed
    name: Speed
    text: You may cast Fly as a bonus action. Increase the flying speed to <me-distance length="90" />
    mechanics:
      - altCasting:
          - length: 1
            unit: bonus_action
        toggle:
          whenOn:
            - distance: 90
  - id: extended-cast
    name: Extended Cast
    text: The duration of fly becomes 30 minutes.
    mechanics:
      - duration:
          length: 30
---
Create a negative mass effect field around yourself allowing you to move freely through the air. During the duration of
this power, you gain a flying speed of <me-distance length="60" />. When the power ends if you are still aloft, you fall to the ground.
