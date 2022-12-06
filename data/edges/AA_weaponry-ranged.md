---
name: Apex Weaponry (ranged)
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
            id: AA_weaponry-ranged
      notes:
        - {}
        - type: tooltip
          text: 1/2 dmg @ SoT
          tooltipText: >-
            Whenever you damage an enemy with your weapon, that enemy takes half the damage you dealt again at the start of their next turn.
      damage:
        - {}
        - dieCount: 1
          dieType: 8
          type: radiant
          addTo: base
type: apex-augments
---
Your weapon deals an additional 1d8 radiant damage. Whenever you damage an enemy with your weapon, that enemy takes half the damage you dealt again at the start of their next turn.
