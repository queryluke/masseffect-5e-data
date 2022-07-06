---
subsets:
  - id: arc-grenade-i
    rarity: common
    cost: 1400
    name: Arc Grenade I
    html: >-
      Target an area within <me-distance length="30" />. Each creature within <me-distance length="10" /> of the target
      must make a DC 11 Dexterity saving throw. A creature takes 2d6 lightning damage on a failed save, or half as
      much damage on a successful one.
    mechanics:
      - type: action
        layout: attack
        name: Arc Grenade I
        group: Grenades
        resource:
          id: arc-grenade-i
          displayType: gear-consumable
        damage:
          - dieCount: 2
            dieType: 6
            type: lightning
        dc:
          save: dex
          base: 11
          proficient: false
        range:
          short: 30
          aoe:
            size: 10
            type: sphere
  - id: arc-grenade-ii
    rarity: common
    cost: 2400
    name: Arc Grenade II
    html: >-
      Target an area within <me-distance length="30" />. Each creature within <me-distance length="10" /> of the target
      must make a DC 13 Dexterity saving throw. A creature takes 2d6 lightning damage on a failed save, or half as
      much damage on a successful one.
    mechanics:
      - type: action
        layout: attack
        name: Arc Grenade II
        group: Grenades
        resource:
          id: arc-grenade-ii
          displayType: gear-consumable
        damage:
          - dieCount: 2
            dieType: 6
            type: lightning
        dc:
          save: dex
          base: 13
        range:
          short: 30
          aoe:
            size: 10
            type: sphere
  - id: arc-grenade-iii
    rarity: uncommon
    cost: 3100
    name: Arc Grenade III
    html: >-
      Target an area within <me-distance length="30" />. Each creature within <me-distance length="10" /> of the target
      must make a DC 13 Dexterity saving throw. A creature takes 3d6 lightning damage on a failed save, or half as
      much damage on a successful one.
    mechanics:
      - type: action
        layout: attack
        name: Arc Grenade III
        group: Grenades
        resource:
          id: arc-grenade-iii
          displayType: gear-consumable
        damage:
          - dieCount: 3
            dieType: 6
            type: lightning
        dc:
          save: dex
          base: 13
          proficient: false
        range:
          short: 30
          aoe:
            size: 10
            type: sphere
  - id: arc-grenade-iv
    rarity: uncommon
    cost: 4100
    name: Arc Grenade IV
    html: >-
      Target an area within <me-distance length="30" />. Each creature within <me-distance length="10" /> of the target
      must make a DC 15 Dexterity saving throw. A creature takes 3d6 lightning damage on a failed save, or half as
      much damage on a successful one.
    mechanics:
      - type: action
        layout: attack
        name: Arc Grenade IV
        group: Grenades
        resource:
          id: arc-grenade-iv
          displayType: gear-consumable
        damage:
          - dieCount: 3
            dieType: 6
            type: lightning
        dc:
          save: dex
          base: 15
          proficient: false
        range:
          short: 30
          aoe:
            size: 10
            type: sphere
  - id: arc-grenade-v
    rarity: rare
    cost: 5500
    name: Arc Grenade V
    html: >-
      Target an area within <me-distance length="30" />. Each creature within <me-distance length="10" /> of the target
      must make a DC 15 Dexterity saving throw. A creature takes 5d6 lightning damage on a failed save, or half as
      much damage on a successful one.
    mechanics:
      - type: action
        layout: attack
        name: Arc Grenade V
        group: Grenades
        resource:
          id: arc-grenade-v
          displayType: gear-consumable
        damage:
          - dieCount: 5
            dieType: 6
            type: lightning
        dc:
          save: dex
          base: 15
          proficient: false
        range:
          short: 30
          aoe:
            size: 10
            type: sphere
  - id: arc-grenade-vi
    rarity: rare
    cost: 6500
    name: Arc Grenade VI
    html: >-
      Target an area within <me-distance length="30" />. Each creature within <me-distance length="10" /> of the target
      must make a DC 17 Dexterity saving throw. A creature takes 5d6 lightning damage on a failed save, or half as
      much damage on a successful one.
    mechanics:
      - type: action
        layout: attack
        name: Arc Grenade VI
        group: Grenades
        resource:
          id: arc-grenade-vi
          displayType: gear-consumable
        damage:
          - dieCount: 5
            dieType: 6
            type: lightning
        dc:
          save: dex
          base: 17
          proficient: false
        range:
          short: 30
          aoe:
            size: 10
            type: sphere
  - id: arc-grenade-vii
    rarity: very_rare
    cost: 7200
    name: Arc Grenade VII
    html: >-
      Target an area within <me-distance length="30" />. Each creature within <me-distance length="10" /> of the target
      must make a DC 17 Dexterity saving throw. A creature takes 6d6 lightning damage on a failed save, or half as
      much damage on a successful one.
    mechanics:
      - type: action
        layout: attack
        name: Arc Grenade VII
        group: Grenades
        resource:
          id: arc-grenade-vii
          displayType: gear-consumable
        damage:
          - dieCount: 6
            dieType: 6
            type: lightning
        dc:
          save: dex
          base: 17
          proficient: false
        range:
          short: 30
          aoe:
            size: 10
            type: sphere
  - id: arc-grenade-viii
    rarity: very_rare
    cost: 7700
    name: Arc Grenade VIII
    html: >-
      Target an area within <me-distance length="30" />. Each creature within <me-distance length="10" /> of the target
      must make a DC 18 Dexterity saving throw. A creature takes 6d6 lightning damage on a failed save, or half as
      much damage on a successful one.
    mechanics:
      - type: action
        layout: attack
        name: Arc Grenade VIII
        group: Grenades
        resource:
          id: arc-grenade-viii
          displayType: gear-consumable
        damage:
          - dieCount: 6
            dieType: 6
            type: lightning
        dc:
          save: dex
          base: 18
          proficient: false
        range:
          short: 30
          aoe:
            size: 10
            type: sphere
  - id: arc-grenade-ix
    rarity: very_rare
    cost: 8400
    name: Arc Grenade IX
    html: >-
      Target an area within <me-distance length="30" />. Each creature within <me-distance length="10" /> of the target
      must make a DC 18 Dexterity saving throw. A creature takes 7d6 lightning damage on a failed save, or half as
      much damage on a successful one.
    mechanics:
      - type: action
        layout: attack
        name: Arc Grenade IX
        group: Grenades
        resource:
          id: arc-grenade-ix
          displayType: gear-consumable
        damage:
          - dieCount: 7
            dieType: 6
            type: lightning
        dc:
          save: dex
          base: 18
          proficient: false
        range:
          short: 30
          aoe:
            size: 10
            type: sphere
  - id: arc-grenade-x
    rarity: spectre
    cost: 9600
    name: Arc Grenade X
    html: >-
      Target an area within <me-distance length="30" />. Each creature within <me-distance length="10" /> of the target
      must make a DC 19 Dexterity saving throw. A creature takes 8d6 lightning damage on a failed save, or half as
      much damage on a successful one.
    mechanics:
      - type: action
        layout: attack
        name: Arc Grenade X
        group: Grenades
        resource:
          id: arc-grenade-x
          displayType: gear-consumable
        damage:
          - dieCount: 8
            dieType: 6
            type: lightning
        dc:
          save: dex
          base: 19
          proficient: false
        range:
          short: 30
          aoe:
            size: 10
            type: sphere
marks:
  - mark: I
    rarity: Common
    damage: 2d6
    dc: 11
  - mark: II
    rarity: Common
    damage: 2d6
    dc: 13
  - mark: III
    rarity: Uncommon
    damage: 3d6
    dc: 13
  - mark: IV
    rarity: Uncommon
    damage: 3d6
    dc: 15
  - mark: V
    rarity: Rare
    damage: 5d6
    dc: 15
  - mark: VI
    rarity: Rare
    damage: 5d6
    dc: 17
  - mark: VII
    rarity: Very Rare
    damage: 6d6
    dc: 17
  - mark: VIII
    rarity: Very Rare
    damage: 6d6
    dc: 18
  - mark: IX
    rarity: Very Rare
    damage: 7d6
    dc: 18
  - mark: X
    rarity: Spectre
    damage: 8d6
    dc: 19
rarity: varies
type: grenade
cost: Varies
weight: 1
subType: ''
name: Arc Grenade
consumable: true
---
Target an area within <me-distance length="30" />. Each creature within <me-distance length="10" /> of the target must make a Dexterity saving throw.
A creature takes lightning damage on a failed save, or half as much damage on a successful one.

The mark of this grenade determines its Save DC, damage, and cost.

Mark|Rarity|Save DC|Damage|Credits
---|---|---|---|---
I|Common|11|2d6|1,400 credits
II|Common|13|2d6|2,400 credits
III|Uncommon|13|3d6|3,100 credits
IV|Uncommon|15|3d6|4,100 credits
V|Rare|15|5d6|5,500 credits
VI|Rare|17|5d6|6,500 credits
VII|Very Rare|17|6d6|7,200 credits
VIII|Very Rare|18|6d6|7,700 credits
IX|Very Rare|18|7d6|8,400 credits
X|Spectre|19|8d6|9,600 credits
