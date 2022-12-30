---
level: 7
klass: tracker
subclass: bloodhound
mechanics:
  - type: other
    dc:
      base: 8
      proficient: true
      bonus:
        type: powercastingMod
        value: tracker
      save: dex
    shortDesc: >-
      When you hit a creature with an attack while you a hidden, it must succeed on a Dexterity saving throw
      or have its speed reduced to 0 until the start of its next turn.
    resource:
      displayType: checkbox
      reset: short
      max:
        type: proficiency
name: Shot in the Heel
---
Starting at 7th level, you gain the ability to stop your target in its tracks.

When you hit a creature with an attack while you are hidden, that creature must make a Dexterity saving
throw against your powersave DC. On a fail, that creature's movement is reduced to 0 until the start of
its next turn. You can use this ability a number of times equal to your proficiency bonus,
and regain uses at the end of a short rest or long rest.
