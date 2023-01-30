---
name: Justice
version: 1
level: 0
type: combat
tags:
  - damage
classes:
  - soldier
mechanics:
  - castingTime:
      length: 1
      unit: attack
    attack:
      type: ranged
      wp: weapon
      proficient: true
      mod: dex
    duration:
      length: 0
      unit: instant
    range:
      short: 30
    damage:
      - dieCount: 2
        dieType: 6
    detonates: false
    primes: false
    resource:
      reset: long
      max:
        type: flat
        value: 3
  - damage:
      - dieCount: 4
  - damage:
      - dieCount: 6
  - damage:
      - dieCount: 8
advancements:
  - id: brutal
    name: Brutal
    text: >-
      You may pull yourself to the target creature instead of pulling your target to you, if the creature
      is Medium sized or smaller. You may then also perform an Attack as a Bonus Action after using this power on the same target.
    mechanics: []
  - id: neutralise
    name: Neutralise
    text: >-
      Your attack does not pull anymore, instead you'll temporarily attach to your enemy with your Justice hook and
      send a high powered shock through your omni-tool. The damage type of this attack changes to lightning
      and loses your equipped weapon's damage. If this attack hits an organic creature,
      that creature must succeed on a Constitution saving throw (DC = 8 + Dexterity modifier + Proficiency bonus) or
      become stunned until the end of their next turn.
    mechanics:
      - damage:
          type: lightning
        dc:
          base: 8
          proficient: true
          save: con
          mod: dex
---
Using a special program installed on your omni-tool, a long grappling hook fires from it towards a creature within range.
Make a ranged weapon attack roll on a creature within range. On a hit against a Medium sized creature or smaller, you
pull your target to an empty space within <me-distance length="5" /> of you on the square closest to their original
location. On a hit against a Large sized creature or larger, pull yourself to the target to an empty space within
<me-distance length="5" /> of the target closest to your original location. After the movement has occurred,
deal your equipped main hand melee weapon or equipped omni-weapon's damage + 2d6 bonus damage.

You may use this omni-tool's grappling hook three times until the special power supply runs out and you must spend a
long rest to recharge the equipment in order to use them again.

This bonus damages increases at 5th level (4d6), 11th level (6d6) and 17th level (8d6).
