---
level: 9
klass: soldier
mechanics:
  - type: other
    shortDesc: Reroll a saving throw you fail.
    resource:
      max:
        type: progressive
        limit: soldier
        value:
          9: 1
          13: 2
          17: 3
name: Indomitable
---
At 9th level, you can reroll a saving throw that you fail. If you do so, you must use the new roll, and you can't use this feature
again until you finish a Long Rest.
