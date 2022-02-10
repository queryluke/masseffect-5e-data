---
species:
  - hanar
mechanics:
  - type: natural-weapon
    replacesUnarmedStrike: true
    value:
      damageModOverride: noMod
      name: Tentacles
      type: natural-melee
      range: 5
      damage:
        dieCount: 1
        dieType: 8
        type: poison
      notes:
        - On a hit, DC {{ 8 + profBonus + conMod }} or poisoned for 1 minute
        - +1 to attack roll and DC for each additional tentacle used
      moreInfo:
        model: traits
        id: tentacles
---
