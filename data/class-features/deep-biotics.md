---
level: 3
klass: explorer
subclass: path-of-eezo
mechanics:
  - type: model-choice
    label: 'Choose a Biotic Cantrip'
    model: powers
    options: true
    hide: true
    limits:
      - attr: level
        value: [0]
      - attr: classes
        value: [explorer]
      - attr: type
        value: [biotic]
  - type: global-note
    subType: power
    value: Deep Biotics
    moreInfo:
      model: class-features
      id: deep-biotics
name: Deep Biotics
---
At 3rd level, your brain is beginning to attune more finely to the Element Zero in your system. You gain another cantrip
slot that must be occupied by a Biotic Cantrip. When you use a Biotic Cantrip, you bump up the die by one.
A d12 instead gives the spell a +2 damage modifier per d12 rolled.
