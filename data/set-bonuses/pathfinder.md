---
bonuses:
  - threshold: 3
    text: Any critical hit against you becomes a normal hit.
    mechanics:
      - type: global-note
        subType: defenses
        value: Null Critical
  - threshold: 4
    text: You gain a +5 bonus to initiative as long as you aren't incapacitated.
    mechanics:
      - type: initiative
        effect: bonus
        bonus:
          type: flat
          value: 5
max: 4
---

