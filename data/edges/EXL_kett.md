---
name: None
mechanics:
  - type: asi
    ability: con
    amount: 2
  - type: asi-choice
    options: true
    limit: [str, dex, int, wis, cha]
  - type: skill-choice
    options: true
    selections: 2
type: fighting-styles

---
When a creature you can see attacks a target other than you that is within <me-distance length="5" /> of you, you can use your reaction and expend one barrier tick to impose disadvantage on the attack roll. If the attack hits, the damage is reduced by your barrier tick roll.
