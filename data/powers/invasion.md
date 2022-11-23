---
name: Invasion
version: 1
level: 1
type: tech
classes:
  - engineer
  - infiltrator
  - sentinel
  - explorer
tags:
  - damage
  - debuff
mechanics:
  - castingTime:
      length: 1
      unit: action
    attack: false
    dc:
      base: 8
      proficient: true
      save: con
    damage:
      - dieCount: 1
        dieType: 8
        type: psychic
    conditions: false
    duration:
      length: 1
      unit: minute
    concentration: true
    range:
      short: 60
      aoe:
        type: sphere
        size: 15
    detonates: false
    primes: false
  - damage:
      - dieCount: 2
    range:
      aoe:
        type: sphere
        size: 20
  - damage:
      - dieCount: 3
    range:
      aoe:
        type: sphere
        size: 25
  - damage:
      - dieCount: 4
    range:
      aoe:
        type: sphere
        size: 30
  - damage:
      - dieCount: 5
    range:
      aoe:
        type: sphere
        size: 35
  - damage:
      - dieCount: 6
    range:
      aoe:
        type: sphere
        size: 40
advancements:
  - id: exploding-swarm
    name: Exploding Swarm
    text: As a bonus action, you can target a creature affected by one of your swarms and detonate it. The target takes 3d8 thunder damage and is no longer affected by the swarm.
    mechanics:
      - damage:
          - {}
          - dieCount: 3
            dieType: 8
            type: thunder
  - id: plague
    name: Plague
    text: Three swarms spread from the initial target to as many as three other targets. When you cast this power using a power slot of 2nd level or higher, the number of swarms increases by 1 for each power slot above the 1st.
    mechanics: []
---
Unleash a VI-controlled machine swarm at a creature or object within range. Two swarms then spread from that target
to as many as two other targets, each of which must be within <me-distance length="15" /> of the first target. A target can be a creature or an
object and can be targeted by only one of the swarms.

A target must make a Constitution saving throw. On a failed save, the target takes 1d8 psychic damage and has disadvantage on
attack rolls until the power ends. A creature affected by the swarm can use its action to make a Constitution check
against your power save DC. On a success, it breaks free of the swarm.

__At Higher Levels__: When you cast this power using a power slot of 2nd level or higher, the damage increases by 1d8
and the range the swarms can spread increases by 2m for each slot level above 1st.
