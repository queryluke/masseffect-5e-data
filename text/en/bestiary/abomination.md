---
name: Abomination
entries:
  features:
    - name: Aggressive
      text: >-
        As a bonus action, the abomination can move up to its speed toward a
        hostile creature that it can see.
      id: aggressive
    - name: Post-Mortem Explosion
      text: >-
        When the abomination dies, it explodes in a burst of necrotic energy.
        Each creature within <me-distance length='5' /> of it must succeed on a
        DC 14 Dexterity saving throw, taking 28 (8d6) necrotic damage on a
        failed save, or half as much damage on a successful one. A creature that
        is grappled by the abomination automatically fails its saving throw.
      id: post-mortem-explosion
  actions:
    - name: Grapple
      hit: >-
        The creature is grappled (escape DC 11). At the start of the
        abomination's next turn, it uses Post-Mortem Explosion.
      id: grapple
---
