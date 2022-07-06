---
mechanics:
  - type: action
    layout: attack
    name: M-100 Grenade Launcher
    group: Heavy Weapons
    resource:
      id: m-100-grenade-launcher
      max:
        type: flat
        value: 12
      reset: manual
      label: charges
    damage:
      - dieCount: 3
        dieType: 6
        type: thunder
    dc:
      save: dex
      base: 14
      proficient: false
    range:
      short: 90
      aoe:
        size: 10
        type: sphere
image: https://vignette.wikia.nocookie.net/masseffect/images/f/f0/ME2_HW_-_Grenade_Launcher.png/revision/latest?cb=20140823054132
rarity: uncommon
type: heavy_weapon
cost: 20500
weight: 12
subType: ''
charges: 12
name: M-100 Grenade Launcher
equippable: true
---
Target an area within <me-distance length="90" /> that you can see and fire a grenade at it. Each creature
within a <me-distance length="10" adj /> radius sphere must make a DC 14 Dexterity saving throw.
On a failed save a creature takes 3d6 thunder damage or half as much on a successful one.
