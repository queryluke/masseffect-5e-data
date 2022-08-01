---
placement: head
type: medium
cost: 9350
manufacturer: andromeda-initiative
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/8/83/MEA_Deep_Space_Explorer_Helmet.png/revision/latest/scale-to-width-down/700?cb=20180513201333
tags:
  - vision
  - set_bonus
andromeda: false
set: deep-space-explorer
rarity: spectre
name: Deep Space Explorer Helmet
flavor: >-
  The Andromeda Initiative's mission is one of discovery and exploration, as
  well as colonization. Readying personnel to journey into harsh
  environments-and even the void of space was always part of the plan. Thus, the
  Initiative's custom Deep Space Explorer (DSE) hardsuit is equipped with
  multiple environment seals, failsafes, a hefty liquid oxygen supply, a
  formidable kinetic barrier generator, and an array of scientific instruments.
  Although many were built, most were mysteriously lost en route to Andromeda.
mechanics:
  - type: other
    name: Toggle Deep Space Explorer Helmet Optics
    shortDesc: Toggle your darkvision or infrared-vision on or off, or toggle between the two.
    toggle:
      id: dse-helmet-toggle
      options:
        - id: dse-helmet-toggle-darkvision
          name: Darkvision
          whenOn:
            - type: sense
              sense: darkvision
              distance: 30
        - id: dse-helmet-infrared-vision
          name: Infrared Vision
          whenOn:
            - type: sense
              sense: infrared-vision
              distance: 30
---
- Darkvision <me-distance length='30' />. Infrared Vision <me-distance length='30' />. You can
toggle between the 2 vision types as a free action.
