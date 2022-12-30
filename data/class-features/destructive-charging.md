---
level: 15
klass: soldier
subclass: holo-operative
mechanics:
  - type: other
    resource:
      reset: long
      max:
        type: proficiency
    damage:
      - dieType: 6
        dieCount: 2
        type: shields
        bonus:
          type: mod
          value: con
    shortDesc: >-
      When your hologram is destroyed because it took damage, you can recharge your
      shields by {{ damage }}. If this would bring you above your shield's max value, the
      overflowing shield points are instead transformed into temporary health points, which persist for 1 hour.
name: Destructive Charging
---
At 15th level, when your hologram is destroyed, you can recharge your shields by taking advantage of the freed up
RAM from your omni-tool. When your hologram is destroyed because it took damage, you can recharge your
shields by 2d6 + your Constitution modifier. If this would bring you above your shield's max value, the
overflowing shield points are instead transformed into temporary health points, which persist for 1 hour.

You can use this feature a number of times equal to your proficiency modifier, and regain all uses when you finish a long rest.
