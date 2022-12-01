---
level: 3
klass: musician
subclass: techno
mechanics:
  - type: bonus-action
    name: Holo-Dancer
    layout: simple
    dc:
      base: 0
      proficient: false
      bonus:
        type: progressive
        value:
          3: 1
          11: 2
          20: 3
    resource:
      id: musicians-inspiration
      reset: off
      min: 1
      max:
        type: mod
        value: cha
    shortDesc: >-
      Use your Musician's Inspiration to create {{ dc }} clone(s) that occupy the same space you do. When an attacker
      targets you, before they roll an attack, they must roll a d{{dc + 1}}. If the attack rolls a 1, the attack proceeds
      as normal. If they roll any other number, they targeted one of your Holo Dancers. The Dancer absorbs the attack and vanishes.
name: Holo-Dancer
---
At 3rd level, you can use you Omni-tool to create a holographic copy of yourself to enhance your performances. You can
spend a use of Inspiration to activate this feature as a bonus action. You create one clone at 3rd level,
another one at 11th level and a third one at 20th level.
In combat, the clones occupy the same space you do, but their movements are offset just enough
to confuse attackers.

When an attacker targets you, before they roll an attack, they must roll a dX, where X is the number of
Holo-Dancers currently active +1. If the attacker rolls a 1, they have targeted your actual body, and the
attack proceeds as normal. If they roll any other number, they targeted one of
your Holo Dancers. The Dancer absorbs the attack and vanishes.
