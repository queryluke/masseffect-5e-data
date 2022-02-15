---
mechanics:
  - type: asi
    ability: cha
    amount: 1
  - type: action
    resource:
      reset: short
    range:
      short: 0
      aoe:
        type: sphere
        size: 20
    dc:
      base: 8
      proficient: true
      mod: cha
      save: wis
    shortDesc: >-
      Each creature of your choice within <me-distance length="20" abbr /> must succeed on a DC {{ dc }} WIS saving throw
      or suffer disadvantage on attack rolls against creatures other than you until it makes an attack against you.
new: true
---
