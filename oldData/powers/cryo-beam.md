---
id: cryo_beam
name: Cryo Beam
level: 2
type: tech
attackType:
- STR save
effect:
- damage
damageType:
- cold
castingTime: Action
duration: instant
concentration: false
distance:
  range: Self
  aoeType: line
  aoeDistance: 20
detonates:
primes: cold
availableClasses:
- engineer
- infiltrator
- sentinel
advancementOptions:
- name: Brittle Freeze
  description: Shields no longer provide advantage on the saving throw. On a successful save, a creature is <me-condition id="primed" sub="cold"/> until the end of your next turn.
- name: Frozen Ground
  description: Cryo beam leaves a patch of ice on the ground that lasts for 1 minute. The ground is considered difficult terrain.
---

Blast a continuous stream of liquid hydrogen from your omni-tool in an <me-distance length="20"/> long by <me-distance length="5"/> wide line. Each creature in the beam
must make a Strength saving throw. On a failed save, a creature takes 5d8 cold damage and then becomes <me-condition id="frozen"/>
until the start of your next turn. On a successful save, a creature takes half as much damage and isn't frozen by this power.
Creatures with at least 1 shield point have advantage on this saving throw.

A creature must also make the saving throw when it enters the beam's space for the first time on a turn or ends its turn there.

At the start of your turn, you may spend your action and 1 additional tech point to continue casting the beam. Your
movement speed is <me-distance length="5"/> while casting it in this manner. The power ends if you become incapacitated.

__At Higher Levels__: When you cast this power using a power slot of 4th level or higher, the damage increases by 2d8
and the length of the beam increases by <me-distance length="5"/> for each slot level above 3rd.
