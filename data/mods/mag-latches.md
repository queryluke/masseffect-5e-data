---
rarity: rare
type: armor
cost: 50000
manufacturer: any
tags:
  - special
placement: legs
availability:
  - light
  - medium
  - heavy
name: Mag Latches
flavor: Powerful magnets keep you grounded.
mechanics:
  - type: condition-immunity
    value: lifted
    note: when you are on a metal surface
  - type: saving-throw
    against: [lifted]
    effect:
      type: advantage
---
If you are standing on a metal surface, you are immune to being lifted. Otherwise, if you would make a saving throw against being lifted, you have advantage.
