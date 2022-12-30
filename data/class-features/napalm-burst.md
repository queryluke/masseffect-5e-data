---
level: 7
klass: soldier
subclass: armiger
mechanics:
  - type: other
    name: Napalm Burst
    shortDesc: >-
      When you spend a unit of Fuel to use your Havoc Strike, you can spend an additional
      2 Fuel to have every creature in the radius of impact make a DC {{ dc }} Dexterity Saving throw
      or become Primed (fire) until the end of their next turn.
    dc:
      base: 8
      proficient: false
      save: dex
      bonus:
        type: resource
        value: armiger-fuel
        useMax: true
    resource:
      reset: short
      id: armiger-fuel
      max:
        type: resource
        value: armiger-fuel
        useMax: true
name: Napalm Burst
---
At 7th level, when you spend a unit of Fuel to use your Havoc Strike, you can spend an additional
2 Fuel to have every creature in the radius of impact make a Dexterity Saving throw
(DC= 8+ Proficiency+the modifier you chose at 3rd level) or become Primed (fire) until the end of their next turn.
