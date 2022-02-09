---
species:
  - ardat-yakshi
mechanics:
  - type: ardat-yakshi-addiction-dc
    resource:
      label: Addiction saving throw DC, WIS
      displayType: counter
      reset: manual
      increment: 5
      max:
        type: flat
        value: 50
        min: 0
      id: ardat-yakshi-addiction-dc
  - type: ardat-yakshi-addiction-level
    resource:
      label: Addiction Level
      displayType: counter
      reset: manual
      max:
        type: flat
        value: 5
        min: 0
      id: ardat-yakshi-addiction-level
---
