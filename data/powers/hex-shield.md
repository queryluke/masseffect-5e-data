---
name: Hex Shield
version: 1
level: 0
type: combat
classes:
  - soldier
tags:
  - protection
mechanics:
  - castingTime:
      length: 1
      unit: bonus_action
    attack: false
    dc: false
    damage: false
    conditions: false
    duration:
      length: 0
      unit: instant
    concentration: false
    range:
      short: 0
      aoe:
        size: 5
        type: line
    detonates: false
    primes: false
    resource:
      displayType: counter
      reset: short
      resetTo: max
      max:
        type: flat
        value: 50
      id: hex-shield
      label: hit points / long rest
advancements:
  - id: hearty-shield
    name: Hearty Shield
    text: Increase the shield's hit points to 100.
    mechanics:
      - resource:
          max:
            value: 100
  - id: large-shield
    name: Large Shield
    text: The Shield covers a <me-distance length="10" /> wide area.
    mechanics:
      - range:
          aoe:
            size: 10
---
Toss a portable shield generator onto the ground in front of you. It generates <me-distance length="5" adj/> tall and wide, hexagon-shaped shield
with 5 AC and 50 shield points.

As long as the Hex Shield has shield points, it provides full cover to creatures behind it.

Hex shield regains all shield points when you finish a long rest.
