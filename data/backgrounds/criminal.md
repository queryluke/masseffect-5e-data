---
startingCredits: 1500
mechanics:
  - type: model-choice
    model: subgrounds
    label: Choose a criminal specialty
    options: true
    limits:
      - attr: id
        value: ['BG_assassin', 'BG_blackmailer', 'BG_fence', 'BG_gambler', 'BG_gang-member', 'BG_pickpocket', 'BG_smuggler', 'BG_thief']
  - type: tool
    value: gaming-set
  - type: tool
    value: thieves-tools
---
