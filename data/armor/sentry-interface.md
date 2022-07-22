---
placement: head
type: medium
cost: 17000
manufacturer: hahne-kedar
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/b/b7/ME3_sentry_interface.png/revision/latest/scale-to-width-down/115?cb=20120312190726
tags:
  - shield_jumpstart
andromeda: false
set: false
rarity: uncommon
name: Sentry Interface
flavor: >-
  This visor works with the Sentry system, a software application that optimizes
  an armor suit's microframe computer. When the Sentry system is running, more
  power can be devoted to shield management.
mechanics:
  - type: reaction
    name: Capacitor Helmet
    resource:
      reset: short
    shortDesc: When you take damage, gain {{ shieldRegen }} shield points.
---
- Once per short rest, as a reaction to taking damage, you may jumpstart your shield regen and
immediately gain shield points equal to your regen amount.
