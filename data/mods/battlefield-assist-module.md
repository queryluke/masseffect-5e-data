---
rarity: spectre
type: armor
cost: 38000
manufacturer: devlon-industries
tags:
  - special
placement: chest
availability:
  - light
  - medium
  - heavy
name: Battlefield Assist Module
flavor: >-
  A special VI that reroutes all power to your armor's defenses when vital signs
  are low.
mechanics:
  - type: other
    name: Battlefield Assist Module
    shortDesc: >-
      At the start of your turn, if you have less than one-quarter of your hit points remaining, you can use a bonus
      action to gain +2 AC and resistance to a damage type of your choice for 1 minute.
    toggle:
      id: battlefield-assist-module-toggle
      whenOn:
        - type: ac
          bonus:
            type: flat
            value: 2
      options:
        - id: battlefield-assist-module-toggle-acid
          name: Acid
          whenOn:
            - type: resistance
              value: acid
        - id: battlefield-assist-module-toggle-bludgeoning
          name: Bludgeoning
          whenOn:
            - type: resistance
              value: bludgeoning
        - id: battlefield-assist-module-toggle-cold
          name: Cold
          whenOn:
            - type: resistance
              value: cold
        - id: battlefield-assist-module-toggle-fire
          name: Fire
          whenOn:
            - type: resistance
              value: fire
        - id: battlefield-assist-module-toggle-force
          name: Force
          whenOn:
            - type: resistance
              value: force
        - id: battlefield-assist-module-toggle-lightning
          name: Lightning
          whenOn:
            - type: resistance
              value: lightning
        - id: battlefield-assist-module-toggle-necrotic
          name: Necrotic
          whenOn:
            - type: resistance
              value: necrotic
        - id: battlefield-assist-module-toggle-piercing
          name: Piercing
          whenOn:
            - type: resistance
              value: piercing
        - id: battlefield-assist-module-toggle-poison
          name: Poison
          whenOn:
            - type: resistance
              value: poison
        - id: battlefield-assist-module-toggle-psychic
          name: Psychic
          whenOn:
            - type: resistance
              value: psychic
        - id: battlefield-assist-module-toggle-radiant
          name: Radiant
          whenOn:
            - type: resistance
              value: radiant
        - id: battlefield-assist-module-toggle-slashing
          name: Slashing
          whenOn:
            - type: resistance
              value: slashing
        - id: battlefield-assist-module-toggle-thunder
          name: Thunder
          whenOn:
            - type: resistance
              value: thunder
    resource:
      reset: long
      max:
        type: flat
        value: 1
      id: battlefield-assist-module-resource
---
At the start of your turn, if you have less than one-quarter of your hit points remaining, you can use a bonus
action to gain +2 AC and resistance to a damage type of your choice for 1 minute. You may use this feature once per
long rest.
