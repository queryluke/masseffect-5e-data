---
name: Primal Weaponry (ranged)
mechanics:
  - type: augment
    value:
      model: main-augments
      id: MA_weaponry-ranged
      limit: [attack]
    merge:
      moreInfo:
        additional:
          - {}
          - model: edges
            id: PA_weaponry-ranged
      range:
        short: 100
        long: 200
      damage:
        - {}
        - dieCount: 1
          dieType: 8
          type: necrotic
          addTo: base
type: primal-augments
---
Your weapon deals an additional 1d8 necrotic damage. Double it's range.
