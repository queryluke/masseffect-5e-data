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
        value: 5
      reset: manual
      label: charges
    damage:
      - dieCount: 5
        dieType: 12
        type: radiant
    dc:
      save: dex
      base: 18
      proficient: false
    range:
      short: 300
image: https://vignette2.wikia.nocookie.net/masseffect/images/b/bf/ME3_Cain_Heavy_Weapon.png/revision/latest?cb=20120317195513
rarity: spectre
type: heavy_weapon
cost: 82500
weight: 22
subType: ''
charges: 5
name: M-920 Cain
equippable: true
---
As an Attack, choose a location within <me-distance length="300" /> and begin targeting. If you remain targeting until
the start of your next turn, you can choose to continue targeting, consuming another charge, or you may use an Attack
to fire the Cain. When fired, any creature within <me-distance length="5" /> of the target location automatically fails
the saving throw. Creatures within <me-distance length="30" /> of the target make a DC 18 Dexterity saving throw.
On a failed save, a creature takes Xd12 + 5d12 radiant damage where X is the number of charges you used multiplied by 2.
On a success, a creature takes half damage.
