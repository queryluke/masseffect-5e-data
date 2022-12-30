---
name: Boosted Weaponry (melee)
mechanics:
  - type: augment
    value:
      model: main-augments
      id: MA_weaponry-melee
      limit: [attack]
    merge:
      resource:
        reset: short
        id: integrated-weaponry-toggle-resource
      moreInfo:
        additional:
          - model: edges
            id: AB_weaponry-melee
      toggle:
        id: integrated-weaponry-toggle
        whenOn:
          - type: resource
            id: integrated-weaponry-toggle-resource
            method: set
            value:
              type: flat
              value: 1
        options:
          - id: integrated-weaponry-toggle-reach
            name: Reach
            whenOn:
              - type: augment
                value:
                  model: main-augments
                  id: MA_weaponry-melee
                  limit: [attack]
                merge:
                  range:
                    short: 10
                  notes:
                    - Reach
          - id: integrated-weaponry-toggle-lightning
            name: Lightning
            whenOn:
              - type: augment
                value:
                  model: main-augments
                  id: MA_weaponry-melee
                  limit: [attack]
                merge:
                  damage:
                    - type: lightning
          - id: integrated-weaponry-toggle-fire
            name: Fire
            whenOn:
              - type: augment
                value:
                  model: main-augments
                  id: MA_weaponry-melee
                  limit: [attack]
                merge:
                  damage:
                    - type: fire
type: augment-boosts
---
You can now either grant it the Reach property or change it's damage type to Lightning or Fire.
You can change your choice at the end of each short rest.
