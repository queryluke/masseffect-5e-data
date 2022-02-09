---
name: Electrogenesis Amp
new: true
mechanics:
  - type: asi
    ability: con
    amount: 1
  - type: augment
    value:
      model: traits
      id: electrogenesis
      limit: [action]
    merge:
      damage:
        - dieCount: 1
          dieType: 4
          mod: con
          type: shields
      shortDesc: >-
        Touch one creature to restore 1d4 + {{ conMod }} shield points and stabilize or end the stunned condition on it.
prerequisite: Angara
prereq:
  - type: species
    limit: [angara]
---
You have trained with amplifying your electrogenesis to provide a boost to kinetic barrier devices.

- Increase your Constitution score by 1, to a maximum of 20.
- As an action on your turn, you may use your electrogenesis trait and touch one creature. The
creature gains shield points (up to its maximum shield point capacity) equal 1d4 + your
Constitution modifier. You can apply this effect when you use your action to stabilize a
creature or remove the stunned condition.
