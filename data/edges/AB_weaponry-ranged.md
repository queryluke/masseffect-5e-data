---
name: Boosted Weaponry (ranged)
mechanics:
  - type: augment
    value:
      model: main-augments
      id: MA_weaponry-ranged
      limit: [attack]
    merge:
      resource:
        reset: short
        id: integrated-weaponry-toggle-resource
      moreInfo:
        additional:
          - model: edges
            id: AB_weaponry-ranged
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
          - id: integrated-weaponry-toggle-arc
            name: Arc
            whenOn:
              - type: augment
                value:
                  model: main-augments
                  id: MA_weaponry-ranged
                  limit: [attack]
                merge:
                  damage:
                    - type: lightning
                  notes:
                    - type: tooltip
                      text: Arc
                      tooltipText: >-
                        On a hit, deals half of the damage dealt to 1 additional creature within <me-distance length="5" />
                        of the hit target. If there is more than one creature within <me-distance length="5" /> of the
                        initial target, choose the second target randomly.
                      isHtml: true
          - id: integrated-weaponry-toggle-force
            name: Force
            whenOn:
              - type: augment
                value:
                  model: main-augments
                  id: MA_weaponry-ranged
                  limit: [attack]
                merge:
                  damage:
                    - type: force
          - id: integrated-weaponry-toggle-radiant
            name: Radiant
            whenOn:
              - type: augment
                value:
                  model: main-augments
                  id: MA_weaponry-ranged
                  limit: [attack]
                merge:
                  damage:
                    - type: radiant
type: augment-boosts
---
You can give it the Arc property or change it's damage type to Force or
Radiant. You can change your choice at the end of each short rest.
