---
id: disrupt_biotics
name: Disrupt Biotics
level: 2
type: tech
attackType: []
effect:
- control
damageType: []
castingTime: Reaction, which you take when you see a creature casting a biotic power
duration: Instant
concentration: false
distance:
  range: 90
  aoeType:
  aoeDistance:
detonates:
primes:
availableClasses:
- engineer
- infiltrator
- sentinel
advancementOptions:
- name: Lockdown
  description: If you successfully disrupt the power, you overload the target's biotic
    implant and it cannot cast biotic powers until the end of your next turn.
- name: Psychic Strain
  description: If successfully disrupt the power, the target takes Xd10 psychic damage,
    where X is the level of the power. Targets take 1d6 psychic damage for disrupted cantrips.
---
Attempt to interrupt a creature in the process of casting a biotic power. If the creature is casting a power of 2nd level
or lower, its power fails and has no effect. If it is casting a power of 3rd level or higher, make an ability check
using your powercasting ability. The DC equals 10 + twice power's level. On a success, the creature's power fails and
has no effect.

__At Higher Levels__. When you cast this power using a power slot of 3rd level or higher, the interrupted power has no
effect if its level is less than or equal to the level of the power slot you used.
