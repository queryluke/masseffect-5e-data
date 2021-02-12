---
id: ai_hacking
name: AI Hacking
level: 3
type: tech
attackType:
- INT Save
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
- engineer
- infiltrator
advancementOptions:
- name: Total Control
  description: You take the hacked synthetic's action. You may use its powers and
    abilities.
- name: Power Down
  description: When you have a creature hacked, you may use your action to attempt to shut it down. To do so, make
    an Intelligence check contested by the hacked creature's Intelligence check. If you win the contest, the creature becomes
    incapacitated for 1 hour and the power ends.
---
Target a synthetic creature within <me-distance length="90" />. It must succeed on an Intelligence saving throw or it becomes Hacked (it is considered
<me-condition id="charmed"/> and can't use powers or abilities). If you or creatures that are friendly to you are fighting it, it has advantage
on the saving throw.

On its turn, the hacked creature attacks the closest creature hostile to the power caster, making a ranged weapon
attack or melee attack if it does not have a weapon. If there are no hostile creatures within range, the hacked
creature uses its turn to dash towards the closest hostile creature.

Each time the hacked creature takes damage, it makes a new Intelligence saving throw against the power. If the saving throw
succeeds, the power ends.

__At Higher Levels__. When you cast this power using a 4th-level power slot, the duration is concentration, up to 10
minutes. When you use a 5th-level power slot, the duration is concentration, up to 1 hour.
