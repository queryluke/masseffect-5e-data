---
mechanics:
  - type: action
    layout: attack
    name: ML-77 Missile Launcher
    group: Heavy Weapons
    resource:
      id: ml-77-missile-launcher
      max:
        type: flat
        value: 6
      reset: manual
      label: charges
    damage:
      - dieCount: 6
        dieType: 12
        type: thunder
    dc:
      save: dex
      base: 14
      proficient: false
    range:
      short: 150
      aoe:
        size: 10
        type: cube
image: https://vignette.wikia.nocookie.net/masseffect/images/e/e7/Codex_ME2_-_Missile_Launcher.png/revision/latest/scale-to-width-down/200?cb=20140823053914
rarity: uncommon
type: heavy_weapon
cost: 29500
weight: 20
subType: ''
charges: 6
name: ML-77 Missile Launcher
equippable: true
---
As an Attack, choose a creature within <me-distance length="150" /> that you can see and begin targeting. If
you remain targeting until the start of your next turn, fire a missile at the target. Each creature within a
<me-distance length="10" adj /> cube centered on the target must make a DC 14 Dexterity saving throw. On a failed save a
creature takes 6d12 thunder damage or half as much on a successful one.
