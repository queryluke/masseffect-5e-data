---
level: 14
klass: engineer
subclass: stg
mechanics:
  - type: initiative
    effect:
      type: advantage
  - type: augment
    value:
      model: engineer
      id: find-target
    merge:
      shortDesc: >-
        Designate one enemy to be your Target. Against your Target, you gain a
        +{{ intMod }} bonus to damage when you use your Engineer's Efficiency spell and roll two more damage die than
        normal on the power roll, and your Target has disadvantage against any saving throws your Engineer's
        Efficiency has, if it has any.
      moreInfo:
        additional:
          - model: class-features
            id: track-and-kill
name: Strike First
---
At 14th level, when you use your Engineer's Efficiency against your Target, you can roll two more damage die than normal on the power roll.

In addition, you roll all initiative rolls with advantage.
