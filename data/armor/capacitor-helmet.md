---
placement: head
type: medium
cost: 34000
manufacturer: hahne-kedar
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/2/22/ME3_capacitor_helmet.png/revision/latest/scale-to-width-down/115?cb=20120312191432
tags:
  - ac
  - shield_jumpstart
andromeda: false
set: false
rarity: uncommon
name: Capacitor Helmet
flavor: >-
  A recent design, this Alliance-made helmet stores micro capacitors in its
  structure to replenish spent kinetic barriers. The transpari-plast armor panel
  on its top can be removed to access capacitors for field maintenance.
mechanics:
  - type: ac
    bonus:
      type: flat
      value: 1
  - type: reaction
    name: Capacitor Helmet
    resource:
      reset: short
    shortDesc: When you take damage, gain {{ shieldRegen }} shield points.
---
- +1 AC. Once per short rest, as a reaction to taking damage, you may jumpstart your shield regen
and immediately gain shield points equal to your regen amount.
