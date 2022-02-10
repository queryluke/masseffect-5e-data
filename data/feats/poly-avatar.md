---
name: Poly-Avatar
new: true
mechanics:
  - type: model-choice
    options: true
    label: Choose an avatar
    model: species
    limits:
      - attr: species
        value: [prothean]
prerequisite: Prothean
prereq:
  - type: species
    limit: [prothean]
---
Choose (or work with your GM to create) a second avatar from the Avatar trait. You gain all features of that avatar,
in addition to your current one.
