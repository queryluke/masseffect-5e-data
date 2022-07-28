---
rarity: uncommon
type: armor
cost: 37500
manufacturer: batarian-state-arms
tags:
  - resistance
  - special
placement: chest
availability:
  - light
  - medium
  - heavy
name: Toxic Resistance
flavor: >-
  Specially-sealed body armor and biotoxin blood filters provide increased
  protection against radiation, gases, and a host of other toxins.
mechanics:
  - type: resistance
    value: acid
  - type: poison
    value: acid
  - type: saving-throw
    against: [poisoned]
    effect:
      type: advantage
---
Resistance to acid and poison damage. You have advantage on Constitution saving throws that would cause you to be poisoned.
