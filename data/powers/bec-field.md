---
id: bec_field
name: B.E.C. Field
createdBy: Chris Alley
level: 1
type: tech
attackType: []
effect:
- buff
damageType: []
castingTime: Action
duration: 1 hour
concentration: false
distance:
  range: self
  aoeType:
  aoeDistance:
detonates:
primes:
availableClasses:
- engineer
- infiltrator
advancementOptions:
- name: Reactive
  description: When you are hit by a ranged attack while the this power is active, you may use your reaction to deal the
    cold damage to a creature within <me-distance length="5" /> of you.
- name: Cold Aura
  description: While the BEC field is active, you are immune to the Frozen condition. Creatures that take damage from this power
    are primed (cold).
---
You generate a Bose-Einstein Condensate field around your armor that acts to entangle incoming attacks on a quantum level.
You gain 5 temporary hit points for the duration. If a creature hits you with a melee attack while you have these hit
points, the creature takes 5 cold damage.

__At Higher Levels__. When you cast this power using a power slot of 2nd level or higher, both the temporary
hit points and the cold damage increase by 5 for each slot.
