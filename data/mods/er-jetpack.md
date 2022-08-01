---
rarity: rare
type: armor
cost: 150000
manufacturer: elanus-risk-control-services
tags:
  - movement
placement: chest
availability:
  - light
  - medium
  - heavy
name: ER Jetpack
flavor: >-
  An advanced jetpack that can be used for longer than the standard version, but
  takes longer to recharge.
mechanics:
  - type: bonus-action
    name: ER Jetpack (mod)
    shortDesc: Gain a flying speed of <me-distance length="15" /> for 10 minutes.
    resource:
      id: er-jetpack-resource
      reset: long
    toggle:
      id: er-jetpack-toggle
      whenOn:
        - type: resource
          id: er-jetpack-resource
          method: set
          value:
            type: flat
            value: 1
        - type: speed
          speed: fly
          distance: 15
---
As a bonus action, activate the jetpack to gain a flying speed of <me-distance length="15" /> for 10 minutes.
This device cannot be used again until you finish a long rest.
