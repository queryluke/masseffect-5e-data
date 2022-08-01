---
rarity: rare
type: armor
cost: 60000
manufacturer: elanus-risk-control-services
tags:
  - movement
placement: chest
availability:
  - light
  - medium
  - heavy
name: Jetpack
flavor: >-
  This propulsion device generates mass effect fields for lift and gyroscopic
  attitude adjusters to maneuver the wearer for a short duration.
mechanics:
  - type: bonus-action
    name: Jetpack (mod)
    shortDesc: Gain a flying speed of <me-distance length="15" /> for 1 minute.
    resource:
      id: jetpack-resource
      reset: short
    toggle:
      id: jetpack-toggle
      whenOn:
        - type: resource
          id: jetpack-resource
          method: set
          value:
            type: flat
            value: 1
        - type: speed
          speed: fly
          distance: 15
---
As a bonus action, activate the jetpack to gain a flying speed of <me-distance length="15" /> for 1 minute. This device
cannot be used again until you finish a short rest.
