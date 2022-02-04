---
name: Improved Bio-Electric Ward
new: true
mechanics:
  - type: ac
    bonus:
      type: flat
      value: 1
  - type: other
    resource: {}
    shortDesc: >- 
      When you are reduced to 0 hit points by lightning or cold damage but not killed outright, 
      you can drop to 1 hit point instead.
prerequisite: Angara
prereq:
  - type: species
    limit: [angara]
---
You have honed your bio-electric ward to new heights providing greater defense.
- Your AC increases by 1.
- Once per long rest, if you suffer cold or lightning damage that would reduce you to 0 
 hit points but not kill you outright, you can drop to 1 hit point instead.

