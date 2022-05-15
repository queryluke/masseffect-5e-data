---
name: Goading Attack
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
      When you hit a creature with a melee attack, you can expend one barrier tick to goad the target.
      Add <strong>{{ damage }}</strong> to the attack’s damage roll, and the target must succeed on a <strong>DC {{ dc }} WIS</strong> save
      or have disadvantage on all attack rolls against targets other than you until the end of your next turn.
type: maneuvers
---
When you hit a creature with a melee attack, you can expend one barrier tick to attempt to goad the target into
attacking you. You add the barrier tick to the attack’s damage roll, and the target must make a Wisdom saving throw.
On a failed save, the target has disadvantage on all attack rolls against targets other than you until the end of your next turn.
