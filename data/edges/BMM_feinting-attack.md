---
name: Feinting Attack
mechanics:
  - type: bonus-action
    resource:
      reset: 'off'
      displayType: barrier-ticks
      label: 'Barrier Ticks'
    damage:
      - dieCount: barrierDie
    shortDesc: >-
      Your next melee attack roll on a target within <me-distance length="2" abbr /> has advantage.
      If that attack hits, add <strong>{{ damage }}</strong> to the attack’s damage roll.
type: maneuvers
---
You can expend one barrier tick and use a bonus action on your turn to feint, choosing one creature within <me-distance length="2" /> of
you as your target. You have advantage on your next melee attack roll against that creature. If that attack hits, add the barrier tick to the attack’s damage roll.
