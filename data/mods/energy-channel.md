---
rarity: spectre
type: weapon
cost: 32000
manufacturer: ''
tags:
  - extra_damage
  - special
placement: strike
availability:
  - melee
name: Energy Channel
flavor: Divert power from your kinetic barrier into an electric discharge.
mechanics:
  - type: attack-augment
    attackLimit:
      model: weapon
    augmentTypes: [notes]
    notes:
      - type: tooltip
        text: +5 lightning, regen 5
        tooltipText: 'Hit: deal 5 additional lightning damage and regain 5 shield points. Requires at least 1 shield point'
---
When you hit with a melee attack with this weapon, you may deal 5 additional lightning damage and regain 5 shield points. You cannot use this if you have 0 shield points.
