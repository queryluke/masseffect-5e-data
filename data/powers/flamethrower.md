---
name: Flamethrower
level: 3
version: 1
type: tech
classes:
  - engineer
  - musician
  - infiltrator
  - sentinel
  - explorer
tags:
  - damage
mechanics:
  - castingTime:
      length: 1
      unit: action
    attack: false
    dc:
      base: 8
      proficient: true
      save: dex
    damage:
      - dieCount: 6
        dieType: 10
        type: fire
    conditions: false
    duration:
      length: 0
      unit: instant
    concentration: false
    range:
      short: 0
      aoe:
        type: cone
        size: 20
    detonates: false
    primes: fire
  - damage:
      - dieCount: 8
  - damage:
      - dieCount: 10
  - damage:
      - dieCount: 12
advancements:
  - id: concentrated-burn
    name: Concentrated Burn
    text: Increase the damage to d12 and the distance to <me-distance length="30" />, but the area-of-effect is now a <me-distance length="5" adj /> wide line instead of a cone.
    mechanics:
      - dieType: d12
        range:
          aoe:
            size: 30
            type: line
  - id: exhaust
    name: Exhaust
    text: The flames create a thick smoke in an <me-distance length="20" adj /> cube that must encompass the cone. The area is considered heavily obscured until the end of your next turn.
    mechanics: []
---
Overload your omni-tool's acetylene torch, spewing flames in front of you. Each creature within an <me-distance length="20" adj /> cone is
<me-condition id="primed" sub="fire"/> until the start of your next turn and must make a Dexterity saving throw. A creature
takes 6d10 fire damage on a failed save or half as much damage on a successful one.

At the start of your turn, you may spend your action and 1 additional tech point to continue casting this power. Your
movement speed is <me-distance length="5" /> while casting it in this manner. The power ends if you become incapacitated.

__At Higher Levels__: When you cast this power using a power slot of 4th level or higher, the damage increases by 2d10
for each slot level above 3rd.
