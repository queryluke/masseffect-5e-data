---
madeBy: Helios
name: Fuel Spill
version: 1
level: 1
type: tech
classes:
  - tracker
  - sentinel
  - engineer
  - explorer
tags:
  - debuff
mechanics:
  - castingTime:
      length: 1
      unit: action
    attack: false
    dc:
      base: 8
      proficient: true
      save: dex
    damage:
      - dieCount: 2
        dieType: 6
        type: fire
    conditions: false
    duration:
      length: 10
      unit: minute
    concentration: false
    range:
      short: 40
      aoe:
        type: sphere
        size: 15
    detonates: false
    primes: false
  - damage:
      - dieCount: 4
    range:
      aoe:
        size: 20
  - damage:
      - dieCount: 6
    range:
      aoe:
        size: 25
  - damage:
      - dieCount: 8
    range:
      aoe:
        size: 30
  - damage:
      - dieCount: 10
    range:
      aoe:
        size: 35
  - damage:
      - dieCount: 12
    range:
      aoe:
        size: 40
advancements:
  - id: corrosive-fuel
    name: Corrosive Fuel
    text: >-
      When casting the power, creatures that are in the area take 3d6 acid damage on a fail, or half as much on a success.
    mechanics:
      - damage:
          - {}
          - dieCount: 3
            dieType: 6
            type: acid
  - id: dense-oil
    name: Dense Oil
    text: >-
      Creatures that fail the saving throw now become restrained by the fuel, as its density hinders movement.
      Additionally, the fuel becomes difficult terrain. If a creature moves into the area for the first time,
      they must make a Dexterity saving throw or become restrained. To escape, a creature must now use its
      action to make a Strength check against your power saving DC.
    mechanics: []
---
You use your omni-tool to launch a canister that creates a pool of slick, slippery and flammable fuel within range.
All creatures in the area must make a Dexterity saving throw. On a failed save, they become doused in the fuel.

The fuel remains on the floor for 10 minutes, after which it has evaporated and is no longer flammable. While it
remains on the ground, the area is considered difficult terrain.

If the fuel is hit with fire damage, it ignites, turning the pool of fuel into a large fire, dealing
2d6 fire damage when it ignites, and 2d6 fire damage again when a creature ends its turn in the fire.
Creatures doused in fuel catch fire in the same manner, and continue burning for 1 minute or until the creature or
an ally uses an action to douse themselves.

When the power ends (which you can do at any time, regardless of whose turn it is) the canister returns to you.
You only have 1 canister, and can thus only have 1 active fuel spill at a time.

Higher Level Casting: When casting this power at a higher level, increase the area of the pool by 2m, and both ticks of damage dealt by 2d6.
