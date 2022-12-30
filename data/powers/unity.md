---
name: Unity
version: 1
level: 2
type: tech
classes:
  - engineer
  - musician
  - sentinel
  - tracker
  - explorer
tags:
  - heal
mechanics:
  - castingTime:
      length: 1
      unit: action
    attack: false
    dc: false
    damage:
      - dieCount: 1
        dieType: 6
        type: hp
        mod: pc
    conditions: false
    duration:
      length: 0
      unit: instant
    concentration: false
    range:
      short: 90
    detonates: false
    primes: false
  - damage:
      - dieCount: 3
  - damage:
      - dieCount: 5
  - damage:
      - dieCount: 7
  - damage:
      - dieCount: 9
advancements:
  - id: unrestricted--engineer-only-
    name: Unrestricted (Engineer only)
    text: Engineers can spend any amount of tech points to cast this power. They are not limited by their Tech Point Limit column.
    mechanics: []
  - id: shield-restore
    name: Shield restore
    text: Creatures also gain 1d4 shield points. This increases by 1d4 for each power slot above the 2nd.
    mechanics:
      - damage:
          - {}
          - dieCount: 1
            dieType: 4
            type: shields
      - damage:
          - {}
          - dieCount: 2
      - damage:
          - {}
          - dieCount: 3
      - damage:
          - {}
          - dieCount: 4
      - damage:
          - {}
          - dieCount: 5
      - damage:
          - {}
          - dieCount: 6
---
Spawn a swarm of healing nanobots that heal allies. Up to six organic creatures of your choice that you can see within range
regain hit points equal to 1d6 + your powercasting ability modifier.

__At Higher Levels__: When you cast this power using a power slot of 3rd level or higher, the healing increases
by 2d6 for each slot level above 2nd.
