---
id: hex_shield
name: Hex Shield
level: 0
type: combat
attackType: []
effect:
- warding
damageType: []
castingTime: Bonus Action
duration: Instant
concentration: false
distance:
  range: Self
  aoeType:
  aoeDistance:
detonates: 
primes: 
availableClasses:
- soldier
advancementOptions:
- name: Hearty Shield
  description: Increase the shield's hit points to 100.
- name: Large Shield
  description: The Shield covers a <me-distance length="10" /> wide area.
---
Toss a portable shield generator onto the ground in front of you. It generates <me-distance length="5" adj/> tall and wide, hexagon-shaped shield
with 5 AC and 50 shield points.

As long as the Hex Shield has shield points, it provides full cover to creatures behind it.

Hex shield regains all shield points when you finish a long rest.
