---
name: Dominate
version: 1
level: 3
type: biotic
tags:
  - control
classes:
  - adept
mechanics:
  - castingTime:
      length: 1
      unit: action
    attack: false
    dc:
      save: wis
    damage: false
    conditions: [charmed]
    duration:
      length: 1
      unit: minute
    concentration: true
    range:
      short: 90
      aoe: false
    detonates: false
    primes: false
  - duration:
      length: 10
      unit: minute
  - duration:
      length: 1
      unit: hour
advancements:
  - id: total-control
    name: Total Control
    text: You take the dominated creature's action. You may use its powers and abilities.
    mechanics: []
  - id: damage
    name: Damage
    text: While the creature is dominated, it takes 4d6 psychic damage at the end of its turn. This damage bypasses shields and does not trigger an opportunity to end Dominate.
    mechanics:
      - damage:
          - dieCount: 4
            dieType: 6
            type: psychic
---
Target an organic creature within <me-distance length="90" />. It must succeed on a Wisdom saving throw or it becomes Dominated (it is considered
<me-condition id="charmed"/> and can't use powers or abilities). If you or creatures that are friendly to you are fighting it, it has advantage
on the saving throw.

On its turn, the dominated creature attacks the closest creature hostile to the power caster, making a ranged weapon
attack or melee attack if it does not have a weapon. If there are no hostile creatures within range, the dominated
creature uses its turn to dash towards the closest hostile creature.

Each time the dominated creature takes damage, it makes a new Wisdom saving throw against the power. If the saving throw
succeeds, the power ends.

__At Higher Levels__. When you cast this power using a 4th-level power slot, the duration is concentration, up to 10
minutes. When you use a 5th-level power slot, the duration is concentration, up to 1 hour.
