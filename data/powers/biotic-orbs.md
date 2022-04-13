---
name: Biotic Orbs
version: 1
level: 2
type: biotic
tags:
  - damage
  - buff
classes:
  - adept
  - vanguard
mechanics:
  - castingTime:
      length: 1
      unit: action
    attack:
      type: ranged
      proficient: true
    dc: false
    damage:
      - dieCount: 2
        dieType: 10
        type: force
    duration:
      length: 1
      unit: minute
    concentration: true
    range:
      short: 90
      aoe: false
    detonates: true
    primes: false
    resource:
      displayType: counter
      reset: cast
      resetTo: max
      max:
        type: flat
        value: 3
      id: biotic-orbs
  - resource:
      max:
        value: 5
  - resource:
      max:
        value: 7
  - resource:
      max:
        value: 9
advancements:
  - id: improved-orbs
    name: Improved Orbs
    text: >-
      You may expend 2 orbs to cast a power using your highest available power slot.
    mechanics: []
  - id: retribution
    name: Retribution
    text: >-
      As a reaction to taking damage, you may expend all of your remaining biotic orbs. For each expended orb, make a ranged power attack on a target you can see within range. You can direct all attacks to hit one creature or several.
    mechanics:
      - altCasting:
          - length: 1
            unit: reaction
            reaction: when you suffer damage
---
Summon 3 biotic orbs that float around you, fueling your biotic energies. As an action, you may expend an orb and make a
ranged power attack on a creature within <me-distance length="90" />. On a hit, deal 2d10 force damage.

As an action, you may expend 3 orbs to cast a power using your highest available power slot. Casting a power in this way
does not consume the power slot.

__At Higher Levels__: When you cast this power using a power slot of 3rd level or higher, the number of orbs increases by
2 for each slot level above the 2nd.
