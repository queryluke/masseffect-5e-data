---
level: 20
klass: musician
subclass: operatic
mechanics:
  - type: action
    name: Inspire the Soul
    resource:
      id: musicians-inspiration
      min: 1
      reset: short
      max:
        type: mod
        value: cha
      increment: 2
    damage:
      - dieType: 12
        dieCount: 1
        type: temp
        bonus:
          type: mod
          value: cha
    shortDesc: >-
      For 1d12 rounds, your allies are bolstered: at the beginning of their turn, they gain temporary hit points
      equal to 1d12 + {{ chaMod }}. Additionally, they can add +{{ chaMod }} to their damage rolls if they are made within
      <me-distance length="50" /> of you. Using Inspiration this way consumes 2 uses of Inspiration per use.
name: Inspire the Soul
---
At 20th level, instead of using a bonus action to target an ally and grant them inspiration, you can use an action to
use this feature. For number of rounds equal to one roll of your Inspiration die, your allies are bolstered:
at the beginning of their turn, they gain temporary hit points equal to one roll of your Inspiration die + your
Charisma Modifier. Additionally, they can add your Charisma to their damage rolls if they are made within
<me-distance length="50" /> of you. Using Inspiration this way consumes 2 uses of Inspiration per use.
