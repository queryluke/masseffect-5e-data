---
species:
  - asari
mechanics:
  - type: model-choice
    label: 'Choose two cantrips'
    model: powers
    options: true
    limits:
      - attr: type
        value: [biotic]
      - attr: level
        value: [0]
    selections: 2
    hide: true
    append:
      mod: wis
  - type: model-choice
    label: 'Choose one 1st level power'
    model: powers
    options: true
    limits:
      - attr: type
        value: [biotic]
      - attr: level
        value: [1]
    hide: true
    append:
      mod: wis
      resource:
        displayType: checkbox
---
