---
startingCredits: 1500
mechanics:
  - type: model-choice
    model: subgrounds
    label: Choose a criminal specialty
    options: true
    limits:
      - attr: id
        value: ['assassin', 'blackmailer', 'fence', 'gambler', 'gang-member', 'pickpocket', 'smuggler', 'thief']
  - type: tool
    value: gaming-set
  - type: tool
    value: thieves-tools
---
