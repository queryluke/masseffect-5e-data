---
level: 6
klass: vanguard
subclass: void-fist
name: Enlightened Fist
mechanics:
  - type: attack-augment
    attackLimit:
      type: melee
      model: power
    augmentTypes: [damage]
    bonus:
      type: mod
      value: wis
  - type: global-note
    subType: action
    value: Biotic Punch
    moreInfo:
      model: class-features
      id: enlightened-fist
---
At 6th level, you can use the Biotic Punch cantrip as an attack. You add your Wisdom modifier to the damage of all melee power attacks.
