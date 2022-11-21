---
madeBy: Helios
name: Noxious Gas
version: 1
level: 1
type: tech
classes:
  - tracker
  - sentinel
  - infiltrator
tags:
  - damage
mechanics:
  - castingTime:
      length: 1
      unit: action
    attack: false
    dc:
      base: 8
      proficient: true
      save: con
    damage:
      - dieCount: 2
        dieType: 6
        type: acid
    conditions: false
    duration:
      length: 1
      unit: minute
    concentration: false
    range:
      short: 60
      aoe:
        type: sphere
        size: 20
    detonates: false
    primes: false
  - damage:
      - dieCount: 4
    range:
      aoe:
        size: 25
  - damage:
      - dieCount: 6
    range:
      aoe:
        size: 30
  - damage:
      - dieCount: 8
    range:
      aoe:
        size: 35
  - damage:
      - dieCount: 10
    range:
      aoe:
        size: 40
  - damage:
      - dieCount: 12
    range:
      aoe:
        size: 45
advancements:
  - id: flammable
    name: Flammable
    text: >-
      The cloud of Noxious gas becomes flammable. If something that deals fire damage hits the cloud, it explodes,
      forcing all creatures inside the cloud to make a Dexterity saving throw, dealing 3d6 fire damage on a fail, or
      half as much on a success, and priming (fire) all creatures inside the cloud. The damage increases
      by 2d6 for each level above 1st.
    mechanics:
      - damage:
          - {}
          - dieCount: 3
            dieType: 6
            type: fire
      - damage:
          - {}
          - dieCount: 5
            dieType: 6
            type: fire
      - damage:
          - {}
          - dieCount: 7
            dieType: 6
            type: fire
      - damage:
          - {}
          - dieCount: 9
            dieType: 6
            type: fire
      - damage:
          - {}
          - dieCount: 11
            dieType: 6
            type: fire
      - damage:
          - {}
          - dieCount: 13
            dieType: 6
            type: fire
  - id: gas-visor
    name: Gas Visor
    text: >-
      You found a way to see through the gas using a special program in your HUD. You have vision over all creatures
      inside the gas, unbothered by the cloud. Additionally, creatures cannot hide from you inside the cloud.
    mechanics: []
---
You fire a canister filled with toxic gas, creating a large cloud of greenish gas in an area within range. It spreads
around corners and the area inside is heavily obscured. All creatures that start their turn inside the gas must make a
Constitution saving throw, or take 2d6 acid damage. The cloud remains there for 1 minute, or until a strong wind
disperses it. When the power ends (You can do this at any time, even when it's not your turn) the canister stops
emitting gas and returns to you. You only have 1 canister, and can thus only have 1 gas cloud active at a time.

Higher level casting: When cast at a higher level, the damage increases by 2d6, and the radius increases by <me-distance length="5" abbr /> for each level above 1st.
