---
startingCredits: 1500
mechanics:
  - type: profs
    subType: skill
    has:
      - insight
      - persuasion
  - id: artisan-tool
    type: picker
    choices:
      items:
        - title: armorsmith
          type: profs
          subType: tool
          has:
            - armorsmiths-workbench
        - title: brewer
          type: profs
          subType: tool
          has:
            - brewers-supplies
        - title: chemist
          type: profs
          subType: tool
          has:
            - chemists-supplies
        - title: cook
          type: profs
          subType: tool
          has:
            - cooks-utensils
        - title: mechanic
          type: profs
          subType: tool
          choices:
            items:
              - tinkers-tools
              - starship-system-drive
            count: 1
        - title: painter
          type: profs
          subType: tool
          has:
            - tailors-tools
        - title: weaponsmith
          type: profs
          subType: tool
          has:
            - weaponsmiths-workbench
      count: 1
---
