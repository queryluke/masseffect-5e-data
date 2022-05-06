---
level: 18
klass: sentinel
subclass: guardian
name: Tech Aura
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
            id: tech-aura-3
            name: Tech Aura (18th Level)
      toggle:
        options:
          - id: defensive
          - id: anti-biotic
            whenOn:
              - {}
              - {}
              - merge:
                  range:
                    aoe:
                      size: 60
          - id: anti-tech
            whenOn:
              - {}
              - {}
              - merge:
                  range:
                    aoe:
                      size: 60
          - id: grounded
            whenOn:
              - {}
              - merge:
                  range:
                    aoe:
                      size: 60
          - id: reactive
            whenOn:
              - {}
              - merge:
                  range:
                    aoe:
                      size: 60
          - id: speed
            whenOn:
              - {}
              - {}
              - merge:
                  range:
                    aoe:
                      size: 60
          - id: regen
            whenOn:
              - merge:
                  range:
                    aoe:
                      size: 60
          - id: inspiring-music
            whenOn:
              - {}
              - merge:
                  range:
                    aoe:
                      size: 60
          - id: brute-force
            whenOn:
              - {}
              - merge:
                  range:
                    aoe:
                      size: 60
          - id: negation-field
            whenOn:
              - {}
              - merge:
                  range:
                    aoe:
                      size: 60
---
At 18th level, increase the distance of your Tech Aura packages to <me-distance length="60" />.
