---
name: Pushing Attack
mechanics:
  - type: other
    resource:
      reset: 'off'
      displayType: barrier-ticks
      label: 'Barrier Ticks'
    dc:
      base: 8
      proficient: true
      bonus:
        type: powercastingMod
        value: vanguard
      save: str
    damage:
      - dieCount: barrierDie
    shortDesc: >-
      When you hit a creature with a melee attack, you can expend one barrier tick to disarm the target.
      Add <strong>{{ damage }}</strong> to the attack’s damage roll. If the target is Large or smaller,
      if must succeed on a <strong>DC {{ dc }} STR</strong> save or be pushed up to <me-distance length="20" /> away from you.
type: maneuvers
---
When you hit a creature with a melee attack, you can expend one barrier tick to attempt to drive the target back. You
add the barrier tick to the attack's damage roll, and if the target is Large or smaller, it must make a
Strength saving throw. On a failed save, you push the target up to <me-distance length="20" /> away from you.
