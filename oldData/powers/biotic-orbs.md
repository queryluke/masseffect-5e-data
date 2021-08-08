---
id: biotic_orbs
name: Biotic Orbs
level: 2
type: biotic
attackType:
- Ranged Attack
effect:
- damage
- buff
damageType:
- force
castingTime: Action
duration: 1 minute
concentration: true
distance:
  range: 90
  aoeType:
  aoeDistance:
detonates: x
primes:
availableClasses:
- adept
- vanguard
advancementOptions:
- name: Improved Orbs
  description: You may expend 2 orbs to cast a power using your highest available power slot.
- name: Retribution
  description: As a reaction to taking damage, you may expend all of your remaining biotic orbs. For each expended orb,
    make a ranged power attack on a target you can see within range. You can direct all attacks to hit one creature or several.
---
Summon 3 biotic orbs that float around you, fueling your biotic energies. As an action, you may expend an orb and make a
ranged power attack on a creature within <me-distance length="90" />. On a hit, deal force damage equal to 2d10 + your powercasting ability modifier.

As an action, you may expend 3 orbs to cast a power using your highest available power slot. Casting a power in this way
does not consume the power slot.

__At Higher Levels__: When you cast this power using a power slot of 3rd level or higher, the number of orbs increases by
2 for each slot level above the 2nd.
