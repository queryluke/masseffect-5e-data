---
level: 18
klass: sentinel
subclass: juggernaut
name: Adaptive Tech Armor
mechanics:
  - type: augment
    value:
      model: class-features
      id: tech-armor
      limit: [bonus-action]
    merge:
      toggle:
        whenOn:
          - {}
          - {}
          - {}
          - type: augment
            value:
              model: class-features
              id: tech-armor
              limit: [bonus-action]
            merge:
              moreInfo:
                additional:
                  - []
                  - []
                  - []
                  - model: class-features
                    id: adaptive-tech-armor
              shortDesc: >-
                +1 AC. Immunity to critical hits. Each hostile creature within range must succeed on a DC {{ dc }} Wisdom
                saving throw (advantage for synthetic creatures) or be compelled to attack you while tech armor is active.
                Creatures make a new save when dealt damage from a source other than you.
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
