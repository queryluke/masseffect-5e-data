---
species:
  - awakened-collector
mechanics:
  - type: action
    resource:
      isolated: true
  - type: bonus-action
    resource:
      displayType: counter
      reset: manual
      max:
        type: flat
        value: 3
      isolated: true
    damage:
      - dieCount: 1
        dieType: 4
        mod: false
        type: necrotic
        bonus: 1
    range:
      short: 150
    notes: damage bypasses shields and detonates any primed condition
---
