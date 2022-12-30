---
level: 15
klass: soldier
subclass: painkiller
mechanics:
  - type: saving-throw
    value: wis
  - type: other
    name: Won't Quit
    shortDesc: >-
      If you have less than half of your hit points remaining and have at
      least 1 hit point, at the beginning of your turn you regenerate {{ damage }}.
    damage:
      - dieType: 10
        dieCount: 1
        type: hp
        bonus:
          type: level
          value: soldier
          multiplier: 0.5
name: Won't Quit
---
You just don’t know when to quit. At 15th level, if you have less than half of your hit points remaining and have at
least 1 hit point, at the beginning of your turn you regenerate 1d10+half of your Soldier level.
You also gain proficiency in Wisdom saving throws.
