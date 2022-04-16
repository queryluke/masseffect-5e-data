---
name: Biotic Sphere
version: 1
level: 4
type: biotic
tags:
  - protection
classes:
  - adept
mechanics:
  - castingTime:
      length: 1
      unit: action
    attack: false
    dc: false
    damage: false
    duration:
      length: 1
      unit: minute
    concentration: true
    range:
      short: 0
      aoe:
        type: sphere
        size: 15
    detonates: false
    primes: false
    resource:
      displayType: counter
      reset: cast
      resetTo: max
      max:
        type: flat
        value: 100
      id: biotic-sphere
      label: hit points
  - resource:
      max:
        value: 150
advancements:
  - id: infuse-ammo
    name: Infuse Ammo
    text: Friendly creatures inside the sphere add 1d6 force damage to all ranged weapon attacks against creatures outside of the sphere. This damage can detonate primed targets.
    mechanics:
      - damage:
          - dieCount: 1
            dieType: 6
            type: force
  - id: armored
    name: Armored
    text: The sphere has resistance to bludgeoning, piercing, slashing, and thunder damage, but only has 75 hit points.
    mechanics:
      - resource:
          max:
            value: 75
          label: Resistance to bludgeoning, piercing, slashing, and thunder damage
      - resource:
          max:
            value: 125
          label: Resistance to bludgeoning, piercing, slashing, and thunder damage
---
A shimmering barrier with 100 hit points extends out from you in a <me-distance length="15" adj /> sphere and moves with you, remaining centered on
you and hedging out hostile creatures. If a hostile creature is within the sphere when you cast this power, it is pushed
outside of the sphere's radius.

Any attack against a creature or targeted at a location within the sphere automatically hits the barrier instead. The barrier
automatically fails any saving throws.

The barrier dissipates when it has 0 hit points. If an attack would deal more damage than the remaining hit points of the
barrier, it soaks all of the damage and then dissipates.

__At Higher Levels__: When you cast this power using a power slot of 5th level, the barrier's health increases by 50 hit points.
