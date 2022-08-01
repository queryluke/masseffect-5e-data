---
placement: head
type: medium
cost: 16850
manufacturer: andromeda-initiative
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/1/12/MEA_Initiative_Recon_Helmet.png/revision/latest/scale-to-width-down/350?cb=20180505224239
tags:
  - vision
  - set_bonus
andromeda: false
set: initiative
rarity: uncommon
name: Initiative Helmet
flavor: >-
  Standard-issue Andromeda Initiative hardsuits are designed for exploration as
  much as combat, combining jump-jets, high-grade external and internal sensors,
  and a variety of atmospheric filters with the usual kinetic barrier generators
  and ceramic armor plating. Personnel equipped in these suits can enter and
  leave alien biomes without fear of contamination or hostile wildlife.
mechanics:
  - type: other
    name: Toggle Initiate Helmet Optics
    shortDesc: Toggle your darkvision or infrared-vision on or off, or toggle between the two. Additionally, noxious air is breathable.
    toggle:
      id: initiative-helmet-toggle
      options:
        - id: initiate-helmet-toggle-darkvision
          name: Darkvision
          whenOn:
            - type: sense
              sense: darkvision
              distance: 30
        - id: initiate-helmet-toggle-infrared-vision
          name: Infrared Vision
          whenOn:
            - type: sense
              sense: infrared-vision
              distance: 30
---
- Infrared Vision <me-distance length='25' />. Darkvision <me-distance length='25' />. You can
toggle between the 2 vision types as a free action.
- Noxious air becomes breathable.
