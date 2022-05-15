---
level: 3
klass: soldier
subclass: gladiator
mechanics:
  - type: bonus-action
    damage:
      - type: temp
        bonus:
          type: progressive
          limit: soldier
          value:
            1: 5
            10: 10
            15: 15
    shortDesc: >-
      Gain {{ damage }} temporary hit points. Additionally, gain advantage on all weapon attack rolls until the end of your turn.
    resource:
      max:
        type: flat
        value: 3
name: Fighting Spirit
---
Starting at 3rd level, your intensity in battle can shield you and help you strike true. As a bonus action on
your turn, you can give yourself advantage on weapon attack rolls until the end of the current turn. When you do so,
you also gain 5 temporary hit points. The number of temporary hit points increases when you reach certain levels in this
class, increasing to 10 at 10th level and 15 at 15th level.

You can use this feature three times, and you regain all expended uses of it when you finish a long rest.
