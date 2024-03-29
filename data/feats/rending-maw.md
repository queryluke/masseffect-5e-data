---
name: Rending Maw
new: true
mechanics:
  - type: asi
    ability: dex
    amount: 1
  - type: bonus-action
    shortDesc: >-
      Whenever you take the Dash action on your turn, you may use your bonus action to make an attack
      with your Bite.
  - type: augment
    value:
      model: traits
      id: bite
      limit: [natural-weapon]
      instances: [0]
    merge:
      value:
        notes: [1d6 damage per turn. Ends w/ DC 10 WIS (medicine)]
prerequisite: Vorcha
prereq:
  - type: species
    limit: [vorcha]
---
Your bite becomes a deadly weapon, and you’ve trained to pierce vital points.

- Increase your Dexterity by 1, to a maximum of 20.
- Whenever you take the Dash action on your turn, you may use your bonus action to make an attack
with your Bite.
- Whenever you hit an organic target with your bite attack, it continues to bleed, suffering 1d6
damage at the start of each of its turns due to blood loss. A creature can staunch the wound by
using its action to attempt a DC 10 Wisdom (Medicine) check. On a success, the bleeding stops.
