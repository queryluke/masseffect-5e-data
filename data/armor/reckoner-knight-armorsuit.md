---
placement: body_armor
type: heavy
cost: 144500
manufacturer: armax-arsenal
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/9/9a/ME3_Reckoner_Knight_Armor.png/revision/latest?cb=20120314193603
tags:
  - shields
  - extra_damage
andromeda: false
set: reckoner-knight
rarity: spectre
name: Reckoner-Knight Armorsuit
flavor: >-
  The Reckoner-Knight armor was originally worn by the winners of Earth's Urban
  Combat Championship 2186, the Rhode Island Knights. A military-grade version
  of this equipment was presented to longtime Knight fans at the Alliance's
  Rhode Island base, in thanks for their passionate (and vocal) support during
  the EUCC championship matches. Beneath this armor's medieval-gothic facade lie
  a host of biofeedback systems intended to monitor the wearer's health and
  combat performance. Micro-servos maximize damage done in close-quarters
  combat, while a beefed-up power cell feeds energy into weapons systems to
  increase projectile velocity. Befitting gear originally designed for a
  full-contact sport, a sophisticated shield system also offers the wearer solid
  protection from incoming attacks.
mechanics:
  - type: shields
    capacity:
      type: flat
      value: 30
    regen:
      type: flat
      value: 5
  - type: thermal-clip-capacity
    value: 10
  - type: medi-gel-capacity
    value: 4
  - type: grenade-capacity
    value: 2
  - type: attack-augment
    attackLimit:
      model: weapon
      weaponTypes: [melee]
    augmentTypes: [damage]
    rerollIfLessThan: 3
---
- 30 shields (regen 5).
- When you roll a 1 or 2 on a damage die for an attack you make with a melee weapon, you can reroll
the die and must use the new roll, even if the new roll is a 1 or a 2.
