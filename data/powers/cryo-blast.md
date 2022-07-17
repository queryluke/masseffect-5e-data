---
name: Cryo Blast
version: 1
level: 1
type: tech
tags:
  - debuff
classes:
  - engineer
  - infiltrator
  - sentinel
mechanics:
  - castingTime:
      length: 1
      unit: action
    attack: false
    dc:
      save: str
    damage: false
    duration:
      length: 0
      unit: instant
    concentration: false
    range:
      short: 120
      aoe:
        size: 5
        type: sphere
    detonates: false
    primes: false
    conditions: [frozen]
  - range:
      aoe:
        size: 10
  - range:
      aoe:
        size: 15
  - range:
      aoe:
        size: 20
  - range:
      aoe:
        size: 25
  - range:
      aoe:
        size: 30
advancements:
  - id: ice-lance
    name: Ice Lance
    text: Transform the blast into a deadly lance. Make a ranged power attack dealing 1d8 cold and 2d4 piercing damage. It deals an additional 1d8 and 2d4 for each slot level above the 1st.
    mechanics:
      - dc: false
        attack:
          type: ranged
          wp: power
          proficient: true
        damage:
          - dieCount: 1
            dieType: 8
            type: cold
          - dieCount: 2
            dieType: 4
            type: piercing
      - damage:
          - dieCount: 2
            dieType: 8
            type: cold
          - dieCount: 4
            dieType: 4
            type: piercing
      - damage:
          - dieCount: 3
            dieType: 8
            type: cold
          - dieCount: 6
            dieType: 4
            type: cold
      - damage:
          - dieCount: 4
            dieType: 8
            type: cold
          - dieCount: 8
            dieType: 4
            type: piercing
      - damage:
          - dieCount: 5
            dieType: 8
            type: cold
          - dieCount: 10
            dieType: 4
            type: piercing
      - damage:
        - dieCount: 6
          dieType: 8
          type: cold
        - dieCount: 12
          dieType: 4
          type: piercing
  - id: frigid-air
    name: Frigid Air
    text: The blast creates a pocket of frigid air that lasts until the end of your next turn. Each creature that enters the frozen space for the first time on a turn or ends its turn there becomes primed cold until the end of its next turn and takes 2d6 cold damage.
    mechanics:
      - damage:
        - dieCount: 2
          dieType: 6
          type: cold
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
