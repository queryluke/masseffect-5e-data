---
name: Energy Drain
version: 1
level: 1
type: tech
tags:
  - damage
classes:
  - engineer
  - sentinel
mechanics:
  - castingTime:
      length: 1
      unit: action
    attack:
      type: ranged
      proficient: true
    dc: false
    damage:
      - dieCount: 3
        dieType: 6
        type: lightning
    duration:
      length: 0
      unit: instant
    concentration: false
    range:
      short: 150
      aoe: false
    detonates: true
    primes: false
    notes:
      - Regain Shields = 1/2 damage
  - damage:
      - dieCount: 4
  - damage:
      - dieCount: 5
  - damage:
      - dieCount: 6
  - damage:
      - dieCount: 7
advancements:
  - id: linked-current
    name: Linked Current
    text: On a successful hit, you can designate yourself or an ally within range of the ability to direct a positive current. Instead of gaining shield points, this current doubles a creature's waking speed for 1d4 rounds. Using this advanced tech skill more than once does not stack the speed boost.
    mechanics: []
  - id: improved-regen
    name: Improved Regen
    text: On a successful hit, you regain shield points equal to the amount of lightning damage dealt.
    mechanics: []
---
Cycle your omni-tool, sapping electromagnetic energy from a creature you can see within range. Make a ranged power attack
against the target. On a hit, the target takes 3d6 lightning damage, and you regain shield points equal to half the
amount of lightning damage dealt.

__At Higher Levels__: When you cast this power using a power slot of 2nd level or higher, the damage increases
by 1d6 for each slot level above 1st.
