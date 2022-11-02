---
name: Distracting Attack
mechanics:
  - type: other
    resource:
      reset: 'off'
      displayType: barrier-ticks
      label: 'Barrier Ticks'
    damage:
      - dieCount:
          type: barrierDieCount
        dieType:
          type: barrierDieType
    shortDesc: >-
      When you hit a creature with a melee attack, you can expend one barrier tick to give your allies an opening.
      Add <strong>{{ damage }}</strong> to the attack’s damage roll, and the next attack roll against the target by an
      attacker other than you has advantage if the attack is made before the start of your next turn.
type: maneuvers
---
When you hit a creature with a melee attack, you can expend one barrier tick to distract the creature, giving your
allies an opening. You add the barrier tick to the attack’s damage roll. The next attack roll against the target by an attacker other than you has advantage if the attack is made before the start of your next turn.
