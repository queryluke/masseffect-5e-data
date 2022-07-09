---
mechanics:
  - type: action
    layout: attack
    name: Reaper Blackstar
    group: Heavy Weapons
    resource:
      id: reaper-blackstar
      max:
        type: flat
        value: 1
      reset: manual
      label: charges
    damage:
      - dieCount: 15
        dieType: 10
        type: necrotic
    range:
      short: 300
image: https://vignette2.wikia.nocookie.net/masseffect/images/6/69/ME3_Reaper_Blackstar_Heavy_Weapon.png/revision/latest?cb=20120317194848
rarity: spectre
type: heavy_weapon
cost: 132500
weight: 24
subType: ''
charges: 1
name: Reaper Blackstar
equippable: true
---
As an Attack, choose a creature within <me-distance length="300" /> that you can see and begin targeting. If you remain
targeting until the start of your next turn, fire a sub-atomic particle beam at the target, dealing 15d10 necrotic damage.
This weapon counts as a Small Reaper Tech and can cause creatures to become indoctrinated.
