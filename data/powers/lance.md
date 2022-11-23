---
name: Lance
version: 1
level: 1
type: biotic
tags:
  - damage
classes:
  - adept
  - sentinel
  - vanguard
  - explorer
mechanics:
  - castingTime:
      length: 1
      unit: action
    attack:
      type: ranged
      wp: power
      proficient: true
    dc: false
    damage:
      - dieCount: 3
        dieType: 8
        type: force
    conditions: false
    duration:
      length: 0
      unit: instant
    concentration: false
    range:
      short: 150
    detonates: true
    primes: false
  - damage:
      - dieCount: 5
  - damage:
      - dieCount: 7
  - damage:
      - dieCount: 9
  - damage:
      - dieCount: 11
advancements:
  - id: anti-shield
    name: Anti-shield
    text: Lance deals an additional 2d4 lightning damage. This damage increases by 2d4 for each power slot level above the first.
    mechanics:
      - damage:
          - {}
          - dieCount: 2
            dieType: 4
            type: lightning
            addTo: 'base'
      - damage:
          - {}
          - dieCount: 4
            dieType: 4
            type: lightning
            addTo: 'base'
      - damage:
          - {}
          - dieCount: 6
            dieType: 4
            type: lightning
            addTo: 'base'
      - damage:
          - {}
          - dieCount: 8
            dieType: 4
            type: lightning
            addTo: 'base'
      - damage:
          - {}
          - dieCount: 10
            dieType: 4
            type: lightning
            addTo: 'base'
  - id: improved-damage
    name: Improved Damage
    text: Increase the damage die type to d12.
    mechanics:
      - damage:
          - dieType: 12
---
Release a lance of energy at a creature within range. Make a ranged power attack against the target. On a hit, the target
takes 3d8 force damage.

__At Higher Levels__: When you cast this power using a power slot of 2nd level or higher, the damage increases by 2d8
for each slot level above the 1st.
