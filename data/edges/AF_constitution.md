---
name: Constitution
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
            value: con
          - type: proficiency
    moreInfo:
      model: class-features
      id: fuel
type: armiger-fuel
---
