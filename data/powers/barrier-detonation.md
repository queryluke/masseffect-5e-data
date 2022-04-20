---
name: Barrier Detonation
version: 1
level: 0
type: biotic
tags:
  - control
classes:
  - adept
  - sentinel
  - vanguard
mechanics:
  - castingTime:
      length: 1
      unit: bonus_action
    attack: false
    dc:
      save: str
    damage: false
    duration:
      length: 1
      unit: round
    concentration: false
    range:
      short: 0
      aoe:
        type: sphere
        size: 5
    detonates: false
    primes: false
    conditions: [lifted]
  - range:
      aoe:
        size: 10
  - range:
      aoe:
        size: 15
  - range:
      aoe:
        size: 20
advancements:
  - id: shaped-lift
    name: Shaped Lift
    text: >-
      You may change the shape of the detonation into a cone, cube, or cylinder. You may also shape it into a line, if you do, the line is twice as long as the sphere's radius and <me-distance length="5" /> wide.
    mechanics: []
  - id: heavy-lift
    name: Heavy Lift
    text: >-
      Large creatures are effected. If you spend at least 4 barrier ticks, Huge creatures must make the saving throw.
    mechanics: []
---
Expend all of your remaining barrier ticks to create a negative mass effect field in a <me-distance length="5" adj/> sphere originating from you.
Each Medium or smaller creature or object within the sphere must succeed on Strength saving throw or becomes
<me-condition id="lifted"/> until the end of your next turn. If you expend at least 4 barrier ticks, Large targets must make
the saving throw. Creatures with at least 1 shield point have advantage on this saving throw.

Increase the range of the sphere by <me-distance length="5" /> at 5th level (<me-distance length="10" abbr/>), 11th level (<me-distance length="15" abbr/>), and 17th level (<me-distance length="20" abbr/>).
