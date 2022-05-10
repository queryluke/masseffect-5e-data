---
name: Warp
version: 1
level: 2
type: biotic
classes:
  - adept
  - sentinel
  - vanguard
tags:
  - damage
mechanics:
  - castingTime:
      length: 1
      unit: action
    attack:
      type: ranged
      proficient: true
    dc: false
    damage:
      - dieCount: 3
        dieType: 10
        type: necrotic
    conditions: false
    duration:
      length: 0
      unit: instant
    concentration: false
    range:
      short: 120
    detonates: false
    primes: necrotic
  - damage:
      - dieCount: 5
  - damage:
      - dieCount: 7
  - damage:
      - dieCount: 9
advancements:
  - id: internal-bleeding
    name: Internal Bleeding
    text: The shifting causes internal bleeding. At the start of each of your turns, the target suffers 1d6 damage from blood loss, bypassing its shields. This effect ends if the creature uses medi-gel or if it or another creature passes a DC 10 Wisdom (Medicine) check to stabilize the bleeding.
    mechanics:
      - damage:
          - {}
          - dieCount: 1
            dieType: 6
            type: bleed
  - id: disorient
    name: Disorient
    text: A target hit by warp must pass a Constitution saving throw. On a failed save, the force of warp is so intense the target is stunned until the end of its next turn.
    mechanics:
      - dc:
          base: 8
          proficient: true
          save: con
        notes:
          - 'Hit: CON save (DC {{ dc }}) or stunned'
---
Make a ranged power attack on an organic creature you can see within range. On a hit, you generate a rapidly shifting mass
effect field inside the target dealing 3d10 necrotic damage. In addition,
the target is <me-condition id="primed" sub="necrotic"/> until the end of your next turn. This damage bypasses shields.

__At Higher Levels__: When you cast this power using a power slot of 3rd level or higher, the damage increases by 2d10 for
each slot level above the 2nd.
