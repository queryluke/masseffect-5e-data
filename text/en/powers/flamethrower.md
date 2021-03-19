---
name: Flamethrower
reactionQualifier: false
advancements:
  concentrated-burn:
    name: Concentrated Burn
    text: Increase the damage to d12 and the distance to <me-distance length="30" />, but the area-of-effect is now a <me-distance length="50" adj /> wide line instead of a cone.
  exhaust:
    name: Exhaust
    text: The flames create a thick smoke in an <me-distance length="20" adj /> cube that must encompass the cone. The area is considered heavily obscured until the end of your next turn.
---
Overload your omni-tool's acetylene torch, spewing flames in front of you. Each creature within an <me-distance length="20" adj /> cone is
<me-condition id="primed" sub="fire"/> until the start of your next turn and must make a Dexterity saving throw. A creature
takes 6d10 fire damage on a failed save or half as much damage on a successful one.

At the start of your turn, you may spend your action and 1 additional tech point to continue casting this power. Your
movement speed is <me-distance length="5" /> while casting it in this manner. The power ends if you become incapacitated.

__At Higher Levels__: When you cast this power using a power slot of 4th level or higher, the damage increases by 2d10
for each slot level above 3rd.
