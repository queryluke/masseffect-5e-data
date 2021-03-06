---
id: gravity_field
name: Gravity Field
createdBy: Chris Alley
level: 1
type: biotic
attackType:
- STR save
effect:
- control
damageType: []
castingTime: Action
duration: 1 minute
concentration: true
distance:
  range: 90
  aoeType: cube
  aoeDistance: 15
detonates:
primes: force
availableClasses:
- adept
- vanguard
advancementOptions:
- name: Pulsing Field
  description: As a bonus action, for the duration of the power, you can force a number of creatures equal to twice the power level
    that are within the gravity field to make a Strength saving throw or be restrained until the power ends.
- name: Warping Field
  description: A creature takes 1d6 necrotic damage per power level when it enters the gravity field for the first time
    on a turn or ends its turn there.
---
You create a field of unstable gravity in a <me-distance length="15" adj/> cube starting from a point within range.  For the duration, this
space becomes difficult terrain.

A creature in the area when you cast the power must succeed on a Strength saving throw or be <me-condition id="restrained"/>
until the power ends. A creature restrained by this power can use its action to make a Strength check against your
power save DC. On a success, it frees itself.

When the power ends, the gravity field dissipates.
