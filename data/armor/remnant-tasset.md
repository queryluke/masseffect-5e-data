---
placement: legs
type: medium
cost: 22400
manufacturer: andromeda-initiative
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/0/06/MEA_Remnant_Reborn_Legs.png/revision/latest/scale-to-width-down/350?cb=20180513015108
tags:
  - shield_jumpstart
  - set_bonus
andromeda: true
set: remnant
rarity: rare
name: Remnant Tasset
flavor: >-
  This armor was designed from scratch by the Initiative using Remnant
  technology. Its servos, microframe computer, and kinetic barrier generators
  are all dependent on Remnant science and artifacts. This resilient and
  regenerative hardsuit has an energy surplus, though its internal systems can
  be difficult to properly monitor.
mechanics:
  - type: reaction
    name: Remnant Tasset
    resource:
      reset: short
    shortDesc: When you take damage, gain {{ shieldRegen }} shield points.
  - type: thermal-clip-capacity
    value: 2
  - type: grenade-capacity
    value: 2
---
- Once per short rest, as a reaction to taking damage, you may jumpstart your shield regen and
immediately gain shield points equal to your regen amount.
