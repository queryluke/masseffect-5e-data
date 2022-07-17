---
name: Reave
version: 1
level: 1
type: biotic
classes:
  - adept
tags:
  - damage
  - debuff
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
      - dieCount: 2
        dieType: 10
        type: necrotic
    conditions: false
    duration:
      length: 0
      unit: instant
    concentration: false
    range:
      short: 150
    detonates: false
    primes: necrotic
  - damage:
      - dieCount: 4
  - damage:
      - dieCount: 6
  - damage:
      - dieCount: 8
  - damage:
      - dieCount: 10
advancements:
  - id: area-reave
    name: Area Reave
    text: The orb becomes unstable and explodes when it reaches the target. Hit or miss, the target and each creature within <me-distance length="5" /> of it must succeed on a Constitution saving throw or take 2d6 necrotic damage. This damage increases by 2d6 for each power slot level above the first.
    mechanics:
      - range:
          aoe:
            type: sphere
            size: 5
        damage:
          - {}
          - dieCount: 2
            dieType: 6
            type: necrotic
      - damage:
          - dieCount: 4
      - damage:
          - dieCount: 6
      - damage:
          - dieCount: 8
      - damage:
          - dieCount: 10
  - id: immediate-detonation
    name: Immediate Detonation
    text: When you hit a target with reave, it detonates the primed condition at the end of your turn.
    mechanics: []
---
Hurl an orb of dark energy at one creature within range. Make a range power attack against the target. On a hit, you
deal 2d10 necrotic damage and the target becomes <me-condition id="primed" sub="necrotic"/> until the end of your next turn.
The target also has disadvantage on their next attack, ability check, or saving throw. This disadvantage lasts one minute
or until the target becomes incapacitated.

__At Higher Levels__: When you cast this power using a power slot of 2nd level or higher, increase the damage by 2d10
for each level above the 1st.
