---
name: Living Turret
new: true
mechanics:
  - type: asi-choice
    options: true
    limit: [str, dex]
  - type: fighting-style-choice
    options: true
    limit: [ambidextrous, assault, carnage, close-quarters-shooter, sniper]
    selections: 1
  - type: other
    shortDesc: Reduce movement speed to 0 to engage in two-weapon fighting with non-light weapons until the end of your turn.
prerequisite: Elcor
prereq:
  - type: species
    limit: [elcor]
---
You can balance on your haunches and briefly dual-wield two weapons, becoming a living turret.

- Increase your Dexterity or Strength score by 1, to a maximum of 20.
- At the beginning of your turn, you can reduce your movement speed to 0 to sit on your haunches.
Until the end of your turn, you may engage in two-weapon fighting even if the weapons you are wielding don’t have the
light property.
- Gain one of the following fighting styles: Ambidextrous, Assault, Carnage, Close-Quarters Shooter, or Sniper


