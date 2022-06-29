---
name: Advanced Optics
species: [hardware-loki]
mechanics:
  - type: bonus-action
    name: Toggle Optics
    shortDesc: Toggle your darkvision or infrared-vision on or off, or toggle between the two.
    toggle:
      id: advanced-optics-toggle
      options:
        - id: advanced-optics-toggle-darkvision
          name: Darkvision
          whenOn:
            - type: sense
              sense: darkvision
              distance: 60
        - id: advanced-optics-toggle-infrared-vision
          name: Infrared Vision
          whenOn:
            - type: sense
              sense: infrared-vision
              distance: 60
---
Your optic sensors have two additional optic modes: darkvision 24m (60ft) and infrared vision 24m (60ft). You can
toggle these modes on or off (or between the two) as a bonus action.
