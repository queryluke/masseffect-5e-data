---
rarity: rare
type: armor
cost: 22000
manufacturer: armax-arsenal
tags:
  - special
placement: arms
availability:
  - light
  - medium
  - heavy
name: EC Counter
flavor: Uses an electrical conduit to automatically counter-attack melee combatants.
mechanics:
  - type: other
    shortDesc: >-
      Once per round, when you are hit with a melee attack, the attacking creature suffers 2d4 lightning
      damage and must succeed on a DC 10 Constitution saving throw or becomes stunned until the start of your next turn.
    dc:
      base: 10
      proficient: false
      save: CON
    damage:
      - dieType: 4
        dieCount: 2
        type: lightning
---
Whenever you are hit with a melee attack, the attacking creature takes 2d4 lightning damage and must succeed on a DC 10
Constitution saving throw or becomes stunned until the start of your next turn. This effect can only happen once per round (every 6 seconds).
