---
name: Biotic Jump
version: 1
level: 0
type: biotic
tags:
  - buff
classes:
  - adept
  - vanguard
mechanics:
  - castingTime:
      length: 1
      unit: reaction
      reaction: which you take when you jump as part of your movement
    attack: false
    dc: false
    damage: false
    duration:
      length: 0
      unit: instant
    concentration: false
    range:
      short: 0
    detonates: false
    primes: false
advancements:
  - id: hover
    name: Hover
    text: >-
      At any point during your jump, you can end your movement and hover in place. At the start of your next turn, you float to the ground, taking half your movement for that turn.
    mechanics: []
  - id: safe-landing
    name: Safe Landing
    text: >-
      When landing in Difficult Terrain, you automatically succeed on your Dexterity (Acrobatics) check to remain standing. Additionally, if you would land within an area that causes a Dexterity saving throw, you have advantage on the save.
    mechanics: []
---
Your powercasting ability determines how far you can jump.

__Long Jump__. When you make a long jump, you cover a number of <me-distance length="0" /> up to your powercasting ability score. If jumping
over an obstacle, subtract <me-distance length="5" /> of distance per <me-distance length="10" /> of the obstacle's height.

__High Jump__. When you make a high jump, you leap into the air a number of <me-distance length="0" /> equal to <me-distance length="5" numOnly /> + your powercasting modifier.
