---
name: Additional Augment
new: true
mechanics:
  - type: model-choice
    options: true
    model: species
    limits:
      - attr: species
        value: quarian
prerequisite: Quarian
prereq:
  - type: species
    limit: [quarian]
---
Choose an augment as listed in the Cybernetic Augmentation trait. You gain all features of that augment, in addition
to your current one.
