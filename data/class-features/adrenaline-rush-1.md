---
level: 2
klass: soldier
mechanics:
  - type: other
    shortDesc: >-
      Take one additional action this turn on top of your regular action and a possible
      bonus action.
    resource:
      reset: short
      max:
        type: progressive
        limit: soldier
        value:
          2: 1
          17: 2
name: Adrenaline Rush
---
You can inject yourself with a shot of adrenaline, pushing yourself beyond your normal limits for a moment.
At 2nd level, you can take one additional action this turn on top of your regular action and a possible
bonus action.

Once you use this feature, you must finish a short or long rest before you can use it again.
