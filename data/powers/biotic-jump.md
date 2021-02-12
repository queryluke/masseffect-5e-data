---
id: biotic_jump
name: Biotic Jump
createdBy: Ben McPherson
level: 0
type: biotic
attackType: []
effect:
- buff
damageType: []
castingTime: Reaction, which you take when you jump as part of your movement
duration: Instant
concentration: false
distance:
  range: Self
  aoeType:
  aoeDistance:
detonates:
primes:
availableClasses:
- adept
- vanguard
advancementOptions:
- name: Hover
  description: At any point during your jump, you can end your movement and hover in place. At the start of your next
    turn, you float to the ground, taking half your movement for that turn.
- name: Safe Landing
  description: When landing in Difficult Terrain, you automatically succeed on your Dexterity
    (Acrobatics) check to remain standing. Additionally, if you would land within an area that causes a Dexterity
    saving throw, you have advantage on the save.
---
Your Spellcasting Ability determines how far you can jump.

__Long Jump__. When you make a long jump, you cover a number of <me-distance length="0" /> up to your Spellcasting Ability score. If jumping
over an obstacle, subtract <me-distance length="5" /> of distance per <me-distance length="10" /> of the obstacle's height.

__High Jump__. When you make a high jump, you leap into the air a number of <me-distance length="0" /> equal to <me-distance length="5" numOnly /> + your Spellcasting Modifier.
