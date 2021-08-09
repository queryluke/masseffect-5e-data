---
startingCredits: 2000
mechanics:
  - type: profs
    subType: skill
    has:
      - medicine
      - science
  - id: scholar_field_of_study
    type: picker
    choices:
      items:
        - id: chemistry
          mechanics:
            - type: profs
              subType: tool
              choices:
                items:
                  - chemists-supplies
                  - brewers-supplies
                count: 1
        - id: astronomy
          mechanics:
            - type: profs
              subType: tool
              has:
                - starship-system-navigation
        - id: engineering
          mechanics:
            - type: profs
              subType: tool
              has:
                - tinkers-tools
        - id: physics
          mechanics:
            - type: profs
              subType: tool
              has:
                - starship-system-drive
        - id: computer_science
          mechanics:
            - type: profs
              subType: tool
              has:
                - starship-system-ews
        - id: biology
          mechanics:
            - type: profs
              subType: tool
              has:
                - medical-kit
        - id: philosophy
          mechanics:
            - type: profs
              subType: tool
              items:
                - musical-instrument
                - gaming-set
              count: 1
        - id: general_studies
          mechanics:
            - type: profs
              subType: tool
              choices:
                items:
                  - brewers-supplies
                  - hacking-tools
                  - starship-system-ssc
                count: 1
      count: 1
---
