---
placement: legs
type: heavy
cost: 18700
manufacturer: hahne-kedar
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/0/09/ME3_hahne_kedar_legs.png/revision/latest/scale-to-width-down/100?cb=20120314172009
tags:
  - special
andromeda: false
set: false
rarity: uncommon
name: Lockdown Greaves
flavor: >-
  A pair of leg armor pieces that connect the wearer's boots to the suit's power
  supply, turning the boots into a powerful electromagnet.
mechanics:
  - type: thermal-clip-capacity
    value: 2
  - type: grenade-capacity
    value: 2
  - type: bonus-action
    resource:
      reset: short
    shortDesc: >-
      For the next minute, you may walk up walls, upside down, and gain immunity to being lifted
      if the surface you are walking on is made of metal. Otherwise, gain advantage on saving throws
      to become lifted.
    toggle:
      id: lockdown-greaves
      whenOn:
        - type: condition-immunity
          value: lifted
          note: when you are on a metal surface
        - type: saving-throw
          against: [lifted]
          effect:
            type: advantage
---
- As a bonus action, the wearer can activate the effect of the greaves to stick to the surface they
are walking on, provided it's made of metal. This can aid them in walking up walls, upside down,
etc. If the surface is metal, the user is immune to being lifted, otherwise, they have advantage on
saving throws against being lifted. The effect lasts for 1 minute and can only be used once per
short rest.
