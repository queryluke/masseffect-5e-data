---
level: 10
klass: sentinel
subclass: bastion
name: Tactical Focus Range
mechanics:
  - type: augment
    value:
      model: tactical-focus
      id: bastion-tactics
      limit: [bonus-action, reaction]
    merge:
      range:
        aoe:
          size: 30
---
At 10th level, your tactical focus increases to <me-distance length="30" /> per side.
