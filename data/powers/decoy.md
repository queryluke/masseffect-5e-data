---
name: Decoy
version: 1
level: 1
type: tech
tags:
  - control
classes:
  - engineer
  - infiltrator
mechanics:
  - castingTime:
      - length: 1
        unit: action
    attack: false
    dc: false
    damage: false
    duration:
      - length: 1
        unit: minute
    concentration: false
    range:
      short: 30
      aoe: false
    detonates: false
    primes: false
advancements:
  - id: explosive
    name: Explosive
    text: As an action, you can detonate your Decoy. Each creature within 4m of the decoy must make a Dexterity saving throw. On a failed save, a creature takes 3d6 thunder damage or half as much on a successful one.
    mechanics:
      - dc:
          save: dex
        damage:
          - dieCount: 3
            dieType: 6
            type: thunder
  - id: improved-decoy
    name: Improved Decoy
    text: Your decoy becomes so life-like that creatures have disadvantage on the Wisdom (Perception) check.
    mechanics: []
---
Summon a holographic copy of yourself at a location within range. Until the power ends, the decoy moves with you and
mimics your actions. You can use your action to dismiss the decoy. Each time a creature targets you with an attack
during the power's duration, it must first make a Wisdom (Perception) check. On a failure, a creature attacks
the decoy. On a success, the creature ignores the decoy, attacks you, and no longer needs to pass the Wisdom check to
target you.
