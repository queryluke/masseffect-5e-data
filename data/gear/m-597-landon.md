---
mechanics:
  - type: action
    layout: attack
    name: M-597 Landon
    group: Heavy Weapons
    resource:
      id: m-597-landon
      max:
        type: flat
        value: 10
      reset: manual
      label: charges
    damage:
      - dieCount: 4
        dieType: 8
        type: thunder
    range:
      short: 300
image: https://vignette4.wikia.nocookie.net/masseffect/images/6/61/ME3_Ladon_Codex_Rip.png/revision/latest?cb=20140106114047
rarity: spectre
type: heavy_weapon
cost: 68000
weight: 22
subType: ''
charges: 10
name: M-597 Landon
equippable: true
---
As an Attack, begin targeting, choosing up to 10 creatures within <me-distance length="300" />. If you remain targeting
until the start of your next turn, launch a miniature missile at each target, dealing 4d8 thunder damage. Each missile
used consumes a weapon charge.
