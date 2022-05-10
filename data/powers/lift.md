---
name: Lift
version: 1
level: 0
type: biotic
classes:
  - adept
  - sentinel
  - vanguard
tags:
  - control
mechanics:
  - castingTime:
      length: 1
      unit: action
    attack: false
    dc: false
    damage: false
    conditions: false
    duration:
      length: 10
      unit: minute
    concentration: true
    range:
      short: 120
    detonates: false
    primes: false
advancements:
  - id: magician
    name: Magician
    text: You can exert fine motor control over the object, such as manipulating a simple tool or removing an object from a container.
    mechanics: []
  - id: improved-lift
    name: Improved Lift
    text: You can manipulate an object that weighs up to <me-weight amount="55" />.
    mechanics: []
---
You can manipulate light objects with a series of mass effect fields. When you cast this cantrip, you can try to move an
object that weighs up to <me-weight amount="20" />. If the object isn't being worn or carried, you automatically move it up to
<me-distance length="30" /> in any direction, but not beyond the range of this power.

If the object is worn or carried by a creature, you must make an ability check with your powercasting ability contested
by that creature's Strength check. If you succeed, you pull the object away from that creature and can move it up to <me-distance length="30" />
in any direction but not beyond the range of this power.
