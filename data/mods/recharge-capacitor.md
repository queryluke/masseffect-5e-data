---
rarity: rare
type: armor
cost: 15000
manufacturer: alliance
tags:
  - shield_jumpstart
placement: head
availability:
  - light
  - medium
  - heavy
name: Recharge Capacitor
flavor: >-
  Microwells store part of the energy directed at the armor and use it to jump
  start the kinetic barrier recharge cycle.
mechanics:
  - type: reaction
    name: Recharge Capacitor (mod)
    resource:
      reset: short
    shortDesc: When you take damage, gain {{ shieldRegen }} shield points.
---
Once per short rest, as a reaction to taking damage, you may jump-start your shield regen and immediately gain shield points equal to your regen amount.
