---
id: dark_sphere
name: Dark Sphere
level: 3
type: biotic
attackType:
- DEX save
- CON save
effect:
- damage
damageType:
- necrotic
castingTime: Action
duration: 1 minute
concentration: true
distance:
  range: Self
  aoeType: sphere
  aoeDistance: 10
detonates: 
primes: necrotic
availableClasses:
- adept
advancementOptions:
- name: Control
  description: Before the sphere moves, you may change its direction and speed. Its speed becomes <me-distance length="10" />, <me-distance length="15" />, or <me-distance length="20" />.
- name: Amplify
  description: Add 1d8 to the detonation damage for each <me-distance length="10" /> the sphere travels.
---
Launch a slow-moving, <me-distance length="10" adj /> wide sphere of dark energy in a straight line. It moves <me-distance length="10" /> at the end of each of your turns.
A creature caught in the sphere's path becomes <me-condition id="primed" sub="necrotic"/> until the end of its next turn and 
must make a Constitution saving throw. On a failed save, a creature takes necrotic damage equal to 6d8 +
your spellcasting ability modifier, or half as much on a successful one.

At the start of your turn, if the sphere has traveled <me-distance length="60" />, it detonates and the spell ends. Each creature within
a <me-distance length="15" adj /> radius must make a Constitution saving throw. On a failed save a creature takes necrotic damage equal to 6d8 +
your spellcasting ability modifier or half as much damage on a successful one. This damage detonates any primed targets.

You can use an action to detonate the sphere before it travels <me-distance length="60" />. If you lose concentration while casting the spell,
it does not detonate.

__At Higher Levels__: When you cast this spell using a spell slot of 4th level or higher, the damage increases by 2d8
for each slot level above 3rd.
