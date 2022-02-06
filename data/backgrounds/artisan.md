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
        value: ['BG_armorsmith', 'BG_brewer', 'BG_chemist', 'BG_cook', 'BG_mechanic', 'BG_painter', 'BG_tailor', 'BG_weaponsmith']
---
