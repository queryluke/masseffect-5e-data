---
level: 14
klass: vanguard
subclass: void-fist
name: Event Horizon
mechanics:
  - type: global-note
    subType: action
    value: Event Horizon
    moreInfo:
      model: class-features
      id: event-horizon
  - type: saving-throw
    value: [str, dex, con, cha, wis, int]
    effect:
      type: bonus
      bonus:
        type: mod
        value: cha
---
At 14th level, your biotics emanate in a field around you. The terrain in a <me-distance length="15" adj /> radius
around you is considered difficult terrain to your enemies. In addition, while you do not
have any armor, you add your Charisma modifier to all of your saving throws.
