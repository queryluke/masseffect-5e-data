---
id: dominate
name: Dominate
level: 3
type: biotic
attackType:
- WIS Save
effect:
- control
damageType: []
castingTime: Action
duration: 1 minute
concentration: true
distance:
  range: 90
  aoeType:
  aoeDistance:
detonates:
primes:
availableClasses:
- adept
advancementOptions:
- name: Total Control
  description: You take the dominated creature's action. You may use its powers and
    abilities.
- name: Damage
  description: While the creature is dominated, it takes 4d6 psychic damage at the end of its turn. This damage
    bypasses shields and does not proc an opportunity to end Dominate.
---
Target an organic creature within <me-distance length="90" />. It must succeed on a Wisdom saving throw or it becomes Dominated (it is considered
<me-condition id="charmed"/> and can't use powers or abilities). If you or creatures that are friendly to you are fighting it, it has advantage
on the saving throw.

On its turn, the dominated creature attacks the closest creature hostile to the power caster, making a ranged weapon
attack or melee attack if it does not have a weapon. If there are no hostile creatures within range, the dominated
creature uses its turn to dash towards the closest hostile creature.

Each time the dominated creature takes damage, it makes a new Wisdom saving throw against the power. If the saving throw
succeeds, the power ends.

__At Higher Levels__. When you cast this power using a 4th-level power slot, the duration is concentration, up to 10
minutes. When you use a 5th-level power slot, the duration is concentration, up to 1 hour.
