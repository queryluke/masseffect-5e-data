---
mechanics:
  - type: action
    layout: attack
    name: Geth Spitfire
    group: Heavy Weapons
    resource:
      id: geth-spitfire
      max:
        type: flat
        value: 3
      reset: manual
      label: charges
    damage:
      - dieCount: 12
        dieType: 4
        type: radiant
    dc:
      save: dex
      base: 14
      proficient: false
    range:
      short: 0
      aoe:
        size: 30
        type: cone
image: https://vignette3.wikia.nocookie.net/masseffect/images/b/b6/ME3_Geth_Antivirus_Heavy_Weapon.png/revision/latest?cb=20120317195710
rarity: uncommon
type: heavy_weapon
cost: 40000
weight: 14
subType: ''
charges: 3
name: Geth Spitfire
equippable: true
---
As an Attack, begin targeting, releasing a torrent of bullets in a <me-distance length="30" adj /> cone extending from your location and
consuming 1 charge. The torrent of bullets continues as long as your are targeting. Creatures that enter the area
for the first time on a turn or being their turn there must make a DC 14 Dexterity saving throw. On a failed save, a
creature takes 12d4 radiant damage. On a success, a creature takes half as much damage. At the start of your turn,
you may choose to continue targeting, consuming another charge.
