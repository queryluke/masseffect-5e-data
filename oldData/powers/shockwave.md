---
id: shockwave
name: Shockwave
level: 1
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
  aoeType: line
  aoeDistance: 30
detonates: x
primes:
availableClasses:
- adept
- sentinel
- vanguard
advancementOptions:
- name: Controlled Shockwave
  description: The shockwave travels <me-distance length="40" />. You may change the direction of the line every
    <me-distance length="10" />.
- name: Improved Damage
  description: Increase damage die type to d10
---
Create a cascading shockwave in a <me-distance length="5" adj/> wide by <me-distance length="30" adj/> long line originating from you. Each creature caught in the line must
make a Dexterity saving throw. On a failed save, a creature takes 3d6 force damage and is knocked <me-condition id="prone"/>.
On a successful save, a creature takes half as much damage.

__At Higher Levels__: When you cast this power using a power slot of 2nd level or higher, the damage increases by 2d6 for
each slot level above the 1st.
