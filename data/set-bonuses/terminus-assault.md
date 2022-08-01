---
bonuses:
  - threshold: 2
    text: +1 bonus to melee attack and damage rolls.
    mechanics:
      - type: attack-augment
        attackLimit:
          type: melee
        augmentTypes: [damage, hit]
        bonus:
          type: flat
          value: 1
  - threshold: 4
    text: >-
      You have resistance to cold and fire damage. You have advantage on stealth
      checks against thermal sensors and creatures or devices using infrared
      vision.
    mechanics:
      - type: resistance
        value: cold
      - type: resistance
        value: fire
      - type: skill-check
        value: [stealth]
        effect:
          type: advantage
          note: 'against thermal sensors or infrared vision'
max: 4
---
