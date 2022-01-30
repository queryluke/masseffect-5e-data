---
startingCredits: 1500
mechanics:
  - type: skill
    value: insight
  - type: skill
    value: persuasion
  - type: model-choice
    model: subgrounds
    label: Choose a trade
    options: true
    limits:
      - attr: id
        value: ['armorsmith', 'brewer', 'chemist', 'cook', 'mechanic', 'painter', 'tailor', 'weaponsmith']
---
