---
name: Energy Pulse
species: [hardware-loki]
mechanics:
  - type: natural-weapon
    value:
      damageModOverride: noMod
      type: natural-melee
      name: Energy Pulse
      notes:
        - On a hit, target can't take reactions until the start of its next turn
      properties: []
      range: 5
      damage:
        dieCount: 1
        dieType: 8
        type: lightning
      moreInfo:
        model: traits
        id: energy-pulse
---
Your hands can discharge electrical pulses and are considered natural weapons, which you can use to make unarmed strikes.
If you hit with them, you can deal 1d8 lightning damage instead of the bludgeoning damage normal for an unarmed strike.
In addition, a target hit by this attack can’t take reactions until the start of its next turn.
