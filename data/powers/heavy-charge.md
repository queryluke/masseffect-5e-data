---
name: Heavy Charge
version: 1
level: 2
type: biotic
classes:
  - vanguard
tags:
  - damage
  - movement
mechanics:
  - castingTime:
      length: 1
      unit: action
    attack: false
    dc:
      base: 8
      proficient: true
      save: dex
    damage:
      - dieCount: 4
        dieType: 10
        type: force
    conditions: false
    duration:
      length: 0
      unit: instant
    concentration: false
    range:
      short: 90
      aoe:
        type: sphere
        size: 10
    detonates: true
    primes: false
  - damage:
      - dieCount: 6
  - damage:
      - dieCount: 8
  - damage:
      - dieCount: 10
advancements:
  - id: stutter-step
    name: Stutter Step
    text: This power's range is decreased to <me-distance length="30" />, but you may cast this power twice as part of the same action, choosing a different target for each cast. Each cast consumes power slots as normal.
    mechanics:
      - range:
          short: 30
  - id: heavy-step
    name: Heavy Step
    text: You can transport Large or smaller creatures and objects as long as the total weight does not exceed four times your carrying capacity.
    mechanics: []
---
Choose a creature or object within range and use the target's mass to pull yourself to its location
(this movement does not provoke opportunity attacks). Each creature within <me-distance length="10" /> of the target must make Dexterity saving
throw, taking 4d10 force damage on a failed save, or half as much on a successful one.

You may transport any number of creatures or objects with you to the target location. To
do so, each creature or object must be within <me-distance length="5" /> of you when you cast this power and the total weight of all creatures and
objects cannot exceed twice your carrying capacity. A creature transported this way must be willing and of your
size or smaller and the target location must have an unoccupied space for the creature to be transported to. A creature or
object brought with you automatically passes the Dexterity saving throw and takes no damage.

__At Higher Levels__. When you cast this power using a power slot of 3rd level or higher, the damage increases by 2d10
for each slot level above 2nd.
