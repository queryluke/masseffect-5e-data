---
level: 1
klass: infiltrator
mechanics:
  - type: action
    shortDesc: Become invisible for 1 minute or until you make an attack, cast a power, use a grenade or mine, or fire a heavy weapon.
    resource:
      reset: short
      max:
        type: progressive
        limit: infiltrator
        value:
          1: 2
          6: 3
          11: 4
          18: 5
    progressionColumn:
      label: Tactical Cloak Uses
      values: [2,2,2,2,2,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5]
      order: 11
name: Tactical Cloak
---
As an action, you activate your tactical cloak, becoming <me-condition id="invisible"/>. Tactical cloak lasts 1 minute or
until you make an attack, cast a power, use a grenade or mine, or fire a heavy weapon.

Once you have used tactical cloak the maximum number of times for your Infiltrator level,
you must finish a short rest before you can use it again. You may use tactical cloak 2 times at 1st level, 3 at 6th, 4 at 11th,
and 5 at 18th.
