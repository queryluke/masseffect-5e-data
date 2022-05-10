---
name: Turbocharge
version: 1
level: 0
type: combat
classes:
  - soldier
tags:
  - buff
mechanics:
  - castingTime:
      length: 1
      unit: bonus_action
    attack: false
    dc: false
    damage: false
    conditions: false
    duration:
      length: 1
      unit: turn
    concentration: false
    range:
      short: 0
    detonates: false
    primes: false
    resource:
      reset: short
      max:
        type: flat
        value: 1
advancements:
  - id: improved-damage
    name: Improved Damage
    text: +2 damage with the turbocharged weapon
    mechanics: []
  - id: improved-accuracy
    name: Improved Accuracy
    text: The DC of the Dexterity saving throw is increased to 18
    mechanics: []
---
Activate a subroutine that temporarily vents weapon heat through your armor to improve thermal clip efficiency and
weapon damage. Until the end of your turn, a ranged weapon you're holding gains Burst Fire, the heat cost for making
a Burst Fire attack is reduced by 1 heat, and you may make a Burst Fire attack as an Attack action.

You must finish a short or long rest before using Turbocharge again.
