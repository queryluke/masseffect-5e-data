---
level: 10
klass: adept
subclass: fury
name: Blast Zone
mechanics:
  - type: global-note
    value: Blast Zone
    subType: defenses
    moreInfo:
      model: class-features
      id: blast-zone
  - type: augment
    value:
      model: adept
      id: furycasting
    merge:
      moreInfo:
        additional:
          - {}
          - model: class-features
            id: blast-zone
---
At 10th level, you are immune to the effects of detonations you trigger. In addition, you may spend your reaction to
add your Wisdom modifier to a detonation you triggered via a power you Furycast.
