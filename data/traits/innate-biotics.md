---
species:
  - asari
mechanics:
  - type: power-choice
    label: 'Choose two cantrips'
    options: true
    limit:
      type: [biotic]
      level: [0]
    mod: wis
    selections: 2
  - type: power-choice
    label: 'Choose one 1st level power'
    options: true
    limit:
      type: [biotic]
      level: [1]
    mod: wis
    resource:
      displayType: checkbox
---
