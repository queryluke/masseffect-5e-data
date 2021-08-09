---
startingCredits: 1500
mechanics:
  - type: profs
    subType: skill
    has:
      - insight
      - persuasion
  - id: artisan_tool
    type: picker
    choices:
      items:
        - id: armorsmith
          mechanics:
            - type: profs
              subType: tool
              has:
                - armorsmiths-workbench
        - id: brewer
          mechanics:
            - type: profs
              subType: tool
              has:
                - brewers-supplies
        - id: chemist
          mechanics:
            - type: profs
              subType: tool
              has:
                - chemists-supplies
        - id: cook
          mechanics:
            - type: profs
              subType: tool
              has:
                - cooks-utensils
        - id: mechanic
          mechanics:
            - type: profs
              subType: tool
              choices:
                items:
                  - tinkers-tools
                  - starship-system-drive
                count: 1
        - id: painter
          mechanics:
            - type: profs
              subType: tool
              has:
                - painters-supplies
        - id: tailor
          mechanics:
            - type: profs
              subType: tool
              has:
                - tailors-tools
        - id: weaponsmith
          mechanics:
            - type: profs
              subType: tool
              has:
                - weaponsmiths-workbench
      count: 1
---
