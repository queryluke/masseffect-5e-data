---
name: Phase Body
level: 6
klass: adept
subclass: phasic
mechanics:
  - type: reaction
    name: Phase Body
    damage:
      - dieCount: 1
        dieType: 6
        label: 'Phase Die'
    resource:
      id: phase-body
      reset: long
      max:
        type: mod
        value: wis
    shortDesc: >-
      If your barrier is up and you would take damage from an area of effect power or an attack, roll a d6.
      On a roll of 4 or more, you avoid the damage completely.
---
At 6th level, you gain a special reaction you can use only when your barrier is up. If you would take damage
from an area of effect power or an attack, you can use your reaction to roll 1d6. If you roll a 4 or more,
you avoid the damage completely. You can use this reaction a number of times equal to your
Wisdom modifier, and regain all uses on a long rest.
