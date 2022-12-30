---
level: 10
klass: soldier
subclass: incubus
mechanics:
  - type: augment
    value:
      model: soldier
      id: revel-in-agony
      limit: [other]
    merge:
      shortDesc: >-
        Whenever you score a critical hit or reduce a creature to 0 hit points, you can select any creatures
        within <me-distance length="30" /> of you. Each creature must make a DC {{ dc }} Wisdom saving throw.
        On a fail, a creature is frightened of you for 1 minute. A creature can retry the saving throw at the end
        of its turn, ending the effect on a success.
name: Carnival of Carnage
---
Revenge might be a dish best served cold, but pain is a dish best shared with everyone.

Starting at 10th level, whenever Revel in Agony activates, it affects all creatures of your choice within
<me-distance length="30" /> of you, instead of just 1 target.
