---
name: Supercharged Weaponry (melee)
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
            id: SA_weaponry-melee
      notes:
        - {}
        - type: tooltip
          text: shields*
          tooltipText: >-
            Deals the same damage to shields that it would deal
            to health (efectively dealing the same damage to both shields and health)
      damage:
        - {}
        - dieCount: 1
          dieType: 8
          type: thunder
          addTo: base
type: supercharged-augments
---
Your weapon deals an additional 1d8 thunder damage deals the same damage to shields that it would deal
to health (efectively dealing the same damage to both shields and health)
