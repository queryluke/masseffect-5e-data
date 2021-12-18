---
species:
  - awakened-collector
mechanics:
  - type: action
    recharge: long
    uses: 1
  - type: bonus-action
    recharge: manual
    uses: 3
    damage:
      - dieCount: 1
        dieType: 4
        mod: false
        type: necrotic
        bonus: 1
    range: 150
    note: damage bypasses shields and detonates any primed condition
---
