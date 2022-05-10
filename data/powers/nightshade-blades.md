---
name: Nightshade Blades
version: 1
level: 0
type: combat
classes:
  - infiltrator
  - soldier
  - vanguard
tags:
  - damage
mechanics:
  - castingTime:
      length: 1
      unit: attack
    attack:
      type: ranged
      proficient: true
      mod: dex
    dc: false
    damage:
      - dieCount: 1
        dieType: 12
        type: poison
    conditions: poisoned
    duration:
      length: 0
      unit: instant
    concentration: false
    range:
      short: 30
    resource:
      reset: long
      max:
        type: flat
        value: 3
    notes:
      - 'DC {{ 8 + profBonus }} CON or poisoned'
  - damage:
      - dieCount: 2
  - damage:
      - dieCount: 3
  - damage:
      - dieCount: 4
advancements:
  - id: paralyze
    name: Paralyze
    text: A creature that fails the Constitution saving throw becomes paralyzed until the end of your next turn.
    mechanics:
      - notes:
          - 'DC {{ 8 + profBonus }} CON or paralyzed 1 RND'
  - id: powerful-poison
    name: Powerful Poison
    text: The creature has disadvantage on its Constitution saving throw.
    mechanics:
      - notes:
          - 'DC {{ 8 + profBonus }} CON (disadvantage) or poisoned'
---
Your omni-tool is equipped with three microscopic, poison-tipped blades that are able to pierce through shields and armor.
Make a ranged weapon attack on a creature you can see within range, expending one blade. You add your proficiency bonus
to this roll. On a hit, the target takes 1d12 poison damage and must succeed on a Constitution saving throw (DC 8 + proficiency bonus)
or becomes <me-condition id="poisoned"/> until it finishes a short rest. All damage caused by nightshade blades bypasses shields.

You must be within melee range and use an action to recover a blade, at which point you can reapply your poison and reload
it into your omni-tool during a short rest. If you fail to recover your blades, you can create 3 new ones for 1 hour of work
during a long rest.

This feature's damage increases by 1d12 when you reach 5th level (2d12), 11th level (3d12), 17th level (4d12).
