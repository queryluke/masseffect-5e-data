---
species:
  - angara
mechanics:
  - type: reaction
    resource:
      displayType: checkbox
      reset: long
      max:
        type: mod
        value: con
    damage:
      - dieCount: 2
        dieType: 4
        type: lightning
    notes:
      - creature cannot take reactions until the end of its next turn
    shortDesc: "* - when you are hit by a melee weapon attack by a creature you can see"
  - type: action
    range:
      short: 1
    resource:
      displayType: checkbox
      reset: long
      max:
        type: mod
        value: con
    shortDesc: "Stabilize one creature or end the stunned condition on one creature"
---
