---
level: 3
klass: soldier
subclass: havoc
name: Makeshift Grenades
mechanics:
  - type: action
    layout: simple
    resource:
      displayType: omni-gel
      reset: 'off'
      label: 'omni-gel'
    dc:
      base: 0
      proficient: false
      bonus:
        type: level
        value: soldier
        multiplier: 0.3333
        min: 1
    shortDesc: Create and fire one of your makeshift grenades at Mark {{ dc }}
---
When you reach 3rd level, you can program your omni-tool to transform omni-gel into grenades. Choose two grenades from the grenade
list. As an action, you can spend 1 omni-gel to create and use a grenade of that type. The Mark of the grenade you create
is equal to your soldier level divided by 3 (rounded down).

You can spend 8 hours of programming to exchange a selected grenade with a different one.
