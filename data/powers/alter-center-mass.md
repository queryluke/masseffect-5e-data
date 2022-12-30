---
name: Alter Center Mass
version: 1
level: 1
type: biotic
tags:
  - debuff
classes:
  - adept
  - sentinel
  - vanguard
  - explorer
reactionQualifier: false
mechanics:
  - castingTime:
      unit: action
    dc:
      save: con
    damage: false
    duration:
      length: 1
      unit: minute
    concentration: true
    range:
      short: 90
    detonates: false
    primes: false
advancements:
  - id: disorient
    name: Disorient
    text: >-
      Creatures that fail the saving throw become disoriented. Until the end of your next turn, attacks made against
      the creature have advantage and the creature can't take reactions.
    mechanics: []
  - id: debilitate
    name: Debilitate
    text: >-
      Creatures that fail the saving throw can barely move. Until the end of your next turn, the creature's
      speed becomes 0 and it automatically fails Dexterity saving throws.
    mechanics: []
---
Up to three creatures of your choice that you can see within range must make Constitution saving throws as you generate
minor mass effect fields that alter their center mass. Whenever a target that fails this saving throw makes an attack
roll or a saving throw before the power ends, the target must roll a d4 and subtract the number rolled from the attack
roll or saving throw.

__At Higher Levels__: When you cast this power using a power slot of 2nd level or higher, you can target two additional
creatures for each slot level above 1st.
