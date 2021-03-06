---
id: submission_net
name: Submission Net
level: 2
type: tech
attackType:
- STR Save
- DEX Save
effect:
- control
damageType:
- lightning
castingTime: Action
duration: 1 minute
concentration: false
distance:
  range: 90
  aoeType: cylinder
  aoeDistance: 10
detonates:
primes:
availableClasses:
- engineer
- infiltrator
- sentinel
advancementOptions:
- name: Electrified Net
  description: If you have a submission net deployed, you can use your bonus action
    to send electric currents through it. Each creature within
    the net takes 2d6 lightning damage.
- name: Anti-Tech
  description: If a creature you can see begins to cast a tech power, you can use
    your reaction to cast submission net.
---
Shoot a swarm of miniature pylons to a target location within range. Each creature within a <me-distance length="10" adj /> cylinder of the target
location must make a Dexterity saving throw. Any creature that fails the saving throw is trapped in an electrified net,
becoming <me-condition id="restrained"/> and cannot cast tech powers.

Until the power ends, the area is considered difficult terrain. A creature that enters the cylinder for the first time
on its turn or ends its turn there must also make the Dexterity saving throw.

A creature restrained by submission net may use its action to make a Strength (Athletics) check against your power save
DC to escape the net. On each attempt, the creature takes 1d6 lightning damage as it struggles against the net. On a
success, the creature is no longer restrained.

__At Higher Levels__: When you cast this power using a power slot of 3rd level or higher, increase the size of the
net by <me-distance length="5" /> for each power slot about the 2nd.
