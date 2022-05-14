---
name: Menacing Attack
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
      save: wis
    damage:
      - dieCount: barrierDie
    shortDesc: >-
      When you hit a creature with a melee attack, you can expend one barrier tick to frighten the target.
      Add <strong>{{ damage }}</strong> to the attack’s damage roll, and the target must succeed on a <strong>DC {{ dc }} WIS</strong> save
      or becomes <me-condition id="frightened" /> of your until the end of your next turn.
type: maneuvers
---
When you hit a creature with a melee attack, you can expend one barrier tick to attempt to frighten the target.
You add the barrier tick to the attack’s damage roll, and the target must make a Wisdom saving throw. On a failed save,
it is <me-condition id="frightened" /> of you until the end of your next turn.
