---
id: barrier_detonation
name: Barrier Detonation
level: 0
type: biotic
attackType: []
effect:
- control
damageType: []
castingTime: Bonus Action
duration: Instant
concentration: false
distance:
  range: Self
  aoeType: sphere
  aoeDistance: 5
detonates: 
primes: 
availableClasses:
- adept
- sentinel
- vanguard
advancementOptions:
- name: Shaped Lift
  description: You may choose the shape of the detonation into a cone, cube, or cylinder. You may also shape it into a line,
    if you do, the line is twice as long as the sphere's radius and <me-distance length="5" /> wide.
- name: Heavy Lift
  description: Large creatures are effected. If you spend at least 4 barrier ticks, Huge creatures must make the saving throw.
---
Expend all of your remaining barrier ticks to create a negative mass effect field in a <me-distance length="5" adj/> sphere originating from you.
Each Medium or smaller creature or object within the sphere must succeed on Strength saving throw or becomes
<me-condition id="lifted"/> until the end of your next turn. If you expend at least 4 barrier ticks, Large targets must make
the saving throw. Creatures with at least 1 shield point have advantage on this saving throw.

Increase the range of the sphere by <me-distance length="5" /> at 5th level (<me-distance length="10" abbr/>), 11th level (<me-distance length="15" abbr/>), and 17th level (<me-distance length="20" abbr/>).
