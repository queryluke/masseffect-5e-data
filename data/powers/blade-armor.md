---
name: Blade Armor
version: 1
level: 0
type: combat
tags:
  - damage
  - protection
classes:
  - soldier
mechanics:
  - castingTime:
      length: 1
      unit: bonus_action
    altCasting:
      - length: 1
        unit: reaction
        reaction: which you take when you are dealt damage
    attack:
      type: melee
      proficient: true
      mod: str
    dc: false
    damage:
      - dieCount: 1
        dieType: 6
        mod: str
        type: piercing
      - dieCount: 1
        dieType: 6
        type: piercing
    duration:
      length: 1
      unit: minute
    range:
      short: 0
    detonates: false
    primes: false
    resource:
      reset: short
      max:
        type: flat
        value: 1
  - damage:
      - dieCount: 2
  - damage:
      - dieCount: 3
  - damage:
      - dieCount: 4
advancements:
  - id: poisoned-armor
    name: Poisoned Armor
    text: Creatures hit by your blade armor must succeed on a DC 14 Constitution saving throw or become poisoned for 1 hour.
    mechanics:
      - notes:
          - DC 14 or poisoned 1H
  - id: retribution
    name: Retribution
    text: When a creature within <me-distance length="5" /> of you hits you with a melee attack while blade armor is active, you may use your reaction to make a melee weapon attack with blade armor against the creature.
    mechanics: []
---
As a bonus action or as a reaction to taking damage, you reinforce your armor with razor-sharp blades that damage
nearby enemies. Until the power ends, you AC increases by 2 but you are unable to Dodge and have disadvantage on Dexterity
saving throws. You can use a bonus action to deactivate blade armor.

While blade armor is active, it is considered a melee weapon that deals 1d6 piercing damage. If a creature is grappled by
you, you have advantage on attack rolls made with blade armor against the grappled creature.

You have advantage on your Strength (Athletics) to grapple and deal 1d6 piercing damage when you grapple the target.
A creature that is grappled by you while blade armor is active takes 1d6 piercing damage each time it attempts to
escape from the grapple.

You must finish a long rest before you can use this ability again.

Blade armor's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), 17th level (4d6).
