---
level: 15
klass: soldier
subclass: armiger
mechanics:
  - type: other
    name: Afterburner
    shortDesc: >-
      Spend 1 Fuel double your speed until the end of your round.
    resource:
      reset: short
      id: armiger-fuel
      max:
        type: resource
        value: armiger-fuel
        useMax: true
  - type: reaction
    name: Afterburner
    shortDesc: >-
      Spend 2 fuel to automatically succeed on a Dexterity saving throw.
    resource:
      reset: short
      id: armiger-fuel
      max:
        type: resource
        value: armiger-fuel
        useMax: true
name: Afterburner
---
At 15th level, you can spend 1 unit of Fuel to double your speed until the end of your round. Alternatively, as a
reaction when you make a Dexterity saving throw, you can use 2 units of Fuel to automatically pass the saving throw.
