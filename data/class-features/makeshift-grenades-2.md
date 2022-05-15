---
level: 15
klass: soldier
subclass: havoc
name: Makeshift Grenades
mechanics:
  - type: bonus-action
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
    shortDesc: Create one of your makeshift grenades at Mark {{ dc }}. You may use the grenade as an attack.
---
At 15th level, you can have 4 grenades programmed into your Omni-tool at once.

In addition, you can create a grenade with this ability as a bonus action and you can use a grenade as an attack action.
