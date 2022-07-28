---
rarity: spectre
type: armor
cost: 25000
manufacturer: jormungand-technology
tags:
  - special
placement: arms
availability:
  - light
  - medium
  - heavy
name: Personal Disruptor Torpedoes
flavor: >-
  A "micro gravitic" personal weapon that effectively fires small disruptor
  torpedoes.
mechanics:
  - type: action
    name: Personal Disruptor Torpedoes
    range:
      short: 90
      aoe:
        type: sphere
        size: 10
    dc:
      save: dex
      base: 15
      proficient: false
    damage:
      - dieCount: 3
        dieType: 12
        type: force
    resource:
      reset: short
---
Choose a target location within <me-distance length="90" />. Creatures within a
<me-distance length="10" /> of the target must make a DC 15 Dexterity saving throw. On a failed save, a creature
takes 3d12 force damage, or have as much damage on a successful one. You must finish a short rest,
allowing the weapon to recharge before using it again.
