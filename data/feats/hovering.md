---
name: Hovering
new: true
mechanics:
  - type: speed
    speed: fly
    distance: 40
  - type: other
    resource:
      reset: short
      max:
        type: proficiency
    shortDesc: >-
      At the end of your turn, if you are in the air, you can hover until the start of your next turn. 
prerequisite: Awakened Collector
prereq:
  - type: species
    limit: [awakened-collector]
---
You’ve strengthened your wings to allow you to maneuver more deftly and hover for short periods.

- Your flying speed becomes 16 meters.
- At the end of your turn, if you are in the air, you can hover until the start of your next turn.
You can hover a number of times between short rests equal to your proficiency bonus.
