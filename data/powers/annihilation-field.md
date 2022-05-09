---
name: Annihilation Field
version: 1
level: 4
type: biotic
tags:
  - damage
classes:
  - adept
mechanics:
  - castingTime:
      length: 1
      unit: action
    attack: false
    dc:
      save: con
    damage:
      - dieCount: 12
        dieType: 6
        type: necrotic
    duration:
      length: 1
      unit: minute
    concentration: true
    range:
      short: 0
      aoe:
        type: sphere
        size: 10
    detonates: false
    primes: necrotic
  - range:
      aoe:
        size: 20
advancements:
  - id: disorient
    name: Disorient
    text: >-
      Creatures that fail the Constitution saving throw have disadvantage on their next attack roll.
    mechanics: []
  - id: phasic
    name: Phasic
    text: Annihilation Field's damage bypasses shields.
    mechanics: []
---
Spin a field of dark energy originating from you in a <me-distance length="10" adj />-radius sphere.
For the duration, the field moves with you and reduces your walking speed by half.

Each creature within the sphere must make a Constitution saving throw. A creature takes 12d6 necrotic damage on a failed
save or half as much damage on a successful one. A creature must also make the saving throw when it enters the field's
space for the first time on a turn or ends its turn there.

Any creature within the sphere is <me-condition id="primed" sub="necrotic"/>. This condition ends immediately if the
creature leaves the sphere.

__At Higher Levels__: When you cast this power using a power slot of 5th level, increase the radius by <me-distance length="10" />.
