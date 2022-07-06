---
subsets:
  - id: homing-grenade-i
    rarity: common
    cost: 700
    name: Homing Grenade I
    html: >-
      Target a creature within <me-distance length="30" />. The target creature suffers 1d6 thunder damage. Then, each
      other creature within <me-distance length="5" /> of the target must make a DC 10 Dexterity saving throw. A creature
      takes 1d6 thunder damage on a failed save, or half as much damage on a successful one.
    mechanics:
      - type: action
        layout: attack
        name: Homing Grenade I
        group: Grenades
        resource:
          id: homing-grenade-i
          displayType: gear-consumable
        damage:
          - dieCount: 1
            dieType: 6
            type: thunder
        dc:
          save: dex
          base: 10
          proficient: false
        range:
          short: 30
          aoe:
            size: 5
            type: sphere
  - id: homing-grenade-ii
    rarity: common
    cost: 1400
    name: Homing Grenade II
    html: >-
      Target a creature within <me-distance length="30" />. The target creature suffers 2d6 thunder damage. Then, each
      other creature within <me-distance length="5" /> of the target must make a DC 11 Dexterity saving throw. A creature
      takes 2d6 thunder damage on a failed save, or half as much damage on a successful one.
    mechanics:
      - type: action
        layout: attack
        name: Homing Grenade II
        group: Grenades
        resource:
          id: homing-grenade-ii
          displayType: gear-consumable
        damage:
          - dieCount: 2
            dieType: 6
            type: thunder
        dc:
          save: dex
          base: 11
          proficient: false
        range:
          short: 30
          aoe:
            size: 5
            type: sphere
  - id: homing-grenade-iii
    rarity: uncommon
    cost: 2100
    name: Homing Grenade III
    html: >-
      Target a creature within <me-distance length="30" />. The target creature suffers 3d6 thunder damage. Then, each
      other creature within <me-distance length="5" /> of the target must make a DC 11 Dexterity saving throw. A creature
      takes 3d6 thunder damage on a failed save, or half as much damage on a successful one.
    mechanics:
      - type: action
        layout: attack
        name: Homing Grenade III
        group: Grenades
        resource:
          id: homing-grenade-iii
          displayType: gear-consumable
        damage:
          - dieCount: 3
            dieType: 6
            type: thunder
        dc:
          save: dex
          base: 11
          proficient: false
        range:
          short: 30
          aoe:
            size: 5
            type: sphere
  - id: homing-grenade-iv
    rarity: uncommon
    cost: 3100
    name: Homing Grenade IV
    html: >-
      Target a creature within <me-distance length="30" />. The target creature suffers 3d6 thunder damage. Then, each
      other creature within <me-distance length="5" /> of the target must make a DC 13 Dexterity saving throw. A creature
      takes 3d6 thunder damage on a failed save, or half as much damage on a successful one.
    mechanics:
      - type: action
        layout: attack
        name: Homing Grenade IV
        group: Grenades
        resource:
          id: homing-grenade-iv
          displayType: gear-consumable
        damage:
          - dieCount: 3
            dieType: 6
            type: thunder
        dc:
          save: dex
          base: 13
          proficient: false
        range:
          short: 30
          aoe:
            size: 5
            type: sphere
  - id: homing-grenade-v
    rarity: rare
    cost: 4500
    name: Homing Grenade V
    html: >-
      Target a creature within <me-distance length="30" />. The target creature suffers 5d6 thunder damage. Then, each
      other creature within <me-distance length="5" /> of the target must make a DC 13 Dexterity saving throw. A creature
      takes 5d6 thunder damage on a failed save, or half as much damage on a successful one.
    mechanics:
      - type: action
        layout: attack
        name: Homing Grenade V
        group: Grenades
        resource:
          id: homing-grenade-v
          displayType: gear-consumable
        damage:
          - dieCount: 5
            dieType: 6
            type: thunder
        dc:
          save: dex
          base: 13
          proficient: false
        range:
          short: 30
          aoe:
            size: 5
            type: sphere
  - id: homing-grenade-vi
    rarity: rare
    cost: 5500
    name: Homing Grenade VI
    html: >-
      Target a creature within <me-distance length="30" />. The target creature suffers 5d6 thunder damage. Then, each
      other creature within <me-distance length="5" /> of the target must make a DC 15 Dexterity saving throw. A creature
      takes 5d6 thunder damage on a failed save, or half as much damage on a successful one.
    mechanics:
      - type: action
        layout: attack
        name: Homing Grenade VI
        group: Grenades
        resource:
          id: homing-grenade-vi
          displayType: gear-consumable
        damage:
          - dieCount: 5
            dieType: 6
            type: thunder
        dc:
          save: dex
          base: 15
          proficient: false
        range:
          short: 30
          aoe:
            size: 5
            type: sphere
  - id: homing-grenade-vii
    rarity: very_rare
    cost: 6200
    name: Homing Grenade VII
    html: >-
      Target a creature within <me-distance length="30" />. The target creature suffers 6d6 thunder damage. Then, each
      other creature within <me-distance length="5" /> of the target must make a DC 15 Dexterity saving throw. A creature
      takes 6d6 thunder damage on a failed save, or half as much damage on a successful one.
    mechanics:
      - type: action
        layout: attack
        name: Homing Grenade VII
        group: Grenades
        resource:
          id: homing-grenade-vii
          displayType: gear-consumable
        damage:
          - dieCount: 6
            dieType: 6
            type: thunder
        dc:
          save: dex
          base: 15
          proficient: false
        range:
          short: 30
          aoe:
            size: 5
            type: sphere
  - id: homing-grenade-viii
    rarity: very_rare
    cost: 6700
    name: Homing Grenade VIII
    html: >-
      Target a creature within <me-distance length="30" />. The target creature suffers 6d6 thunder damage. Then, each
      other creature within <me-distance length="5" /> of the target must make a DC 16 Dexterity saving throw. A creature
      takes 6d6 thunder damage on a failed save, or half as much damage on a successful one.
    mechanics:
      - type: action
        layout: attack
        name: Homing Grenade VIII
        group: Grenades
        resource:
          id: homing-grenade-viii
          displayType: gear-consumable
        damage:
          - dieCount: 6
            dieType: 6
            type: thunder
        dc:
          save: dex
          base: 16
          proficient: false
        range:
          short: 30
          aoe:
            size: 5
            type: sphere
  - id: homing-grenade-ix
    rarity: very_rare
    cost: 7400
    name: Homing Grenade IX
    html: >-
      Target a creature within <me-distance length="30" />. The target creature suffers 7d6 thunder damage. Then, each
      other creature within <me-distance length="5" /> of the target must make a DC 16 Dexterity saving throw. A creature
      takes 7d6 thunder damage on a failed save, or half as much damage on a successful one.
    mechanics:
      - type: action
        layout: attack
        name: Homing Grenade VIII
        group: Grenades
        resource:
          id: homing-grenade-viii
          displayType: gear-consumable
        damage:
          - dieCount: 7
            dieType: 6
            type: thunder
        dc:
          save: dex
          base: 16
          proficient: false
        range:
          short: 30
          aoe:
            size: 5
            type: sphere
  - id: homing-grenade-x
    rarity: spectre
    cost: 8600
    name: Homing Grenade X
    html: >-
      Target a creature within <me-distance length="30" />. The target creature suffers 8d6 thunder damage. Then, each
      other creature within <me-distance length="5" /> of the target must make a DC 17 Dexterity saving throw. A creature
      takes 8d6 thunder damage on a failed save, or half as much damage on a successful one.
    mechanics:
      - type: action
        layout: attack
        name: Homing Grenade VIII
        group: Grenades
        resource:
          id: homing-grenade-viii
          displayType: gear-consumable
        damage:
          - dieCount: 8
            dieType: 6
            type: thunder
        dc:
          save: dex
          base: 17
          proficient: false
        range:
          short: 30
          aoe:
            size: 5
            type: sphere
marks:
  - mark: I
    rarity: Common
    damage: 1d6
  - mark: II
    rarity: Common
    damage: 2d6
  - mark: III
    rarity: Uncommon
    damage: 3d6
  - mark: IV
    rarity: Uncommon
    damage: 3d6
  - mark: V
    rarity: Rare
    damage: 5d6
  - mark: VI
    rarity: Rare
    damage: 5d6
  - mark: VII
    rarity: Very Rare
    damage: 6d6
  - mark: VIII
    rarity: Very Rare
    damage: 6d6
  - mark: IX
    rarity: Very Rare
    damage: 7d6
  - mark: X
    rarity: Spectre
    damage: 8d6
rarity: varies
type: grenade
cost: Varies
weight: 1
subType: ''
name: Homing Grenade
consumable: true
---
Target a creature you can see within <me-distance length="30" />. The target creature suffers thunder damage (see below). Each other creature
within <me-distance length="5" /> of the target must make a Dexterity saving throw. On a failed save, a creature suffers thunder damage
or half as much on a successful one.

The mark of this grenade determines its Save DC, damage, and credits.

Mark|Rarity|Save DC|Damage|Credits
---|---|---|---|---
I|Common|10|1d6|700 credits
II|Common|11|2d6|1,400 credits
III|Uncommon|11|3d6|2,100 credits
IV|Uncommon|13|3d6|3,100 credits
V|Rare|13|5d6|4,500 credits
VI|Rare|15|5d6|5,500 credits
VII|Very Rare|15|6d6|6,200 credits
VIII|Very Rare|16|6d6|6,700 credits
IX|Very Rare|16|7d6|7,400 credits
X|Spectre|17|8d6|8,600 credits
