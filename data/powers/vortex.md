---
id: vortex
name: Vortex
level: 3
type: biotic
attackType:
- DEX Save
effect:
- damage
damageType:
- force
castingTime: Action
duration: Instant
concentration: false
distance:
  range: Self
  aoeType: cone
  aoeDistance: 30
detonates:
primes:
availableClasses:
- adept
- sentinel
- vanguard
advancementOptions:
- name: Radial
  description: You may cast the vortex in a <me-distance length='15' adj />-radius sphere centered on you instead.
- name: Damage
  description: Increase the damage to d12
---
You intertwine negative and positive mass effect fields to create a swirling vortex. Creatures within a <me-distance length="30" adj/> cone must
make a Strength saving throw. On a failed save a creature takes 6d10 force damage, or half as much damage on a successful one.

Creatures that fail the saving throw are thrown 1d6 + <me-distance length='5' /> away from you and become prone.

__At Higher Levels__: When you cast this power using a power slot of 4th level or higher, increase the damage by 2d10 for
each slot level above the 3rd.
