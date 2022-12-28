---
level: 7
klass: sentinel
subclass: artillerist
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
          - model: class-features
            id: reactive-destruction
      toggle:
        options:
          - {}
          - whenOn:
              - {}
              - type: reaction
                name: Attack of Opportunity (Tech Cannon)
                shortDesc: >-
                  You can use a power or cantrip instead of a weapon attack as an attack of opportunity.
                moreInfo:
                  model: class-features
                  id: reactive-destruction
name: Reactive Destruction
---
At 7th level, when your Tech Cannon is active, you can use a power or cantrip instead of a weapon attack as an attack of opportunity.
