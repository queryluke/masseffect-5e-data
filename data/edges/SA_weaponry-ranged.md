---
name: Supercharged Weaponry (ranged)
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
            id: SA_weaponry-ranged
      notes:
        - {}
        - bypass shields
      damage:
        - {}
        - dieCount: 1
          dieType: 8
          type: thunder
          addTo: base
type: supercharged-augments
---
Your weapon deals an additional 1d8 thunder damage and bypasses shields.
