---
name: Lift Attack
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
      save: dex
    damage:
      - dieCount: barrierDie
    shortDesc: >-
      When you hit a creature with a melee attack, you can expend one barrier tick to lift it.
      Add <strong>{{ damage }}</strong> to the attack’s damage roll. If the target is Medium or smaller,
      it must succeed on a <strong>DC {{ dc }} DEX</strong> save
      or become lifted until the end of your next turn.
type: maneuvers
---
When you hit a creature with a melee attack, you can expend one barrier tick to attempt to lift a Medium or smaller size
creature or object. You add the barrier tick to the attack’s damage roll, the target must make a Dexterity
saving throw. On a failed save, the target is lifted until the end of your next turn.
