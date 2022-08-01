---
name: Shocking Grasp
version: 1
level: 1
type: tech
classes:
  - engineer
  - infiltrator
tags:
  - damage
mechanics:
  - castingTime:
      length: 1
      unit: action
    attack:
      type: melee
      wp: power
      proficient: true
    dc:
      base: 8
      proficient: true
      save: con
    damage:
      - dieCount: 1
        dieType: 6
        type: lightning
    conditions: [stunned]
    duration:
      length: 0
      unit: instant
    concentration: false
    range:
      short: 5
    detonates: false
    primes: lightning
    notes:
      - 'Hit: CON save (DC {{ dc }}) or stunned'
  - damage:
      - dieCount: 3
  - damage:
      - dieCount: 5
  - damage:
      - dieCount: 7
  - damage:
      - dieCount: 9
  - damage:
      - dieCount: 11
advancements:
  - id: restoring-shock
    name: Restoring Shock
    text: Gain shield points equal to half the damage dealt. This cannot increase your shield points beyond their maximum capacity.
    mechanics: []
  - id: improved-shock
    name: Improved Shock
    text: Increase the range to <me-distance length="10" /> and damage to d8.
    mechanics:
      - range:
          short: 10
        damage:
          - dieType: 8
---
Send an electric shock from your omni-tool to a creature you try to touch. Make a melee power attack against the target.
You have advantage on the attack roll if the target is wearing armor. On a hit, the target becomes
<me-condition id="primed" sub="lightning"/> until the end of your next turn and takes 1d6 lightning damage.
Then the target must succeed on a Constitution saving throw or become stunned until the end of your next turn. A target
with at least 1 shield point has advantage on this saving throw.

__At Higher Levels__: When you cast this power using a power slot of 2nd level or higher, the damage increases
by 2d6 for each slot level above 1st.
