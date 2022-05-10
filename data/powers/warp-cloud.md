---
name: Warp Cloud
version: 1
level: 1
type: biotic
classes:
  - adept
  - vanguard
tags:
  - damage
mechanics:
  - castingTime:
      length: 1
      unit: action
    attack: false
    dc: false
    damage:
      - dieCount: 4
        dieType: 4
        type: necrotic
    conditions: false
    duration:
      length: 1
      unit: minute
    concentration: true
    range:
      short: 60
      aoe:
        type: cube
        size: 5
    detonates: false
    primes: necrotic
  - damage:
      - dieCount: 8
  - damage:
      - dieCount: 12
  - damage:
      - dieCount: 16
  - damage:
      - dieCount: 20
advancements:
  - id: burst
    name: Burst
    text: As a bonus action, you can end this power and force each creature within <me-distance length="5" /> of the cloud to make a Dexterity saving throw. A creature takes 4d4 force damage on a failed save or half as much on a successful one. This damage increases by 4d4 force damage per power level.
    mechanics:
      - altCasting:
          - length: 1
            unit: bonus_action
  - id: shift
    name: Shift
    text: As a bonus action, you can move this cube of warp energy up to <me-distance length="10" /> in any direction you choose. It can pass through solid objects, but you can only control it's movement while you have line of sight.
    mechanics:
      - altCasting:
          - length: 1
            unit: bonus_action
---
Target a point within range, creating a highly-concentrated warp field in a <me-distance length="5" adj/> cube. A creature takes
4d4 necrotic damage when it enters the power area for the first time on a turn or starts its turn there. A creature
within the cloud is <me-condition id="primed" sub="necrotic"/>.

__At Higher Levels__. When you cast this power using a power slot of 2nd level or higher, the damage increases by 4d4
for each slot level above 1st.
