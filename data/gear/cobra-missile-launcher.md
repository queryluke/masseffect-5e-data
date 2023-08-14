---
mechanics:
  - type: action
    layout: attack
    name: Cobra Missile Launcher
    group: Heavy Weapons
    resource:
      id: cobra-missile-launcher
      max:
        type: flat
        value: 4
      reset: manual
      label: charges
    damage:
      - dieCount: 8
        dieType: 12
        type: thunder
    range:
      short: 300
image: https://vignette2.wikia.nocookie.net/masseffect/images/f/f9/ME3_Hydra_Heavy_Weapon.png/revision/latest?cb=20120317194543
rarity: rare
type: heavy_weapon
cost: 82000
weight: 24
subType: ''
charges: 4
equippable: true
name: Cobra Missile Launcher
---
As an Attack, choose a creature within <me-distance length="150" /> that you can see and begin targeting. If you remain
targeting until the start of your next turn, fire a missile that automatically hits the target, dealing 8d12 thunder damage.
