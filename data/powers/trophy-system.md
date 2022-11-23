---
name: Trophy System
version: 1
level: 0
type: combat
classes:
  - infiltrator
  - soldier
  - tracker
  - explorer
tags:
  - protection
mechanics:
  - castingTime:
      length: 1
      unit: reaction
      reaction: when an explosive projectile is within <me-distance length="15" /> of you
    attack: false
    dc: false
    damage: false
    conditions: false
    duration:
      length: 0
      unit: instant
    concentration: false
    range:
      short: 15
    detonates: false
    primes: false
    resource:
      reset: long
      max:
        type: flat
        value: 1
advancements:
  - id: advanced-notice
    name: Advanced Notice
    text: The triggering range increases to <me-distance length="30" />, and you may detonate the explosive at any point along its trajectory.
    mechanics:
      - range:
          short: 30
  - id: dual-trophy
    name: Dual Trophy
    text: You may use your trophy system twice between long rests.
    mechanics:
      - resource:
          max:
            value: 2
---
Your omni-tool's trophy system detects incoming explosives that fires a small ordinance charge to preemptively detonate
hostile explosives. As a reaction to an explosive projectile (grenade or rocket from a heavy weapon) that you can see
within <me-distance length="15" /> of you, you may preemptively detonate it. If the blast would cause you to make a Dexterity saving throw,
you have advantage on the save.

You may use this ability once per long rest.
