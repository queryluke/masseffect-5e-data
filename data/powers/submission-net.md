---
name: Submission Net
version: 1
level: 2
type: tech
classes:
  - engineer
  - infiltrator
  - sentinel
tags:
  - control
mechanics:
  - castingTime:
      length: 1
      unit: action
    attack: false
    dc:
      base: 8
      proficient: true
      save: dex
    damage: false
    conditions: [restrained]
    duration:
      length: 1
      unit: minute
    concentration: false
    range:
      short: 90
      aoe:
        type: cylinder
        size: 10
    detonates: false
    primes: false
    notes:
      - 1d6 lightning dmg on failed STR save to escape
  - range:
      aoe:
        size: 15
  - range:
      aoe:
        size: 20
  - range:
      aoe:
        size: 25
  - range:
      aoe:
        size: 30
advancements:
  - id: electrified-net
    name: Electrified Net
    text: If you have a submission net deployed, you can use your bonus action to send electric currents through it. Each creature within the net takes 2d6 lightning damage.
    mechanics:
      - altCasting:
          - length: 1
            unit: bonus_action
        damage:
          - dieCount: 2
            dieType: 6
            type: lightning
  - id: anti-tech
    name: Anti-Tech
    text: If a creature you can see begins to cast a tech power, you can use your reaction to cast submission net.
    mechanics:
      - altCasting:
          - length: 1
            unit: reaction
            reaction: when a creature you see casts a tech power
---
Shoot a swarm of miniature pylons to a target location within range. Each creature within a <me-distance length="10" adj />-radius,
<me-distance length="10" adj />-high cylinder of the target
location must make a Dexterity saving throw. Any creature that fails the saving throw is trapped in an electrified net,
becoming <me-condition id="restrained"/> and cannot cast tech powers.

Until the power ends, the area is considered difficult terrain. A creature that enters the cylinder for the first time
on its turn or ends its turn there must also make the Dexterity saving throw.

A creature restrained by submission net may use its action to make a Strength (Athletics) check against your power save
DC to escape the net. On each attempt, the creature takes 1d6 lightning damage as it struggles against the net. On a
success, the creature is no longer restrained.

__At Higher Levels__: When you cast this power using a power slot of 3rd level or higher, increase the radius of the
net by <me-distance length="5" /> for each power slot about the 2nd.
