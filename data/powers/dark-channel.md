---
name: Dark Channel
version: 1
level: 0
type: biotic
tags:
  - damage
classes:
  - adept
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
      - dieCount: 1
        dieType: 6
        type: necrotic
    duration:
      length: 1
      unit: minute
    concentration: true
    range:
      short: 120
      aoe: false
    detonates: false
    primes: necrotic
advancements:
  - id: cripple
    name: Cripple
    text: If the affected creature would make a saving throw or attack roll, as a reaction you may increase the severity of Dark Channel. The affected creature must roll a d4 and subtract the number rolled from the attack roll or saving throw.
    mechanics:
      - altCasting:
          - length: 1
            unit: reaction
            reaction: which you take when your dark channel target makes a saving throw or attack roll
  - id: improved-damage
    name: Improved Damage
    text: Increase the damage die type to d10
    mechanics:
      - damage:
          - dieType: 10
---
Make a ranged power attack on a creature you can see within range. On a hit, you plague the target with a persistent,
damaging biotic field. The creature is <me-condition id="primed" sub="necrotic"/> and takes 1d6 necrotic damage and 1d6
necrotic damage at the start of your turn while you maintain the power. If the creature dies, dark channel transfers to
the nearest hostile creature within <me-distance length="30" /> of the target.

The damage increases by 1d6 when you reach the 5th level (2d6), 11th level (3d6) and 17th level (4d6).
