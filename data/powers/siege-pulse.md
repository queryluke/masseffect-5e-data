---
name: Siege Pulse
version: 1
level: 0
type: combat
classes:
  - soldier
  - vanguard
tags:
  - damage
  - control
mechanics:
  - castingTime:
      length: 1
      unit: action
    attack: false
    dc:
      base: 8
      proficient: false
      save: con
    damage:
      - dieCount: 2
        dieType: 8
        type: psychic
    conditions: [deafened,stunned]
    duration:
      length: 0
      unit: instant
    concentration: false
    range:
      short: 0
      aoe:
        type: sphere
        size: 10
    detonates: false
    primes: false
    resource:
      reset: short
      max:
        type: flat
        value: 1
  - damage:
      - dieCount: 3
  - damage:
      - dieCount: 4
  - damage:
      - dieCount: 5
advancements:
  - id: improved-pulse
    name: Improved Pulse
    text: Add your Constitution modifier to the DC of the saving throw as you increase the frequency of the pulse to a level you can barely withstand.
    mechanics:
      - dc:
          proficient: true
          mod: con
  - id: lingering-pulse
    name: Lingering Pulse
    text: Each creature that takes psychic damage from siege pulse has disadvantage on its melee or ranged attack rolls until the start of your next turn.
    mechanics: []
---
Spend 5 shield points as you overload your shield capacitors causing a loud, kinetic wave to erupt in a <me-distance length="10" adj/>-radius
sphere centered on you. Each creature within the sphere becomes <me-condition id="deafened"/> and must
make a Constitution saving throw (DC 8 + proficiency bonus). On a failed save, a creature takes
2d8 psychic damage and is <me-condition id="stunned"/> until the end of your next turn. On a successful save, a creature
takes half as much damage. Synthetic creatures have advantage on this saving throw.

The first time you use siege pulse, your armor suffers no adverse effect. If you use this power again before you
finish a short rest, roll a d20. On a 5 or lower you shields overload. You lose
all shield points, take 2d12 lightning damage, and cannot gain shield points unless you repair your armor. Each time you
use this feature again before finishing a short rest, you suffer a -5 penalty to the roll.

This feature's psychic damage increases by 1d8 when you reach 5th level (3d8), 11th level (4d8), 17th level (5d8).
