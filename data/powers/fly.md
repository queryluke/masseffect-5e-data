---
id: fly
name: Fly
level: 2
type: biotic
attackType: []
effect:
- movement
damageType: []
castingTime: Action
duration: 10 minutes
concentration: true
distance:
  range: Self
  aoeType:
  aoeDistance:
detonates:
primes:
availableClasses:
- adept
- sentinel
- vanguard
advancementOptions:
- name: Speed
  description: You may cast Fly as a bonus action. Increase the flying speed to <me-distance length="90" />
- name: Extended Cast
  description: The duration of fly becomes 30 minutes.
---
Create a negative mass effect field around yourself allowing you to move freely through the air. During the duration of
this power, you gain a flying speed of <me-distance length="60" />. When the power ends if you are still aloft, you fall to the ground.
