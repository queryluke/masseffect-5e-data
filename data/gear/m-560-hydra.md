---
mechanics:
  - type: action
    layout: attack
    name: M-560 Hydra
    group: Heavy Weapons
    resource:
      id: m-560-hydra
      max:
        type: flat
        value: 10
      reset: manual
      label: charges
    damage:
      - dieCount: 4
        dieType: 12
        type: thunder
    dc:
      save: con
      base: 18
      proficient: false
    range:
      short: 150
image: https://vignette2.wikia.nocookie.net/masseffect/images/f/f9/ME3_Hydra_Heavy_Weapon.png/revision/latest?cb=20120317194543
rarity: spectre
type: heavy_weapon
cost: 76000
weight: 24
subType: ''
charges: 1
name: M-560 Hydra
equippable: true
---
As an Attack, choose a creature within <me-distance length="150" /> that you can see and begin targeting. If you
remain targeting until the start of your next turn, fire a unique missile that automatically hits the target.
The missile deploys 3 shaped charges. The first disrupts any barriers or shields, completely removing all barrier ticks
and shield points. The second charge cripples armor; the creature's AC is reduced by 3 for the next hour. The final charge
explodes and the creature must make a DC 18 Constitution saving throw. On a failed save the creature takes 4d12 thunder
damage or half as much on a successful one.
