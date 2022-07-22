---
placement: head
type: medium
cost: 15600
manufacturer: andromeda-initiative
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/6/6a/MEA_Remnant_Heritage_Helmet.png/revision/latest/scale-to-width-down/350?cb=20180513014645
tags:
  - vision
  - set_bonus
andromeda: true
set: remnant
rarity: rare
name: Remnant Helmet
flavor: >-
  This armor was designed from scratch by the Initiative using Remnant
  technology. Its servos, microframe computer, and kinetic barrier generators
  are all dependent on Remnant science and artifacts. This resilient and
  regenerative hardsuit has an energy surplus, though its internal systems can
  be difficult to properly monitor.
mechanics:
  - type: other
    name: Remnant Helmet Optics
    shortDesc: Toggle your darkvision or infrared-vision on or off, or toggle between the two.
    toggle:
      id: remnant-helmet-toggle
      options:
        - id: remnant-helmet-toggle-darkvision
          name: Darkvision
          whenOn:
            - type: sense
              sense: darkvision
              distance: 60
        - id: remnant-helmet-toggle-infrared-vision
          name: Infrared Vision
          whenOn:
            - type: sense
              sense: infrared-vision
              distance: 60
---
- Darkvision <me-distance length='60' />. Infrared Vision <me-distance length='60' />. You may
toggle between vision types as a free action.
