---
rarity: spectre
type: armor
cost: 120000
manufacturer: elanus-risk-control-services
tags:
  - movement
placement: chest
availability:
  - light
  - medium
  - heavy
name: QR Jetpack
flavor: >-
  A better model of the standard jetpack that has a larger battery reserve,
  allowing for more uses before recharging.
mechanics:
  - type: bonus-action
    name: QR Jetpack (mod)
    shortDesc: Gain a flying speed of <me-distance length="15" /> for 1 minute.
    resource:
      id: qr-jetpack-resource
      reset: short
      max:
        type: flat
        value: 3
    toggle:
      id: qr-jetpack-toggle
      whenOn:
        - type: speed
          speed: fly
          distance: 15
---
As a bonus action, activate the jetpack to gain a flying speed of <me-distance length="15" /> for 1 minute. You
may use this 3 times per short rest.
