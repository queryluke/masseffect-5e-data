---
name: Tentacle Blender
new: true
mechanics:
  - type: asi
    ability: dex
    amount: 1
  - type: action
    range:
      short: 0
      aoe:
        type: sphere
        size: 5
    dc:
      base: 8
      proficient: true
      mod: dex
      save: dex
    shortDesc: >-
      Each creature within <me-distance length="5" abbr /> must succeed on a DC {{ dc }} DEX saving throw or
      suffer {{ tentacleBlender }} damage.
prerequisite: Hanar
prereq:
  - type: species
    limit: [hanar]
---
You’ve practiced an effective maneuver to hit multiple enemies simultaneously, keeping them at bay.

- Increase your Dexterity by 1, to a maximum of 20.
- As an action, you can make a special Tentacle Blender attack. Each creature within a <me-distance length="5" adj /> radius
centered on you must make a Dexterity saving throw. The DC of the saving throw is equal to 8 + your Dexterity modifier
+ your proficiency bonus. On a failed save, a creature suffers damage equal to the total weapon damage of each melee
weapon you are wielding, plus 1d4 bludgeoning damage for each ranged weapon you are wielding, plus 1d4 poison damage
for each empty tentacle. You do not add your ability modifiers to any of the damage rolls.



