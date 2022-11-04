---
rarity: uncommon
type: weapon
cost: 10000
manufacturer: ''
tags:
  - melee_attacks
placement: barrel
availability:
  - assault_rifle
name: Omni-Blade Attachment
flavor: Attach an omni-blade (bayonet) to the weapon.
mechanics:
  - type: natural-weapon
    replacesUnarmedStrike: false
    value:
      name: Omni-blade Attachment
      noMod: false
      type: natural-melee
      damage:
        dieCount: 1
        dieType: 8
        type: piercing
      range:
        short: 5
      properties: [finesse]
      moreInfo:
        model: mods
        id: omni-blade-attachment
---
In addition to its other properties, this weapon is also considered a melee weapon. It has the finesse property and successful melee attacks deal 1d8 piercing damage.
