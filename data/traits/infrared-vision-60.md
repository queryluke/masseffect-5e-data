---
name: Infrared Vision
species: [geth]
mechanics:
  - type: bonus-action
    name: Toggle infrared vision
    shortDesc: Toggle your infrared vision on or off
    toggle:
      id: infrared-vision-60
      whenOn:
        - type: sense
          sense: infrared-vision
          distance: 60
---
Your optic sensors have built-in enhancements. As a bonus action on each of your turns, you can toggle your
infrared vision on or off.

While on, your sight becomes a gradient map of the heat produced by your surroundings (hotter
objects appear brighter and cooler objects appear darker; you cannot discern color). You can see creatures and objects
in darkness as well as creatures and objects hidden by technological means within <me-distance :length="60" />,
as long those elements are few degrees cooler or warmer than its surroundings.
