---
name: Incinerate
version: 1
level: 1
type: tech
tags:
  - damage
classes:
  - engineer
  - infiltrator
  - sentinel
  - tracker
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
    damage:
      - dieCount: 2
        dieType: 10
        type: fire
    duration:
      length: 0
      unit: instant
    concentration: false
    range:
      short: 120
    primes: fire
    detonates: true
  - damage:
      - dieCount: 4
  - damage:
      - dieCount: 6
  - damage:
      - dieCount: 8
  - damage:
      - dieCount: 10
  - damage:
      - dieCount: 12
advancements:
  - id: frozen-combo
    name: Frozen Combo
    text: When you hit a creature or object with incinerate, if the target is primed cold, you deal a critical hit.
    mechanics: []
  - id: radial-blast
    name: Radial Blast
    text: On a miss, the target makes a Dexterity saving throw. On a failed save, the target takes half damage.
    mechanics: []
---
Hurl a high-explosive, plasma round at a creature or object within range. Make a ranged power attack against the target.
On a hit, the target is <me-condition id="primed" sub="fire"/> until the end of your next turn and takes 2d10 fire damage.
A flammable object hit by this power ignites if it isn't being worn or carried.

__At Higher Levels__: When you cast this power using a power slot of 2nd level or higher, the damage increases
by 2d10 for each slot level above 1st.
