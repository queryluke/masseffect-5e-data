---
id: warp_cloud
name: Warp Cloud
createdBy: Chris Alley
level: 1
type: biotic
attackType: []
effect:
- damage
damageType:
- necrotic
castingTime: Action
duration: 1 minute
concentration: true
distance:
  range: 60
  aoeType: cube
  aoeDistance: 5
detonates:
primes: necrotic
availableClasses:
- adept
- vanguard
advancementOptions:
- name: Burst
  description: As a bonus action, you can end this power and force each creature within <me-distance length="5" /> of the cloud to make a
    Dexterity saving throw. A creature takes 4d4 force damage on a failed save or half as much on a successful one.
    This damage increases by 4d4 force damage per power level.
- name: Shift
  description: As a bonus action, you can move this cube of warp energy up to <me-distance length="10" /> in any direction you choose. It
    can pass through solid objects, but you can only control it's movement while you have line of sight.
---
You fill the air with a highly concentrated warp field <me-distance length="5" /> on each side at a point within range. A creature takes
4d4 necrotic damage when it enters the power area for the first time on a turn or starts its turn there. A creature
within the cloud is <me-condition id="primed" sub="necrotic"/>.

__At Higher Levels__. When you cast this power using a power slot of 2nd level or higher, the damage increases by 4d4
for each slot level above 1st.
