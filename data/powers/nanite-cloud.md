---
name: Nanite Cloud
version: 1
level: 1
type: tech
classes:
  - engineer
  - musician
  - sentinel
  - explorer
tags:
  - protection
mechanics:
  - castingTime:
      length: 1
      unit: reaction
      reaction: which you take when you would take acid, cold, fire, lightning, or thunder damage
    attack: false
    dc: false
    conditions: false
    duration:
      length: 1
      unit: round
    concentration: false
    range:
      short: 0
    detonates: false
    primes: false
advancements:
  - id: nanite-grenade
    name: Nanite Grenade
    text: While active, use a bonus action to compress the nanites into a grenade. The grenade remains stable for 1 hour before becoming inert. The grenade has a <me-distance length="30" adj/> range, <me-distance length="10" adj/> blast radius, DC 14 Dexterity saving throw and deals 4d6 damage of the triggering damage type. The grenade deals and additional 2d6 damage for each power level beyond 1st.
    mechanics: []
  - id: aegis
    name: Aegis
    text: You may cast this power as a reaction when a creature within <me-distance length="5" /> of you takes acid, cold, fire, lightning, or thunder damage. Choose up to 3 creatures including yourself within <me-distance length="5" /> of you to gain resistance to the chosen damage type until the start of your next turn, including against the triggering attack.
    mechanics: []
---
Deploy a cloud of fabricated nanites from your omni-tool that swarm and capture incoming energy from an attack, lessening
its effect on you and storing it for your next attack. Until the end of your next turn, you gain resistance to the
triggering damage type, including against the triggering attack.

The next time you hit with a melee attack or single-target, tech power, the target takes an extra 4d6 damage of the triggering
damage type, and the power ends.

__At Higher Levels__. When you cast this power using a power slot of 2nd level or higher, the damage increases by 2d6
for each power slot about the 1st.
