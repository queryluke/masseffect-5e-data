---
placement: body_armor
type: light
cost: 27200
manufacturer: hahne-kedar
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/9/9c/Medium-human-Mantis.png/revision/latest/scale-to-width-down/160?cb=20100209162437
tags:
  - special
andromeda: false
set: false
rarity: uncommon
name: Mantis Armor
flavor: >-
  Hahne-Kedar's line of armor that utilizes arm-length, serrated switchblades in
  the greaves meant to hook targets. Don't cut yourself!
mechanics:
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
  - type: reaction
    name: Mantis Armor
    shortDesc: >-
      When you hit a target with a melee weapon attack, deal an additional 1d6 slashing damage. Then,
      you may attempt to grapple the target with advantage on the roll.
    damage:
      - dieType: 6
        dieCount: 1
        type: slashing
---
- Whenever you hit a target with a melee weapon attack, you may use your reaction to activate your
armor's switchblades, dealing an additional 1d6 slashing damage to the target. If you use your
reaction this way, you may then use your bonus action to attempt to grapple the target. You have
advantage on the Strength (Athletics) check.
