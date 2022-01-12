---
name: Frightening Presence
threshold: 100
prereq:
  renegade:
    min: 70
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
      For the next hour, creatures that can see you within <me-distance length="60" /> must succeed on a Wisdom saving throw
      or become frightened.
---
Your presence can cause even the most battle hardened veterans to quiver. For the next hour when a sentient
creature (Intelligence 4 or more) can see you and comes within <me-distance length="60" /> of you, the creature must
succeed on a Wisdom saving throw or become frightened. The creature remains frightened while it can see you or is
within <me-distance length="60" /> of you. While frightened by you, the creature must use its movement to move to the nearest safe
spot from which it can't see you. If the creature moves more than <me-distance length="60" /> from you and can't see you, the creature
is no longer frightened, but the creature becomes frightened again if it regains sight of you or moves within
<me-distance length="60" /> of you.

You may use this benefit once per long rest.



