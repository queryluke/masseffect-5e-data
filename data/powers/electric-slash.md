---
name: Electric Slash
version: 1
level: 2
type: tech
tags:
  - damage
classes:
  - engineer
  - infiltrator
mechanics:
  - castingTime:
      length: 1
      unit: action
    attack: false
    dc:
      save: con
    damage:
      - dieCount: 6
        dieType: 6
        type: lightning
    conditions: false
    duration:
      length: 0
      unit: instant
    concentration: false
    range:
      short: 0
      aoe:
        type: cone
        size: 20
    detonates: true
    primes: false
  - damage:
      - dieCount: 8
  - damage:
      - dieCount: 10
  - damage:
      - dieCount: 12
advancements:
  - id: shield-restore
    name: Shield Restore
    text: If you are wearing armor, gain shield points equal to half of your damage roll.
    mechanics: []
  - id: paralyze
    name: Paralyze
    text: Creatures that fail the saving throw are paralyzed until the end of their next turn.
    mechanics:
      - conditions: [paralyzed]
---
Fabricate an electrified whip that lashes out in front of you in an <me-distance length="20" adj /> cone. Each creature must make a Constitution saving
throw. On a failed save, a creature takes 6d6 lightning damage or half as much damage on a successful one.

__At Higher Levels__: When you cast this power using a power slot of 3rd level or higher, the damage increases by 2d6 for
each power slot above the 2nd.
