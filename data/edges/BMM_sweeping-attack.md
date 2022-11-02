---
name: Sweeping Attack
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
        type: force
    shortDesc: >-
      When you hit a creature with a melee attack, you can expend one barrier tick to attempt to damage another creature.
      Choose another creature within <me-distance length="5" /> of the original target and within
      your reach. If the original attack roll would hit the second creature, it takes <strong>{{ damage }} force</strong>damage.
type: maneuvers
---
When you hit a creature with a melee attack, you can expend one barrier tick to attempt to damage another creature
with the same attack. Choose another creature within <me-distance length="5" /> of the original target and within
your reach. If the original attack roll would hit the second creature, it takes force damage equal to the number you roll on your barrier tick.
