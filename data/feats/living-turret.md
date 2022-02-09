---
name: Living Turret
new: true
mechanics:
  - type: asi-choice
    options: true
    limit: [str, dex]
  - type: model-choice
    model: fighting-styles
    options: true
    limit: [FS_ambidextrous, FS_assault, FS_carnage, FS_close-quarters-shooter, FS_sniper]
  - type: other
    shortDesc: >-
      At the beginning of your turn, you can reduce your movement speed to 0.
      Until the end of your turn, you may engage in two-weapon fighting even
      if the weapons you are wielding don’t have the light property.
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
