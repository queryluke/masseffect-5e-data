---
level: 10
klass: soldier
subclass: painkiller
mechanics:
  - type: other
    name: Gunslinger's Ballad
    shortDesc: >-
      When you use a Bonus Action to attack with an off hand weapon, you can make an additional attack with
      that same off hand weapon.
    resource:
      max:
        type: proficiency
  - type: augment
    value:
      model: soldier
      id: tactical-reload
    merge:
      moreInfo:
        additional:
          - model: class-features
            id: hammer-the-gap
name: Gunslinger's Ballad
---
At 10th level, small arms become instruments of a destructive symphony. When you sacrifice an attack to use
Tactical Reload, you reload both of the weapons you are wielding.

When you use a Bonus Action to attack with an off hand weapon, you can make an additional attack with
that same off hand weapon. You may use this ability a number of times per short rest equal to your Proficiency Modifier.
