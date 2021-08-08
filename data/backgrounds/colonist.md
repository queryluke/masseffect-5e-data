---
startingCredits: 500
mechanics:
  - id: colonist-tool
    type: profs
    subType: tool
    choices:
      items: [artisan, medical-kit, tinkers-tools, vehicles]
      count: 1
  - id: colonist-skill
    type: profs
    subType: skill
    has:
      - survival
    choices:
      items: [medicine, science, vehicle-handling]
      count: 1
---
