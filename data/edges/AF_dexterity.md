---
name: Dexterity
mechanics:
  - type: other
    name: Fuel
    resource:
      reset: short
      id: armiger-fuel
      max:
        type: multi
        value:
          - type: mod
            value: dex
          - type: proficiency
    moreInfo:
      model: class-features
      id: fuel
type: armiger-fuel
---
