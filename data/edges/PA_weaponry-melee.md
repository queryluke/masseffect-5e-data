---
name: Primal Weaponry (melee)
mechanics:
  - type: augment
    value:
      model: main-augments
      id: MA_weaponry-melee
      limit: [attack]
    merge:
      moreInfo:
        additional:
          - {}
          - model: edges
            id: PA_weaponry-melee
      range:
        short: 10
      damage:
        - {}
        - dieCount: 1
          dieType: 8
          type: necrotic
          addTo: base
      toggle:
        options:
          - whenOn:
              - merge:
                  range:
                    short: 15
type: primal-augments
---
Your weapon deals an additional 1d8 necrotic damage. It gains a reach of <me-distance length="5" />.
This can stack with the Reach property you can give it.
