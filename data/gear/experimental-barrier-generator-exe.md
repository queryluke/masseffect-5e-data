---
rarity: rare
type: omni_tool_program
cost: 0
weight: 0
subType: ''
name: Experimental_Barrier_Generator.exe
installation: false
equippable: true
mechanics:
  - type: action
    name: Experimental Barrier Generator
    resource:
      displayType: counter
      reset: off
      label: beads
      max:
        type: flat
        value: 8
    range:
      short: 90
      aoe:
        size: 15
        type: sphere
    damage:
      - dieCount: 5
        dieType: 4
        tpe: force
    dc:
      save: dex
      base: 13
      proficient: false
---
Convert 10 omni-gel into 1d4+4 black beads that measure <me-distance length="1" tiny /> in diameter but weigh nothing. These beads are held
in place on the user's wrist by the omni-tool's hard light field.

As an action, you can launch a bead at a target location within <me-distance length="90" />. The bead explodes on impact and is destroyed. Each
creature within a <me-distance length="15" adj /> radius of where the bead landed must make a DC 13 Dexterity saving throw or take 5d4 Force damage.
A sphere of transparent biotic energy then encloses that area for 1 minute. Any creature that fails its save and is
completely within the area is trapped inside this sphere. Creatures that succeeded their saves or are partially within
the area are pushed away from the center of the sphere until they are no longer inside it.

Only breathable air can pass through the sphere's wall. No attack or other effect penetrate it.

An enclosed creature can use its action to push against the sphere's wall, moving the sphere up to half the creature's
walking speed.

The sphere can be picked up, and its altered mass causes it to weigh only half a kilogram (~ 1lb). regardless of the
weight of creatures inside.

__Single-use__: Once you use this program, it deletes itself from your omni-tool.
