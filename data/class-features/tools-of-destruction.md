---
level: 3
klass: explorer
subclass: path-of-war
mechanics:
  - type: model-choice
    label: 'Choose a Combat Cantrip'
    model: powers
    options: true
    hide: true
    limits:
      - attr: level
        value: [0]
      - attr: classes
        value: [explorer]
      - attr: type
        value: [combat]
  - type: global-note
    subType: power
    value: 2x Cantrip Charges
    moreInfo:
      model: class-features
      id: tools-of-destruction
name: Tools of Destruction
---
At 3rd level, your systems are focused on combat. You gain another cantrip slot that must be occupied by a Combat
Cantrip. You double the uses of your Combat Cantrips before needing to recharge them.
