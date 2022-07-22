---
placement: head
type: light
cost: 46750
manufacturer: kassa-fabrication
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/e/ee/ME3_recon_hood.png/revision/latest/scale-to-width-down/115?cb=20120312191621
tags:
  - ac
  - vision
andromeda: false
set: false
rarity: uncommon
name: Recon Hood
flavor: >-
  A hood issued to covert action teams, this model's optic display interfaces
  with most small arm's auto-targeting software, linking hand and eye for
  improved accuracy and increased weapon damage. Ballistic-mesh fabric and
  composite ceramic plating provide necessary armor, and the integral air filter
  helps in hostile environments.
mechanics:
  - type: ac
    bonus:
      type: flat
      value: 1
  - type: other
    name: Recon Hood Optics
    shortDesc: Toggle your darkvision or infrared-vision on or off, or toggle between the two.
    toggle:
      id: recon-hood-toggle
      options:
        - id: recon-hood-toggle-darkvision
          name: Darkvision
          whenOn:
            - type: sense
              sense: darkvision
              distance: 150
        - id: recon-hood-toggle-infrared-vision
          name: Infrared Vision
          whenOn:
            - type: sense
              sense: infrared-vision
              distance: 150
---
- +1 AC.
- Infrared Vision <me-distance length='150' />. Darkvision <me-distance length='150' />. You can
toggle between vision types as a free action.
