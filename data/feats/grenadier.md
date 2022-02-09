---
new: true
mechanics:
  - type: action
    name: Grenadier Attack (requires grenade)
    range:
      short: 30
      long: 60
    attack:
      proficient: true
      maxMod: [str,dex]
    damage:
      - dieCount: 1
        dieType: 4
        maxMod: [str,dex]
        type: bludgeoning
    notes:
      - On a hit, target has disadvantage on the grenade's saving throw.
---
