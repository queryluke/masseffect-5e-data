---
level: 9
klass: explorer
subclass: path-of-cyber
mechanics:
  - type: shields
    capacity:
      type: mod
      value: int
    regen:
      type: mod
      value: int
  - type: reaction
    name: Router Tech
    shortDesc: >-
      Whenever an ally within <me-distance length="25" /> takes damage to their shields, you can use your
      reaction to immediately boost their shield capacitors, fully restoring their shields.
    resource:
      id: router-tech
      reset: long
      max:
        type: mod
        value: int
name: Router Tech
---
At 9th level your Maximum Shields and Shield Regen increase by a value equal to your Intelligence modifier.
In addition, whenever an ally within <me-distance length="25" /> takes damage to their shields, you can use your
reaction to immediately boost their shield capacitors, fully restoring their shields. You can use this feature a
number of times equal to your Intelligence modifier (min. of 1) and regain all expended uses on a long rest.
