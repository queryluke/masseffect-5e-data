---
name: Cold
type: primers
mechanics:
  - dc:
      base: 15
      save: str
    shortDesc: >-
      Each creature within a <me-distance length="10" adj /> radius, including the primed target, must pass a
      DC {{ dc }} Strength saving throw. On a failed save a creature is <me-condition id="frozen" /> until the
      end of its next turn.
  - dc:
      base: 16
  - dc:
      base: 17
  - dc:
      base: 18
---
Each creature within a <me-distance length="10" adj /> radius, including the primed target, must pass a
DC 15 Strength saving throw. On a failed save a creature is <me-condition id="frozen" /> until the end of its next turn. The DC of the saving
throw increases by 1 at 5th (16), 11th (17), and 17th (18) level.
