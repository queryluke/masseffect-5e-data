---
name: Damping
version: 1
level: 1
type: tech
tags:
  - debuff
  - control
classes:
  - engineer
  - infiltrator
  - sentinel
mechanics:
  - castingTime:
      - length: 1
        unit: action
    attack: false
    dc:
      save: 'powercasting'
    damage: false
    duration:
      - length: 0
        unit: instant
    concentration: false
    range:
      short: 90
      aoe: false
    detonates: false
    primes: false
advancements:
  - id: cooldown
    name: Cooldown
    text: If creature that fails its saving throw casts a tech or biotic power, it cannot cast another tech or biotic power until the end of its next turn.
    mechanics: []
  - id: power-damping
    name: Power Damping
    text: Creatures have disadvantage on the saving throw against this power.
    mechanics: []

---
Target a creature you can see within range and cause interference with their biotic implant and omni-tool, reducing their
ability to use them effectively. The creature must make a saving throw using its powercasting ability or it suffers a penalty
to its next biotic or tech power. If the next power it casts requires an attack roll, it has disadvantage on the attack.
If the next power forces one or more creatures to make a saving throw, those creatures have advantage on the saving throw.

__At Higher Levels__. When you cast this power using a power slot of 2nd level or higher, you can affect one additional
creature for each slot level above 1st.
