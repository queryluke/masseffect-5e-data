---
placement: arms
type: heavy
cost: 34225
manufacturer: kett
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/5/51/MEA_Kett_Unity_Arms.png/revision/latest/scale-to-width-down/350?cb=20180510052440
tags:
  - extra_damage
  - attack_bonus
  - set_bonus
andromeda: true
set: kett
rarity: rare
name: Kett Vambraces
flavor: >-
  Although this hardsuit's basic materials-ceramic armor plating and kinetic
  padding-are Initiative standard, kett biotech permeates the overall design and
  feeds directly into the user's nervous system. Kett armor enhances combat
  prowess through chemical regulation and stimulation.
mechanics:
  - type: thermal-clip-capacity
    value: 2
  - type: medi-gel-capacity
    value: 2
  - type: attack-augment
    attackLimit:
      type: melee
      model: weapon
    augmentTypes: [damage, hit]
    bonus:
      type: flat
      value: 1
---
- +1 bonus to melee weapon attack and damage rolls.
