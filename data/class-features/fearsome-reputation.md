---
level: 7
klass: soldier
subclass: incubus
mechanics:
  - type: other
    name: Fearsome Reputation
    damage:
      - type: psychic
        bonus:
          type: level
          multiplier: 0.5
          value: soldier
    shortDesc: >-
      When a creature that is frightened of you starts its turn within <me-distance length="15" /> of
      you, that creature’s movement speed is reduced to 0, and they take {{ damage }} psychic damage.
      This damage cannot reduced by shields or barriers.
name: Fearsome Reputation
---
Your very presence is enough to send most running for the hills, but those that are truly frightened of you might just
find their legs unwilling to respond, and their brains beginning to hurt from the strain of fear itself.

Starting at 7th level, when a creature that is frightened of you starts its turn within <me-distance length="15" /> of
you, that creature’s movement speed is reduced to 0, and they take psychic damage equal to half your Soldier level.
This damage cannot reduced by shields or barriers.
