---
species:
  - quarian
mechanics:
  - id: cybernetic_augmentation
    type: picker
    choices:
      items:
        - id: cerebral
          mechanics:
            - type: ability
              has:
                ability: int
                bonus: 1
            - type: profs
              subType: skill
              choices:
                items:
                  - electronics
                  - engineering
                  - investigation
                  - science
                count: 1
        - id: muscular
          mechanics:
            - type: ability
              has:
                ability: dex
                bonus: 1
            - type: profs
              subType: skill
              choices:
                items:
                  - acrobatics
                  - athletics
                count: 1
        - id: ocular
          mechanics:
            - type: sense
              has:
                id: darkvision
                distance: 60
        - id: visceral
          mechanics:
            - type: ability
              has:
                ability: con
                bonus: 2


---
