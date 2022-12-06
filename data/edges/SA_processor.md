---
name: Supercharged Processor
mechanics:
  - type: expertise-choice
    profType: skill
    options: true
    selections: 1
  - type: speed-bonus
    value: [walk]
    bonus:
      type: flat
      value: 15
  - type: condition-immunity
    value: stunned
type: supercharged-augments
---
Your walking speed increases by <me-distance length="15" />. You gain expertise in one other skill of your choice, and you cannot become Confused or Stunned.
