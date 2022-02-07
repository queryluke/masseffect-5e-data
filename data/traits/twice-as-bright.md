---
species:
  - salarian
mechanics:
  - type: skill-choice
    options: true
    selections: 2
  - type: tool-choice
    profType: tool
    options: true
    selections: 2
  - type: skill-check
    effect:
      type: other
      note: add a d4 to the roll
    valueLookup:
      model: traits
      id: twice-as-bright
      limit: [skill, tool]

---
