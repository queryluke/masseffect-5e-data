---
name: Disrupt Biotics
version: 1
level: 2
type: tech
tags:
  - control
classes:
  - engineer
  - infiltrator
  - sentinel
  - explorer
mechanics:
  - castingTime:
      length: 1
      unit: reaction
      reaction: which you take when you see a creature casting a biotic power
    attack: false
    dc: false
    damage: false
    conditions: false
    duration:
      length: 1
      unit: instant
    concentration: false
    range:
      short: 90
      aoe: false
    detonates: false
    primes: false
advancements:
  - id: lockdown
    name: Lockdown
    text: If you successfully disrupt the power, you overload the target's biotic implant and it cannot cast biotic powers until the end of your next turn.
    mechanics: []
  - id: psychic-strain
    name: Psychic Strain
    text: If you successfully disrupt the power, the target takes Xd10 psychic damage, where X is the level of the power. Targets take 1d6 psychic damage for disrupted cantrips.
    mechanics: []
---
Attempt to interrupt a creature in the process of casting a biotic power. If the creature is casting a power of 2nd level
or lower, its power fails and has no effect. If it is casting a power of 3rd level or higher, make an ability check
using your powercasting ability. The DC equals 10 + twice power's level. On a success, the creature's power fails and
has no effect.

__At Higher Levels__. When you cast this power using a power slot of 3rd level or higher, the interrupted power has no
effect if its level is less than or equal to the level of the power slot you used.
