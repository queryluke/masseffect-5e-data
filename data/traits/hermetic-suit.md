---
species:
  - quarian
mechanics:
  - type: resistance
    damageType: poison
    note: while within your hermetic suit
  - type: resistance
    damageType: necrotic
    note: while within your hermetic suit
  - type: condition-immunity
    condition: false
    note: immune to disease while within your hermetic suit
  - type: action
    resource:
      displayType: counter
      reset: off
      max:
        type: omni-gel
  - type: starting-equipment
    equipmentType: omni-gel
    value: 3
---
