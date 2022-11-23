---
name: Salvo
version: 1
level: 1
type: tech
classes:
  - engineer
  - infiltrator
  - sentinel
  - tracker
  - explorer
tags:
  - damage
mechanics:
  - castingTime:
      length: 1
      unit: action
    attack: false
    dc: false
    damage:
      - dieCount: 1
        dieType: 4
        type: radiant
        bonus:
          type: flat
          value: 1
    conditions: false
    duration:
      length: 0
      unit: instant
    concentration: false
    range:
      short: 150
    detonates: true
    primes: false
advancements:
  - id: exploding-salvo
    name: Exploding Salvo
    text: Each dart deals an additional 1d4 thunder damage.
    mechanics:
      - damage:
          - {}
          - dieCount: 1
            dieType: 4
            type: thunder
  - id: blinding-salvo
    name: Blinding Salvo
    text: When you cast salvo, you may create phosphorous darts instead. The darts no longer deal damage and cannot detonate primed targets. Instead, each dart explodes in a bright flash of light. Each creature hit by a dart must succeed on a Constitution saving throw or becomes blinded until the end of your next turn.
    mechanics:
      - damage: false
        dc:
          base: 8
          proficient: true
          save: con
        conditions: [blinded]
---
Create three glowing darts of plasma. Each dart hits a creature of your choice that you can see within range. A dart
deals 1d4+1 radiant damage to its target. The darts all strike simultaneously and you can direct them to hit one
creature or several.

__At Higher Levels__. When you cast this power using a power slot of 2nd level or higher, the power creates two
more darts for each slot level above 1st.
