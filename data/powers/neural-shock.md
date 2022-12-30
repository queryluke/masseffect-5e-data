---
name: Neural Shock
version: 1
level: 1
type: tech
classes:
  - engineer
  - musician
  - infiltrator
  - tracker
tags:
  - debuff
mechanics:
  - castingTime:
      length: 1
      unit: action
    attack: false
    dc:
      base: 8
      proficient: true
      save: cha
    damage: false
    conditions: false
    duration:
      length: 0
      unit: instant
    concentration: false
    range:
      short: 150
    detonates: false
    primes: false
advancements:
  - id: damage
    name: Damage
    text: The target takes 2d6 psychic damage when hit by the ion laser. This damage increases by 2d6 for each slot level above the 1st.
    mechanics:
      - damage:
          - dieCount: 2
            dieType: 6
            type: psychic
      - damage:
        - dieCount: 4
      - damage:
        - dieCount: 6
      - damage:
        - dieCount: 8
      - damage:
        - dieCount: 10
  - id: paralyze
    name: Paralyze
    text: If a creature fails the saving throw, it is paralyzed until the end of its next turn.
    mechanics:
      - conditions: [paralyzed]
---
Flash an ion laser at an organic creature within range. The creature makes a Charisma saving throw. On a failed save,
the creature has disadvantage on melee and ranged attack rolls and can't take reactions until the end of its
next turn.
