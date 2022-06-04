---
name: Beehive
version: 1
level: 0
type: combat
tags:
  - damage
classes:
  - infiltrator
  - soldier
mechanics:
  - castingTime:
      length: 1
      unit: attack
    attack: false
    dc:
      save: dex
      mod: dex
      proficient: true
    damage:
      - dieCount: 3
        dieType: 6
        type: piercing
    duration:
      length: 0
      unit: instant
    concentration: false
    range:
      short: 0
      aoe:
        type: cone
        size: 15
    detonates: false
    primes: false
    resource:
      reset: short
      id: beehive
  - damage:
      - dieCount: 5
  - damage:
      - dieCount: 7
  - damage:
      - dieCount: 9
advancements:
  - id: anti-flesh
    name: Anti-flesh
    text: Deals twice as much damage to organic creatures with no shield points.
    mechanics: []
  - id: remote-deploy
    name: Remote Deploy
    text: As an action, you can set up your Beehive in a separate location. Once it is deployed you can use an Attack action to fire it. You can also fire it as a reaction whenever a creature enters this power's cone.
    mechanics:
      - altCasting:
          - length: 1
            unit: action
          - length: 1
            unit: reaction
            reaction: After using remote deploy, when a creature enters this power's cone
---
Draw and fire your antipersonnel cannon, colloquially called "the beehive". It ejects superheated shrapnel in a <me-distance length="15" adj/> cone,
originating from you. Each creature caught in the blast must make Dexterity saving throw. The DC of this saving throw is
8 + your proficiency bonus + your Dexterity modifier. On a failed save, a creature takes 3d6 piercing damage or half as
much damage on a successful one.

You must spend a short or long rest reconfiguring the cannon to use it again.

This feature's damage increases by 2d6 when you reach 5th level (5d6), 11th level (7d6), 17th level (9d6)
