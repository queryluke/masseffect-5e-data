---
placement: head
type: light
cost: 38250
manufacturer: cerberus-skunkworks
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/5/5d/Cerberus_Shade_Female.png/revision/latest/scale-to-width-down/350?cb=20160619125819
tags:
  - extra_damage
  - set_bonus
andromeda: false
set: cerberus-spirit
rarity: spectre
name: Cerberus Spirit Helmet
flavor: >-
  Spirit armor is worn by Cerberus Phantoms fortunate enough to be biotic or for
  those who are skilled enough to use highly technical attacks. The armor has
  small gains for shield strength and regeneration, but where it truly shines is
  in its capacity to amplify biotic amps and omni-tools. These attacks hit
  significantly harder and more often, allowing the Phantom to dismantle
  heavily-armored targets.
mechanics:
  - type: reroll-damage
    limits:
      source: power
      types: [tech, biotic]
    ifLessThan: 3
---
- When you roll a 1 or a 2 on a damage die for an attack you make with a biotic or tech power, you
can reroll the die and must use the new roll, even if the new roll is a 1 or a 2.
