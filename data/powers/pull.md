---
name: Pull
version: 1
level: 1
type: biotic
tags:
  - control
classes:
  - adept
  - sentinel
  - vanguard
  - explorer
mechanics:
  - castingTime:
      length: 1
      unit: action
    attack:
      type: ranged
      wp: power
      proficient: true
    dc: false
    damage: false
    duration:
      length: 1
      unit: round
    concentration: true
    range:
      short: 90
      aoe: false
    detonates: false
    primes: false
    conditions: [lifted]
  - duration:
      length: 1
      unit: minute
  - duration:
      length: 10
      unit: minute
  - duration:
      length: 30
      unit: minute
  - duration:
      length: 1
      unit: hour
advancements:
  - id: heavy-pull
    name: Heavy Pull
    text: You may target a Large or smaller creature or object.
    mechanics: []
  - id: grip
    name: Grip
    text: While maintaining this power, you may use your bonus action to increase pressure around the target, dealing 2d6 bludgeoning damage.
    mechanics:
      - damage:
        - dieCount: 2
          dieType: 6
          type: bludgeoning
---
Make a ranged power attack on a Medium or smaller creature or object within range. On a hit, you create a mass
effect field around the target and it becomes <me-condition id="lifted"/> <me-distance length="5" /> in the air until the end of your next turn.
While you maintain this power, as a bonus action, you can move the target up to <me-distance length="10" /> in any direction. If you move the
target further than <me-distance length="90" /> away from you, the power ends and the target falls to the ground.

__At Higher Levels__: When you cast this power using a power slot of 2nd level or higher, increase the duration.
1 minute at 2nd level, 10 minutes at 3rd level, and 1 hour at 4th level.
