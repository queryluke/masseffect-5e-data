---
name: Nano Shielding
level: 7
klass: soldier
subclass: nanobreaker
mechanics:
  - type: natural-armor
    base: 13
    mod: con
  - type: shields
    capacity:
      type: level
      value: soldier
    regen:
      type: proficiency
    additive: false
  - type: other
    name: Nano Shielding
    shortDesc: >-
      You have a special shield capacity equal to your Soldier level that is not vulnerable to Lightning damage
      and melee weapons do not bypass it. Every turn at the beginning of your turn, you recover {{ profBonus }}
      shield points, even if you attacked in the previous round.
---
At 7th level, your nanomachines emit an electromagnetic field strong enough to project a shield around you. You gain a
special kind of shield, with shield points equal to your Soldier level. These shields are not considered
vulnerable to Lightning damage, and melee weapons do not bypass it. Every turn at the beginning of your turn,
you recover your Proficiency modifier shield points, even if you attacked in the previous round.

Your Nanite Armor's AC is now 13+Con Modifier.
