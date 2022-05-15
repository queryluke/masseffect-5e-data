---
name: Sabotage
version: 1
level: 1
type: tech
classes:
  - engineer
  - infiltrator
tags:
  - debuff
  - control
mechanics:
  - castingTime:
      length: 1
      unit: action
    attack: false
    dc:
      base: 8
      proficient: true
      save: int
    damage: false
    conditions: false
    duration:
      length: 1
      unit: hour
    concentration: false
    range:
      short: 90
    detonates: false
    primes: false
advancements:
  - id: primed
    name: Primed
    text: After the weapon fires, it vents its heat and the attacking creature becomes primed (fire) until the start of its next turn.
    mechanics: []
  - id: backfire
    name: Backfire
    text: After the weapon fires, it deals 2d6 thunder damage to the attacking creature.
    mechanics:
      - damage:
          - dieCount: 2
            dieType: 6
            type: thunder
---
Target a ranged weapon you can see within range and sabotage its internal systems. The next attack made with the target
weapon has disadvantage.

Casting sabotage does not break tactical cloak, and creatures are unaware of the casting of this power.

If the weapon is integrated into a synthetic creature, such as an atlas mech's mass accelerator cannon or a drone's particle rifle,
this power has no effect unless the creature fails an Intelligence saving throw against your powercasting DC. Whether or not the synthetic creature
succeeds on this saving throw, it becomes aware that it has been targeted by a power.

__At Higher Levels__: When you cast this power using a power slot of 2nd level or higher, you can target 2 additional
weapons for each power slot above the 1st.
