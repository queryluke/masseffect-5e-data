---
mechanics:
  - type: asi-choice
    limit: [str,con]
  - type: innate-strike-damage
    value: unarmed-strike
    damage:
      - dieType: 4
        dieCount: 1
        type: bludgeoning
        mod: str
  - type: bonus-action
    shortDesc: >-
      When you hit a creature with an unarmed strike or an improvised weapon on your turn,
      you can use a bonus action to attempt to grapple the target.
---
