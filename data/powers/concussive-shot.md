---
name: Concussive Shot
version: 1
level: 0
type: combat
tags:
  - damage
  - buff
classes:
  - soldier
mechanics:
  - castingTime:
      length: 1
      unit: attack
    attack: false
    dc:
      save: str
      mod: dex
      proficient: true
    damage:
      - dieCount: 1
        dieType: 8
        type: bludgeoning
    duration:
      length: 0
      unit: instant
    concentration: false
    range:
      short: 0
    detonates: true
    primes: false
    resource:
      reset: short
      max:
        type: flat
        value: 3
  - damage:
      - dieCount: 2
    resource:
      max:
        value: 4
  - damage:
      - dieCount: 3
    resource:
      max:
        value: 5
  - damage:
      - dieCount: 4
    resource:
      max:
        value: 6
advancements:
  - id: stunning-shot
    name: Stunning Shot
    text: A creature hit by concussive shot must make a Constitution saving throw instead of a Strength saving throw. On a failed save, the creature is stunned until the end of its next turn.
    mechanics:
      - dc:
          save: con
  - id: improved-shot
    name: Improved shot
    text: Increase the bonus damage of concussive shot to d12.
    mechanics:
      - damage:
          - dieType: 12
---
Whenever you make a ranged weapon attack, you can expend a concussive shot charge to load a specialized thermal clip into the weapon. When you do so, the ranged attack gains advantage. If the attack is successful, it deals an additional 1d8 bludgeoning damage and medium-sized or smaller creatures must pass a Strength saving throw (DC 8 + proficiency bonus + DEX modifier) or become prone.

You have 3 charges of Concussive Shot. You regain all of your charges when you finish a short rest.

The damage increases by 1d8 and charges increase by 1 when you reach the 5th level (2d8 and 4 charges), 11th level (3d8 and 5 charges) and 17th level (4d8 and 6 charges).
