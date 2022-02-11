---
name: Regenerative Burst
new: true
mechanics:
  - type: asi
    ability: con
    amount: 1
  - type: other
    resource:
      displayType: hit-dice
      label: false
    shortDesc: >-
      Whenever you take the Dodge action in combat, you can spend one Hit Die to heal
      yourself equal to the roll + {{ conMod }}
prerequisite: Vorcha
prereq:
  - type: species
    limit: [vorcha]
---
You have adapted to quickly regenerate minor wounds, given a brief reprieve from injury.

- Increase your Constitution score by 1, to a maximum of 20.
- Whenever you take the Dodge action in combat, you can spend one Hit Die to heal yourself. Roll the
die, add your Constitution modifier, and regain a number of hit points equal to the total
(minimum of 1).
