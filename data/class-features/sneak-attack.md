---
level: 1
klass: infiltrator
mechanics:
  - type: conditional-damage
    attackLimit:
      model: weapon
    bonus:
      type: dice
      value:
        dieType:
          type: flat
          value: 6
        dieCount:
          type: level
          value: infiltrator
          multiplier: 0.5
          round: up
    progressionColumn:
      label: Sneak Attack Damage
      values: [1d6,1d6,2d6,2d6,3d6,3d6,4d6,4d6,5d6,5d6,6d6,6d6,7d6,7d6,8d6,8d6,9d6,9d6,10d6,10d6]
      order: 1
---
