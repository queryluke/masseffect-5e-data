---
name: Defense Matrix
version: 1
level: 1
type: tech
tags:
  - buff
classes:
  - engineer
  - infiltrator
  - sentinel
mechanics:
  - castingTime:
      length: 1
      unit: bonus_action
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
      aoe: false
    detonates: false
    primes: false
advancements:
  - id: shield
    name: Shield
    text: Deploy the matrix as a stationary shield. Up to 2 creatures of medium size can stand behind the shield, gaining half-cover. It lasts 1 minute and no longer requires concentration.
    mechanics: []
  - id: custom-current
    name: Custom Current
    text: When you cast defense matrix, choose one damage type. You have resistance to that type while defense matrix is active.
    mechanics: []
---
Reinforce your armor with special Foucault currents. You gain +2 to your AC while defense matrix is active.
