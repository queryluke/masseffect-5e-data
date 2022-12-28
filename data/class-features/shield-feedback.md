---
level: 10
klass: sentinel
subclass: artillerist
mechanics:
  - type: augment
    value:
      model: sentinel
      id: tech-armor
      limit: [bonus-action]
    merge:
      moreInfo:
        additional:
          - {}
          - {}
          - model: class-features
            id: shield-feedback
      toggle:
        options:
          - {}
          - whenOn:
              - {}
              - {}
              - type: global-note
                value: Shield Feedback
                subType: power
                moreInfo:
                  model: class-features
                  id: shield-feedback
name: Shield Feedback
---
At 10th level, you can redirect some power from your cannon back into your omni-tool and shields. When you use your
action to cast a power, your shield recovers an amount of shield points equal to the level of the power. If you cast
a cantrip, it instead regains points equal to the number of die rolled in the cantrip.
