---
bonuses:
  - threshold: 3
    text: >-
      When you roll a Hit Die to regain hit points, the minimum number of hit
      points you regain from the roll equals twice your Constitution modifier
      (minimum of 2).
    mechanics:
      - type: min-hit-die-roll
        bonus:
          type: mod
          value: con
          min: 2
  - threshold: 4
    text: >-
      You may jumpstart your shields any number of times. Each time you do, roll
      a d20. On a roll of 8 or less, your shields malfunction
    mechanics:
      - type: augment
        value:
          model: armor
          id: remnant-tasset
        merge:
          resource: false
          shortDesc: When you take damage, gain {{ shieldRegen }} shield points. Then roll a d20. On a roll of 8 or less, your shields become 0 and do not regen until you take a short rest.
max: 4
---
