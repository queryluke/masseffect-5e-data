---
species:
  - vorcha
mechanics:
  - type: picker
    id: adaptation
    choices:
      items:
        - id: aquatic
          mechanics:
            - type: speed
              has:
                type: swim
                speed: 30
        - id: desert
          mechanics:
            - type: ability
              has:
                ability: con
                bonus: 1
        - id: frozen
          mechanics:
            - type: defenses
              subType: resistance
              has:
                id: cold
        - id: high_gravity
          mechanics:
            - type: ability
              has:
                ability: str
                bonus: 1
        - id: underground
          mechanics:
            - type: sense
              has:
                id: darkvision
                distance: 60
            - type: sense
              has:
                id: blindsight
                distance: 30
        - id: volcanic
          mechanics:
            - type: defenses
              subType: resistance
              has:
                id: fire
        - id: zero_gravity
          mechanics: []
---
