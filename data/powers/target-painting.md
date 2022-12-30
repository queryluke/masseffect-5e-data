---
name: Target Painting
version: 1
level: 1
type: tech
classes:
  - engineer
  - musician
  - infiltrator
  - sentinel
  - tracker
  - explorer
tags:
  - debuff
mechanics:
  - castingTime:
      length: 1
      unit: action
    attack: false
    dc:
      base: 8
      proficient: true
      save: dex
    damage: false
    conditions: false
    duration:
      length: 1
      unit: round
    concentration: false
    range:
      short: 90
      aoe:
        type: cube
        size: 20
    detonates: false
    primes: false
advancements:
  - id: heavy-weapon-sync
    name: Heavy Weapon Sync
    text: Information about the painted targets sync with heavy weapon systems. Any creature that would make a saving throw to avoid heavy weapon damage has disadvantage on the saving throw.
    mechanics: []
  - id: lasting-scan
    name: Lasting Scan
    text: Becomes a concentration power with a duration of 1 minute.
    mechanics:
      - concentration: true
        duration:
          length: 1
          unit: minute
---
Scan an <me-distance length="20" adj/> cube within range. Until the end of your next turn, any creature in the area when the power is cast is
highlighted on all friendly creatures HUDs if it fails a Dexterity saving throw.

Any attack roll against an affected creature or object has advantage if the attacker can see it, and the affected
creature or object can't benefit from being invisible.
