---
mechanics:
  - type: action
    layout: attack
    name: M-451 Firestorm
    group: Heavy Weapons
    resource:
      id: m-451-firestorm
      max:
        type: flat
        value: 10
      reset: manual
      label: charges
    damage:
      - dieCount: 4
        dieType: 6
        type: fire
    dc:
      save: dex
      base: 13
      proficient: false
    range:
      short: 0
      aoe:
        size: 15
        type: sphere
image: https://vignette2.wikia.nocookie.net/masseffect/images/5/5a/ME3_Firestorm_Heavy_Weapon.png/revision/latest?cb=20120317194412
rarity: uncommon
type: heavy_weapon
cost: 24000
weight: 12
subType: ''
charges: 10
name: M-451 Firestorm
equippable: true
---
Sweep fire across the battlefield. Creatures within a <me-distance length="15" /> cone originating from you must make a
DC 13 Dexterity saving throw. On a failed save, a creature takes 4d6 fire damage, or half as much damage on a successful one.
