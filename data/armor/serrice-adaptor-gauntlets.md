---
placement: arms
type: medium
cost: 45050
manufacturer: serrice-council
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/6/6a/ME3_serrice_council_arms.png/revision/latest/scale-to-width-down/130?cb=20120312132501
tags:
  - resistance
andromeda: false
set: false
rarity: uncommon
name: Serrice Adaptor Gauntlets
flavor: >-
  A pair of gauntlets that have micro fabricators in their frames. These can
  spread omni-gel through the rest of the hardsuit, inuring the combatant to a
  type of damage.
mechanics:
  - type: thermal-clip-capacity
    value: 2
  - type: medi-gel-capacity
    value: 2
  - type: other
    name: Serrice Adaptor Gauntlets
    shortDesc: Once per long rest, gain resistance to your choice of acid, cold, fire, force, lightning, necrotic, poison, psychic, radiant, or thunder damage.
    toggle:
      id: serrice-adaptor-gauntlets-toggle
      options:
        - id: serrice-adaptor-gauntlets-toggle-acid
          name: Acid
          whenOn:
            - type: resistance
              value: acid
        - id: serrice-adaptor-gauntlets-toggle-cold
          name: Cold
          whenOn:
            - type: resistance
              value: cold
        - id: serrice-adaptor-gauntlets-toggle-fire
          name: Fire
          whenOn:
            - type: resistance
              value: fire
        - id: serrice-adaptor-gauntlets-toggle-force
          name: Force
          whenOn:
            - type: resistance
              value: force
        - id: serrice-adaptor-gauntlets-toggle-lightning
          name: Lightning
          whenOn:
            - type: resistance
              value: lightning
        - id: serrice-adaptor-gauntlets-toggle-necrotic
          name: Necrotic
          whenOn:
            - type: resistance
              value: necrotic
        - id: serrice-adaptor-gauntlets-toggle-poison
          name: Poison
          whenOn:
            - type: resistance
              value: poison
        - id: serrice-adaptor-gauntlets-toggle-psychic
          name: Psychic
          whenOn:
            - type: resistance
              value: psychic
        - id: serrice-adaptor-gauntlets-toggle-radiant
          name: Radiant
          whenOn:
            - type: resistance
              value: radiant
        - id: serrice-adaptor-gauntlets-toggle-thunder
          name: Thunder
          whenOn:
            - type: resistance
              value: thunder
    resource:
      reset: long
      max:
        type: flat
        value: 1
      id: serrice-adaptor-gauntlets-resource
---
- Every long rest, you can designate a type of damage except bludgeoning, piercing, or slashing. You
gain resistance to it until you take another long rest.
