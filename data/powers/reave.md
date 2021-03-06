---
id: reave
name: Reave
level: 1
type: biotic
attackType:
- Ranged Attack
effect:
- damage
- debuff
damageType:
- necrotic
castingTime: Action
duration: Instant
concentration: false
distance:
  range: 150
  aoeType:
  aoeDistance:
detonates:
primes: necrotic
availableClasses:
- adept
advancementOptions:
- name: Area Reave
  description: The orb becomes unstable and explodes when it reaches the target. Hit
    or miss, the target and each creature within <me-distance length="5" /> of it must succeed on a Constitution
    saving throw or take 2d6 necrotic damage. This damage increases by 2d6 for each
    power slot level above the first.
- name: Immediate Detonation
  description: When you hit a target with reave, it detonates the primed condition
    at the end of your turn.
---
Hurl an orb of dark energy at one creature within range. Make a range power attack against the target. On a hit, you
deal 2d10 necrotic damage and the target becomes <me-condition id="primed" sub="necrotic"/> until the end of your next turn.
The target also has disadvantage on their next attack, ability check, or saving throw. This disadvantage lasts one minute
or until the target becomes incapacitated.

__At Higher Levels__: When you cast this power using a power slot of 2nd level or higher, increase the damage by 2d10
for each level above the 1st.
