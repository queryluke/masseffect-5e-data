---
level: 18
klass: engineer
subclass: mastermind
mechanics:
  - type: reaction
    layout: simple
    dc:
      base: 8
      proficient: true
      bonus:
        type: powercastingMod
        value: engineer
    resource: {}
    shortDesc:  When you are targeted by a power, the creature must succeed on a powercasting check (DC {{ dc }}) or the power fails. If the power was 1st-level or higher, you copy a temporary version for 1 hour and can cast it with your tech points.
name: Power Steal
---
At 18th level, you gain the ability to clone power effects onto your omni-tool.

Immediately after a creature casts a power that targets you or includes you in its area of effect, you can use your
reaction to force the creature to make a saving throw with its powercasting ability modifier. The DC equals your power
save DC. On a failed save, you negate the power's effect on you and you copy a temporary version of the power onto
your omni-tool if it is at least 1st level and of a level you can cast (it does not have to be a tech power). For the
next 8 hours, you know the power and can cast it using your tech points. The creature can't cast that power until the
8 hours have passed.

Once you use this feature, you can't use it again until you finish a long rest.
