---
name: Empowered Hunter Mode
new: true
mechanics:
  - type: action
    toggle:
      id: empowered-hunter-mode
      whenOn:
        - type: speed-bonus
          value: [walk]
          bonus:
            type: flat
            value: 5
        - type: power-augment
          augment: attack
          value:
            type: flat
            value: 1
        - type: power-augment
          augment: damage
          value:
            type: dieIncrease
        - type: power-augment
          augment: dc
          value:
            type: flat
            value: 1
    resource: {}
    shortDesc: >-
      For 1 minute, your speed increases by <me-distance length="5" />, you gain +1 to power attack rolls,
      and whenever you deal damage with a power, increase the die type by 1 (gain +1 if the die is a d12).
prerequisite: Geth and the ability to cast one tech or biotic spell
prereq:
  - type: species
    limit: [geth]
---
Geth were designed as lethal weapons and can activate subroutines to enhance their lethality.

As an action, you can activate Empowered Hunter Mode, gaining the following benefits for 1 minute:

- Your movement speed increases by 2 meters.
- You gain a +1 bonus to power attack rolls and the DC of your powers increases by 1.
- Increase the die type by 1 (max d12) for any damage rolls of powers you cast.
If the die type is already d12, add +1 for each d12 rolled instead of increasing the die type.

Empowered Hunter Mode lasts 1 minute and you must finish a long rest before you can use this feat again.
