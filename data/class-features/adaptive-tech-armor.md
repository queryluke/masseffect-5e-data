---
level: 18
klass: sentinel
subclass: juggernaut
name: Adaptive Tech Armor
mechanics:
  - type: augment
    value:
      model: sentinel
      id: tech-armor
      limit: [bonus-action]
    merge:
      moreInfo:
        additional:
          - {}
          - {}
          - {}
          - model: class-features
            id: adaptive-tech-armor
      toggle:
        whenOn:
          - {}
          - {}
          - {}
          - {}
          - {}
          - {}
          - {}
          - type: resistance
            value: tech-armor
            label: Tech Armor
            note: 'Your tech armor hit points gain resistance to the last damage type it took'
---
At 18th level, when your tech armor takes damage, it gains resistance to that damage type. If more than one
type of damage happens simultaneously, tech armor gains resistance to both.
