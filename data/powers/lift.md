---
id: lift
name: Lift
level: 0
type: biotic
attackType: []
effect:
- control
damageType: []
castingTime: Action
duration: 10 minutes
concentration: true
distance:
  range: 120
  aoeType:
  aoeDistance:
detonates:
primes:
availableClasses:
- adept
- sentinel
- vanguard
advancementOptions:
- name: Magician
  description: You can exert fine motor control over the object, such as manipulating
    a simple tool or removing an object from a container.
- name: Improved Lift
  description: You can manipulate an object that weighs up to <me-weight amount="55" />.
---
You can manipulate light objects with a series of mass effect fields. When you cast this cantrip, you can try to move an
object that weighs up to <me-weight length="20" />. If the object isn't being worn or carried, you automatically move it up to
<me-distance length="30" /> in any direction, but not beyond the range of this power.

If the object is worn or carried by a creature, you must make an ability check with your powercasting ability contested
by that creature's Strength check. If you succeed, you pull the object away from that creature and can move it up to <me-distance length="30" />
in any direction but not beyond the range of this power.
