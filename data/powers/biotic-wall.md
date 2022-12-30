---
name: Biotic Wall
version: 1
level: 3
type: biotic
tags:
  - control
classes:
  - adept
  - sentinel
  - vanguard
  - explorer
mechanics:
  - castingTime:
      length: 1
      unit: action
    attack: false
    dc: false
    damage: false
    duration:
      length: 10
      unit: minute
    concentration: true
    range:
      short: 120
    detonates: false
    primes: false
advancements:
  - id: lifting-wall
    name: Lifting Wall
    text: If a creature comes within <me-distance length="5" /> of the wall, you can use your reaction to make a pocket of negatively charged space near the creature's location. It must pass a Strength saving throw or become lifted until the end of your next turn.
    mechanics:
      - dc:
          save: str
  - id: shifting-wall
    name: Shifting Wall
    text: As a bonus action, you can either move the wall up to <me-distance length="15" /> in any direction, rotate the wall up to 180 degrees, or reshape the wall within the parameters listed above.
    mechanics: []
---
With an immense positive charge, create an invisible mass effect field that acts as a wall at a point you choose within
range. The wall appears in any orientation you choose, as a horizontal or vertical barrier or at an angle. It can be free
floating or resting on a solid surface. You can form it into a hemispherical dome or a sphere with a radius of up to <me-distance length="10" />,
or you can shape a flat surface made up of ten <me-distance length="10" adj/>-by-<me-distance length="10" adj/>- panels.
Each panel must be contiguous with another panel. In any form, the wall is <me-distance length="1" tiny /> thick.
It lasts for the duration. If the wall cuts through a creature's space when it appears, the
creature is pushed to one side of the wall (your choice which side).

Nothing can physically pass through the wall. It is immune to all damage.
