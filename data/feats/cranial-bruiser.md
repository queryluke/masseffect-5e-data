---
name: Cranial Bruiser
new: true
mechanics:
  - type: asi
    ability: str
    amount: 1
  - type: augment
    value:
      model: traits
      id: thick-frontal-plate
      limit: [natural-weapon]
      instances: [0]
    merge:
      value:
        damage:
          dieType: 10
  - type: bonus-action
    shortDesc: >-
      When you take the Dash action on your turn, you can make one unarmed strike with your thick frontal plate.
prerequisite: Krogan
prereq:
  - type: species
    limit: [krogan]
---
You’ve mastered the Krogan headbutt and can use it as a ramming attack.

- Increase your Strength score by 1, to a maximum of 20.
- The die type of your Thick Frontal Plate unarmed strike becomes a d10.
- When you take the Dash action on your turn, you can make one unarmed strike with your frontal
plate as a bonus action.
