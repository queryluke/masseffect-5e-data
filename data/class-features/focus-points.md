---
level: 3
klass: vanguard
subclass: cardinal
mechanics:
  - type: other
    name: Focus Points
    resource:
      reset: long
      label: 'Resets to 0 on long rest'
      resetTo: min
      max:
        type: progressive
        limit: vanguard
        value:
          3: 2
          6: 3
          10: 4
          14: 5
          18: 6
      id: cardinal-focus-points
      shortDesc: Focus Points are used for your Cardinal Blades features.
  - type: bonus-action
    shortDesc: >-
      Convert up to {{ conMod }} Barrier Tick(s) into Focus Points
name: Focus Points
---
Through their meditation, their mental focus allows them to channel their own energy into offence and allow for
further more advanced abilities as they grow and master their gifts.

Starting at 3rd level, you gain a new resource called Focus Points that start at 0. Focus Points are used for your
Cardinal Blades and other abilities at later levels.

As a Bonus Action, you may convert a number of Barrier Ticks into Focus Points up to your Constitution Modifier.

Your maximum Focus Points start at 2. At 6th level, this maximum increases to 3, then to 4 at 10th, 5 at 14th and 6
at 18th level.

Your focus Points reset to 0 on a long rest.
