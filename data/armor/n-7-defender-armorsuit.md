---
placement: body_armor
type: heavy
cost: 90875
manufacturer: hahne-kedar
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/f/f4/ME3_N7_Defender_Armor.png/revision/latest?cb=20120314194601
tags:
  - shields
  - shield_regen
  - ac
  - item_capacity
  - set_bonus
andromeda: false
set: n-7-defender
rarity: rare
name: N7 Defender Armorsuit
flavor: >-
  The Defender Armor is a variation on the N7 Special Forces’ combat gear, built
  to protect soldiers in long-running engagements where reinforcements may be
  sparse. When the wearer fires a weapon, the suit's computers divert energy
  from the main power cell to the gun's kinetic coils, offering an extra punch.
  The Defender's storage compartments are designed to hold spare thermal clips,
  while capacitors throughout the armor provide extra power to shields during
  critical moments in battle. The armor also comes with an injection system
  built into the suit and neural-linked bio-monitors that help adjust the
  wearer's breathing rate and adrenaline levels.
mechanics:
  - type: shields
    capacity:
      type: flat
      value: 20
    regen:
      type: flat
      value: 10
  - type: thermal-clip-capacity
    value: 18
  - type: medi-gel-capacity
    value: 6
  - type: grenade-capacity
    value: 2
  - type: ac
    bonus:
      type: flat
      value: 1
---
- 20 shields (regen 10).
- +1 AC.
- +8 thermal clip capacity.
- +2 medi-gel capacity.
