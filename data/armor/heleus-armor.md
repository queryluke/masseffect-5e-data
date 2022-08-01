---
placement: body_armor
type: light
cost: 99200
manufacturer: andromeda-initiative
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/1/1b/MEA_Heleus_Defender_Armor.png/revision/latest/scale-to-width-down/350?cb=20180509212323
tags:
  - extra_damage
  - set_bonus
andromeda: true
set: heleus
rarity: spectre
name: Heleus Armor
flavor: >-
  This hardsuit is the ultimate product of Initiative research into Heleus
  Cluster species. Remnant power sources supply angaran hardware in a frame made
  possible by kett bio-enhancements and Pathfinder implants. This armor is
  unequivocally a combat suit, intended for the defense of Initiative and
  angaran colonies
mechanics:
  - type: attack-augment
    attackLimit: {}
    augmentTypes: [damage]
    bonus:
      type: flat
      value: 2
  - type: shields
    capacity:
      type: flat
      value: 5
    regen:
      type: flat
      value: 5
  - type: thermal-clip-capacity
    value: 10
  - type: medi-gel-capacity
    value: 4
  - type: grenade-capacity
    value: 2
---
- +2 to all damage rolls
