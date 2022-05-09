---
name: Storm
version: 1
level: 4
type: biotic
classes:
  - adept
tags:
  - damage
  - control
mechanics:
  - castingTime:
      length: 1
      unit: action
    attack: false
    dc:
      base: 8
      proficient: true
      save: str
    damage:
      - dieCount: 8
        dieType: 10
        type: force
    conditions: false
    duration:
      length: 1
      unit: minute
    concentration: true
    range:
      short: 60
      aoe:
        type: sphere
        size: 20
    detonates: false
    primes: false
  - damage:
      - dieCount: 10
advancements:
  - id: necrotic-bolts
    name: Necrotic Bolts
    text: Until the power ends, you can use a bonus action on each of your turns to cause a bolt of necrotic energy to leap from the center of the sphere toward one creature you choose within <me-distance length="60" /> of the center. Make a ranged power attack. You have advantage on the attack roll if the target is in the sphere. On a hit, the target takes 4d10 necrotic damage. Necrotic bolts can detonate primed targets.
    mechanics:
      - damage:
          - {}
          - dieCount: 4
            dieType: 10
            type: necrotic
  - id: growing-storm
    name: Growing Storm
    text: While the power is maintained, the storm's radius grows by <me-distance length="5" /> at the start of your turn.
    mechanics: []
---
An <me-distance length="20" adj />-radius sphere of rapid shifting mass effect fields springs into existence centered on a point you choose within
range, creating a dangerous whirlwind of debris and energy. The sphere remains for the power’s duration. Each creature
in the sphere when it appears or that ends its turn there must succeed on a Strength saving throw. On a failed save, a
creature takes 8d10 force damage or half as much on a successful one. The sphere’s space is difficult terrain.

__At Higher Levels__: When you cast this power using a power slot of 5th level, the damage increases for each of its effects by 2d10.
