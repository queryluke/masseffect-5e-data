---
level: 2
klass: engineer
subclass: medic
name: Repair Drone
mechanics:
  - type: skill-choice
    options: true
    selections: 1
    newIf: medicine
  - type: augment
    value:
      model: engineer
      id: drone
    limit: [action]
    merge:
      shortDesc: Spent 1 tech point to summon an assault, combat, defense, disruption, recon, repair, or rocket drone. It gains additional hit points equal to twice your engineer level and you add your proficiency bonus to its rolls.
---
At 2nd level, you gain proficiency in Medicine. If you are already proficient in Medicine, you may choose
another skill to become proficient in.

Add the Repair drone to the list of drones available for you to summon.
