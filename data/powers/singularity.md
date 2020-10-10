---
id: singularity
name: Singularity
level: 3
type: biotic
attackType:
- STR Save
effect:
- control
damageType: []
castingTime: Action
duration: 1 minute
concentration: true
distance:
  range: 90
  aoeType: sphere
  aoeDistance: 10
detonates: 
primes: force
availableClasses:
- adept
advancementOptions:
- name: Heavy Singularity
  description: Creatures have disadvantage when making the Strength saving throw or Strength (Athletics) check.
- name: Damage
  description: Any creature within singularity's radius is primed (necrotic) and takes 1d8 necrotic damage at the end of each of your turns.
---
Create a negative mass effect field in a <me-distance length="10" adj/> sphere at a target location within range. Each creature or object within the
sphere's radius must succeed on a Strength saving throw or becomes lifted. Only Medium or smaller creature and objects
are affected. Any creature or object that enters the sphere for the first time or ends its turn there must succeed on a
Strength (Athletics) check or they are drawn into the sphere and become lifted. Creatures with at least 1 shield point
have advantage on the Strength saving throw or Strength (Athletics) check.

__At Higher Levels__: When you cast this spell using a spell slot of 4th level or higher, increase the size of the sphere
by <me-distance length="10" /> per spell slot above the 3rd.
