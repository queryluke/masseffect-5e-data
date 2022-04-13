---
name: Biotic Slash
version: 1
level: 1
type: biotic
tags:
  - damage
  - buff
classes:
  - sentinel
  - vanguard
mechanics:
  - castingTime:
      length: 1
      unit: bonus_action
    attack: false
    dc: false
    damage:
      - dieCount: 2
        dieType: 8
        type: force
    duration:
      length: 1
      unit: minute
    concentration: true
    range:
      short: 0
      aoe: false
    detonates: true
    primes: false
  - damage:
      - dieCount: 4
  - damage:
      - dieCount: 6
  - damage:
      - dieCount: 8
  - damage:
      - dieCount: 10
advancements:
  - id: improved-damage
    name: Improved Damage
    text: Increase the damage die to 2d12
    mechanics:
      - damage:
          - dieType: 12
  - id: destined-hit
    name: Destined Hit
    text: Gain a +5 bonus to your next melee weapon attack roll
    mechanics: []
---
The next time you hit a creature with a melee weapon attack during the power's duration, increase the density of the
weapon dealing an extra 2d8 force damage to the target. This damage detonates primed targets.

__At Higher Levels__: When you cast this power using a power slot of 2nd level or higher, the extra damage dealt by the
attack increases by 2d8 for each slot above the 1st.
