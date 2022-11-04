---
rarity: rare
type: weapon
cost: 25000
manufacturer: ''
tags:
  - melee_attacks
placement: barrel
availability:
  - heavy_pistol
  - smg
name: Stunner
flavor: Small attachment to muzzle, causing shock damage to meleed targets.
mechanics:
  - type: natural-weapon
    replacesUnarmedStrike: false
    value:
      name: Stunner
      noMod: false
      type: natural-melee
      damage:
        dieCount: 1
        dieType: 6
        type: lightning
      range:
        short: 5
      properties: []
      notes:
        - 'Hit: auto-fails CON save to maintain powers'
      moreInfo:
        model: mods
        id: stunner
---
In addition to its other properties, this weapon is also considered a melee weapon. Successful melee attacks deal 1d6 lightning damage and if the target is maintaining a concentration power it automatically fails its saving throw to maintain the power.
