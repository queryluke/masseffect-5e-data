---
subsets:
  - id: cluster-grenade-i
    rarity: common
    cost: 2400
    name: Cluster Grenade I
    html: >-
      Target an area within <me-distance length="30" />. Each creature within <me-distance length="15" /> of the target
      must make a DC 13 Dexterity saving throw. A creature takes 2d6 thunder damage on a failed save, or half as
      much damage on a successful one.
    mechanics:
      - type: action
        layout: attack
        name: Cluster Grenade I
        group: Grenades
        resource:
          id: cluster-grenade-i
          displayType: gear-consumable
        damage:
          - dieCount: 2
            dieType: 6
            type: thunder
        dc:
          save: dex
          base: 13
          proficient: false
        range:
          short: 30
          aoe:
            size: 15
            type: sphere
  - id: cluster-grenade-ii
    rarity: common
    cost: 3400
    name: Cluster Grenade II
    html: >-
      Target an area within <me-distance length="30" />. Each creature within <me-distance length="15" /> of the target
      must make a DC 15 Dexterity saving throw. A creature takes 2d6 thunder damage on a failed save, or half as
      much damage on a successful one.
    mechanics:
      - type: action
        layout: attack
        name: Cluster Grenade II
        group: Grenades
        resource:
          id: cluster-grenade-ii
          displayType: gear-consumable
        damage:
          - dieCount: 2
            dieType: 6
            type: thunder
        dc:
          save: dex
          base: 15
          proficient: false
        range:
          short: 30
          aoe:
            size: 15
            type: sphere
  - id: cluster-grenade-iii
    rarity: uncommon
    cost: 4100
    name: Cluster Grenade III
    html: >-
      Target an area within <me-distance length="30" />. Each creature within <me-distance length="15" /> of the target
      must make a DC 15 Dexterity saving throw. A creature takes 3d6 thunder damage on a failed save, or half as
      much damage on a successful one.
    mechanics:
      - type: action
        layout: attack
        name: Cluster Grenade III
        group: Grenades
        resource:
          id: cluster-grenade-iii
          displayType: gear-consumable
        damage:
          - dieCount: 3
            dieType: 6
            type: thunder
        dc:
          save: dex
          base: 15
          proficient: false
        range:
          short: 30
          aoe:
            size: 15
            type: sphere
  - id: cluster-grenade-iv
    rarity: uncommon
    cost: 5100
    name: Cluster Grenade IV
    html: >-
      Target an area within <me-distance length="30" />. Each creature within <me-distance length="15" /> of the target
      must make a DC 17 Dexterity saving throw. A creature takes 3d6 thunder damage on a failed save, or half as
      much damage on a successful one.
    mechanics:
      - type: action
        layout: attack
        name: Cluster Grenade IV
        group: Grenades
        resource:
          id: cluster-grenade-iv
          displayType: gear-consumable
        damage:
          - dieCount: 3
            dieType: 6
            type: thunder
        dc:
          save: dex
          base: 17
          proficient: false
        range:
          short: 30
          aoe:
            size: 15
            type: sphere
  - id: cluster-grenade-v
    rarity: rare
    cost: 6500
    name: Cluster Grenade V
    html: >-
      Target an area within <me-distance length="30" />. Each creature within <me-distance length="15" /> of the target
      must make a DC 17 Dexterity saving throw. A creature takes 5d6 thunder damage on a failed save, or half as
      much damage on a successful one.
    mechanics:
      - type: action
        layout: attack
        name: Cluster Grenade V
        group: Grenades
        resource:
          id: cluster-grenade-v
          displayType: gear-consumable
        damage:
          - dieCount: 5
            dieType: 6
            type: thunder
        dc:
          save: dex
          base: 17
          proficient: false
        range:
          short: 30
          aoe:
            size: 15
            type: sphere
  - id: cluster-grenade-vi
    rarity: rare
    cost: 7500
    name: Cluster Grenade VI
    html: >-
      Target an area within <me-distance length="30" />. Each creature within <me-distance length="15" /> of the target
      must make a DC 19 Dexterity saving throw. A creature takes 5d6 thunder damage on a failed save, or half as
      much damage on a successful one.
    mechanics:
      - type: action
        layout: attack
        name: Cluster Grenade VI
        group: Grenades
        resource:
          id: cluster-grenade-vi
          displayType: gear-consumable
        damage:
          - dieCount: 5
            dieType: 6
            type: thunder
        dc:
          save: dex
          base: 19
          proficient: false
        range:
          short: 30
          aoe:
            size: 15
            type: sphere
  - id: cluster-grenade-vii
    rarity: very_rare
    cost: 8200
    name: Cluster Grenade VII
    html: >-
      Target an area within <me-distance length="30" />. Each creature within <me-distance length="15" /> of the target
      must make a DC 19 Dexterity saving throw. A creature takes 6d6 thunder damage on a failed save, or half as
      much damage on a successful one.
    mechanics:
      - type: action
        layout: attack
        name: Cluster Grenade VII
        group: Grenades
        resource:
          id: cluster-grenade-vii
          displayType: gear-consumable
        damage:
          - dieCount: 6
            dieType: 6
            type: thunder
        dc:
          save: dex
          base: 19
          proficient: false
        range:
          short: 30
          aoe:
            size: 15
            type: sphere
  - id: cluster-grenade-viii
    rarity: very_rare
    cost: 9200
    name: Cluster Grenade VIII
    html: >-
      Target an area within <me-distance length="30" />. Each creature within <me-distance length="15" /> of the target
      must make a DC 21 Dexterity saving throw. A creature takes 6d6 thunder damage on a failed save, or half as
      much damage on a successful one.
    mechanics:
      - type: action
        layout: attack
        name: Cluster Grenade VIII
        group: Grenades
        resource:
          id: cluster-grenade-viii
          displayType: gear-consumable
        damage:
          - dieCount: 6
            dieType: 6
            type: thunder
        dc:
          save: dex
          base: 21
          proficient: false
        range:
          short: 30
          aoe:
            size: 15
            type: sphere
  - id: cluster-grenade-ix
    rarity: very_rare
    cost: 9900
    name: Cluster Grenade IX
    html: >-
      Target an area within <me-distance length="30" />. Each creature within <me-distance length="15" /> of the target
      must make a DC 21 Dexterity saving throw. A creature takes 7d6 thunder damage on a failed save, or half as
      much damage on a successful one.
    mechanics:
      - type: action
        layout: attack
        name: Cluster Grenade IX
        group: Grenades
        resource:
          id: cluster-grenade-ix
          displayType: gear-consumable
        damage:
          - dieCount: 7
            dieType: 6
            type: thunder
        dc:
          save: dex
          base: 21
          proficient: false
        range:
          short: 30
          aoe:
            size: 15
            type: sphere
  - id: cluster-grenade-x
    rarity: spectre
    cost: 11600
    name: Cluster Grenade X
    html: >-
      Target an area within <me-distance length="30" />. Each creature within <me-distance length="15" /> of the target
      must make a DC 23 Dexterity saving throw. A creature takes 8d6 thunder damage on a failed save, or half as
      much damage on a successful one.
    mechanics:
      - type: action
        layout: attack
        name: Cluster Grenade X
        group: Grenades
        resource:
          id: cluster-grenade-x
          displayType: gear-consumable
        damage:
          - dieCount: 8
            dieType: 6
            type: thunder
        dc:
          save: dex
          base: 23
          proficient: false
        range:
          short: 30
          aoe:
            size: 15
            type: sphere
marks:
  - mark: I
    rarity: Common
    damage: 2d6
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
name: Cluster Grenade
consumable: true
equippable: true
---
Target an area within <me-distance length="30" />. Each creature within <me-distance length="15" /> of the target must make a Dexterity saving throw.
A creature takes thunder damage on a failed save, or half as much damage on a successful one.

The mark of this grenade determines its Save DC, damage, and credits.

Mark|Rarity|Save DC|Damage|Credits
---|---|---|---|---
I|Common|13|2d6|2,400 credits
II|Common|15|2d6|3,400 credits
III|Uncommon|15|3d6|4,100 credits
IV|Uncommon|17|3d6|5,100 credits
V|Rare|17|5d6|6,500 credits
VI|Rare|19|5d6|7,500 credits
VII|Very Rare|19|6d6|8,200 credits
VIII|Very Rare|21|6d6|9,200 credits
IX|Very Rare|21|7d6|9,900 credits
X|Spectre|23|8d6|11,600 credits
