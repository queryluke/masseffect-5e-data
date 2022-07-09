---
mechanics:
  - type: action
    layout: attack
    name: Sync Laser
    group: Heavy Weapons
    resource:
      id: sync-laser
      max:
        type: flat
        value: 2
      reset: manual
      label: charges
    damage:
      - dieCount: 8
        dieType: 12
        type: thunder
    dc:
      save: dex
      base: 16
      proficient: false
    range:
      short: 300
      aoe:
        size: 60
        type: cube
image: https://vignette2.wikia.nocookie.net/masseffect/images/3/3d/ME3_Sync_Laser_Heavy_Weapon.png/revision/latest?cb=20120317195655
rarity: rare
type: heavy_weapon
cost: 82000
weight: 18
subType: ''
charges: 2
name: Sync Laser
equippable: true
---
As an Attack, choose a <me-distance length="30" adj num-only />-by-<me-distance length="60" adj /> rectangle within
<me-distance length="300" /> and begin targeting. If you remain targeting until the start of your next turn, call down
an orbital strike at the target location. Each creature within the rectangle must make a DC 16 Dexterity saving throw.
On a failed save, a creature takes 8d12 thunder damage. On a success, a creature takes half damage.
