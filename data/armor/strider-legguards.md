---
placement: legs
type: medium
cost: 28050
manufacturer: ariake-technologies
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/f/f4/ME3_ariake_technologies_legs.png/revision/latest/scale-to-width-down/100?cb=20120314171912
tags:
  - ability_skill_bonus
  - movement
andromeda: false
set: false
rarity: uncommon
name: Strider Legguards
flavor: >-
  Greaves that use a set of mass effect field generators to alter the wearer's
  gravity, making certain maneuvers much more manageable.
mechanics:
  - type: thermal-clip-capacity
    value: 2
  - type: grenade-capacity
    value: 2
  - type: skill-check
    value: [acrobatics]
    effect:
      type: advantage
  - type: speed-bonus
    value: [walk]
    bonus:
      type: flat
      value: 15
---
- Advantage on Acrobatics checks.
- Increase your walking speed by <me-distance length='15' />.
