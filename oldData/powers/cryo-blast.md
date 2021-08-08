---
id: cryo_blast
name: Cryo Blast
level: 1
type: tech
attackType:
- Ranged Attack
- STR save
effect:
- damage
- debuff
damageType:
- cold
castingTime: Action
duration: Instant
concentration: false
distance:
  range: 120
  aoeType:
  aoeDistance:
detonates:
primes: cold
availableClasses:
- engineer
- infiltrator
- sentinel
advancementOptions:
- name: Ice Lance
  description: Transform the blast into a deadly lance. Make a ranged power attack dealing 1d8 cold and 2d4 piercing damage.
    It deals an additional 1d8 and 2d4 for each slot level above the 1st.
- name: Frigid Air
  description: The blast creates a pocket of frigid air that lasts until the end of your next turn. Each creature that
    enters the frozen space for the first time on a turn or ends its turn there becomes primed cold until the end of
    its next turn and takes 2d6 cold damage.
---
Fire a mass of supercooled, subatomic particles that explode in a <me-distance length="5" adj />-radius sphere centered on a point within
range. Each creature within the sphere has its movement reduced by <me-distance length="10"/> until the start of your next turn and must make a
Strength saving throw. On a failed saved, a creature becomes <me-condition id="frozen"/> until the start of your next turn.
A target with shield points has advantage on this saving throw.

If the blast strikes a body of water or a liquid that is principally water (not including water-based creatures), it
freezes the liquid to a depth of <me-distance length="6" tiny/> over an area <me-distance length="30"/>. This ice lasts for 1 minute. Creatures that were
swimming on the surface of frozen water are trapped in the ice. A trapped creature can use an action to make a Strength
check against your power save DC to break free.

__At Higher Levels__: When you cast this power using a power slot of 2nd level or higher, the radius of the blast increases
by <me-distance length="5"/> for each slot level above 1st.
