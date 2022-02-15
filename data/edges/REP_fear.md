---
name: Fear
type: benefits
threshold: 30
prereq:
  renegade:
    min: 20
    greaterThan: paragon
mechanics:
  - type: action
    resource: {}
    dc:
      base: 8
      proficient: true
      mod: cha
      save: wis
    shortDesc: >-
      Each sentient creature that can see or hear you must succeed on a DC {{ dc }} WIS saving throw or become
      frightened of you for 1 minute. The creature may use its action to make another WIS saving throw on each of its
      turns.
---
You attempt to frighten a sentient creature (Intelligence 4 or more) that can see or hear you. It must succeed on a
Wisdom saving throw or it becomes frightened of you for 1 minute. The creature may use its action to make another
Wisdom saving throw on each of its turns. On a successful save, it is no longer frightened of you.

You may use this benefit once per long rest.


