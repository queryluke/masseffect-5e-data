---
subsets:
  - id: frag-grenade-i
    rarity: common
    cost: 1300
    name: Frag Grenade I
    html: >-
      Target an area within <me-distance length="30" />. Each creature within <me-distance length="10" /> of the target
      must make a DC 11 Dexterity saving throw. A creature takes 1d12 piercing damage on a failed save, or half as
      much damage on a successful one.
    mechanics:
      - type: action
        layout: attack
        name: Frag Grenade I
        group: Grenades
        resource:
          id: frag-grenade-i
          displayType: gear-consumable
        damage:
          - dieCount: 1
            dieType: 12
            type: piercing
        dc:
          save: dex
          base: 11
          proficient: false
        range:
          short: 30
          aoe:
            size: 10
            type: sphere
  - id: frag-grenade-ii
    rarity: common
    cost: 3600
    name: Frag Grenade II
    html: >-
      Target an area within <me-distance length="30" />. Each creature within <me-distance length="10" /> of the target
      must make a DC 13 Dexterity saving throw. A creature takes 2d12 piercing damage on a failed save, or half as
      much damage on a successful one.
    mechanics:
      - type: action
        layout: attack
        name: Frag Grenade II
        group: Grenades
        resource:
          id: frag-grenade-ii
          displayType: gear-consumable
        damage:
          - dieCount: 2
            dieType: 12
            type: piercing
        dc:
          save: dex
          base: 13
          proficient: false
        range:
          short: 30
          aoe:
            size: 10
            type: sphere
  - id: frag-grenade-iii
    rarity: uncommon
    cost: 4900
    name: Frag Grenade III
    html: >-
      Target an area within <me-distance length="30" />. Each creature within <me-distance length="10" /> of the target
      must make a DC 13 Dexterity saving throw. A creature takes 3d12 piercing damage on a failed save, or half as
      much damage on a successful one.
    mechanics:
      - type: action
        layout: attack
        name: Frag Grenade III
        group: Grenades
        resource:
          id: frag-grenade-iii
          displayType: gear-consumable
        damage:
          - dieCount: 3
            dieType: 12
            type: piercing
        dc:
          save: dex
          base: 13
          proficient: false
        range:
          short: 30
          aoe:
            size: 10
            type: sphere
  - id: frag-grenade-iv
    rarity: uncommon
    cost: 5900
    name: Frag Grenade IV
    html: >-
      Target an area within <me-distance length="30" />. Each creature within <me-distance length="10" /> of the target
      must make a DC 15 Dexterity saving throw. A creature takes 3d12 piercing damage on a failed save, or half as
      much damage on a successful one.
    mechanics:
      - type: action
        layout: attack
        name: Frag Grenade IV
        group: Grenades
        resource:
          id: frag-grenade-iv
          displayType: gear-consumable
        damage:
          - dieCount: 3
            dieType: 12
            type: piercing
        dc:
          save: dex
          base: 15
          proficient: false
        range:
          short: 30
          aoe:
            size: 10
            type: sphere
  - id: frag-grenade-v
    rarity: rare
    cost: 8500
    name: Frag Grenade V
    html: >-
      Target an area within <me-distance length="30" />. Each creature within <me-distance length="10" /> of the target
      must make a DC 15 Dexterity saving throw. A creature takes 5d12 piercing damage on a failed save, or half as
      much damage on a successful one.
    mechanics:
      - type: action
        layout: attack
        name: Frag Grenade V
        group: Grenades
        resource:
          id: frag-grenade-v
          displayType: gear-consumable
        damage:
          - dieCount: 5
            dieType: 12
            type: piercing
        dc:
          save: dex
          base: 15
          proficient: false
        range:
          short: 30
          aoe:
            size: 10
            type: sphere
  - id: frag-grenade-vi
    rarity: rare
    cost: 9500
    name: Frag Grenade VI
    html: >-
      Target an area within <me-distance length="30" />. Each creature within <me-distance length="10" /> of the target
      must make a DC 17 Dexterity saving throw. A creature takes 5d12 piercing damage on a failed save, or half as
      much damage on a successful one.
    mechanics:
      - type: action
        layout: attack
        name: Frag Grenade VI
        group: Grenades
        resource:
          id: frag-grenade-vi
          displayType: gear-consumable
        damage:
          - dieCount: 5
            dieType: 12
            type: piercing
        dc:
          save: dex
          base: 17
          proficient: false
        range:
          short: 30
          aoe:
            size: 10
            type: sphere
  - id: frag-grenade-vii
    rarity: very_rare
    cost: 10800
    name: Frag Grenade VII
    html: >-
      Target an area within <me-distance length="30" />. Each creature within <me-distance length="10" /> of the target
      must make a DC 17 Dexterity saving throw. A creature takes 6d12 piercing damage on a failed save, or half as
      much damage on a successful one.
    mechanics:
      - type: action
        layout: attack
        name: Frag Grenade VII
        group: Grenades
        resource:
          id: frag-grenade-vii
          displayType: gear-consumable
        damage:
          - dieCount: 6
            dieType: 12
            type: piercing
        dc:
          save: dex
          base: 17
          proficient: false
        range:
          short: 30
          aoe:
            size: 10
            type: sphere
  - id: frag-grenade-viii
    rarity: very_rare
    cost: 11300
    name: Frag Grenade VIII
    html: >-
      Target an area within <me-distance length="30" />. Each creature within <me-distance length="10" /> of the target
      must make a DC 18 Dexterity saving throw. A creature takes 6d12 piercing damage on a failed save, or half as
      much damage on a successful one.
    mechanics:
      - type: action
        layout: attack
        name: Frag Grenade VIII
        group: Grenades
        resource:
          id: frag-grenade-viii
          displayType: gear-consumable
        damage:
          - dieCount: 6
            dieType: 12
            type: piercing
        dc:
          save: dex
          base: 18
          proficient: false
        range:
          short: 30
          aoe:
            size: 10
            type: sphere
  - id: frag-grenade-ix
    rarity: very_rare
    cost: 12600
    name: Frag Grenade IX
    html: >-
      Target an area within <me-distance length="30" />. Each creature within <me-distance length="10" /> of the target
      must make a DC 18 Dexterity saving throw. A creature takes 7d12 piercing damage on a failed save, or half as
      much damage on a successful one.
    mechanics:
      - type: action
        layout: attack
        name: Frag Grenade IX
        group: Grenades
        resource:
          id: frag-grenade-ix
          displayType: gear-consumable
        damage:
          - dieCount: 7
            dieType: 12
            type: piercing
        dc:
          save: dex
          base: 18
          proficient: false
        range:
          short: 30
          aoe:
            size: 10
            type: sphere
  - id: frag-grenade-x
    rarity: spectre
    cost: 14400
    name: Frag Grenade X
    html: >-
      Target an area within <me-distance length="30" />. Each creature within <me-distance length="10" /> of the target
      must make a DC 19 Dexterity saving throw. A creature takes 8d12 piercing damage on a failed save, or half as
      much damage on a successful one.
    mechanics:
      - type: action
        layout: attack
        name: Frag Grenade X
        group: Grenades
        resource:
          id: frag-grenade-x
          displayType: gear-consumable
        damage:
          - dieCount: 8
            dieType: 12
            type: piercing
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
    damage: 1d12
  - mark: II
    rarity: Common
    damage: 2d12
  - mark: III
    rarity: Uncommon
    damage: 3d12
  - mark: IV
    rarity: Uncommon
    damage: 3d12
  - mark: V
    rarity: Rare
    damage: 5d12
  - mark: VI
    rarity: Rare
    damage: 5d12
  - mark: VII
    rarity: Very Rare
    damage: 6d12
  - mark: VIII
    rarity: Very Rare
    damage: 6d12
  - mark: IX
    rarity: Very Rare
    damage: 7d12
  - mark: X
    rarity: Spectre
    damage: 8d12
rarity: varies
type: grenade
cost: Varies
weight: 1
subType: ''
name: Frag Grenade
consumable: true
equippable: true
---
Target an area within <me-distance length="30" />. Each creature within <me-distance length="10" /> of the target must make a Dexterity saving throw.
On a failed save, a creature takes piercing damage or half as much damage on a successful one.

The mark of this grenade determines its Save DC, damage, and credits.

Mark|Rarity|Save DC|Damage|Credits
---|---|---|---|---
I|Common|11|1d12|1,300 credits
II|Common|13|2d12|3,600 credits
III|Uncommon|13|3d12|4,900 credits
IV|Uncommon|15|3d12|5,900 credits
V|Rare|15|5d12|8,500 credits
VI|Rare|17|5d12|9,500 credits
VII|Very Rare|17|6d12|10,800 credits
VIII|Very Rare|18|6d12|11,300 credits
IX|Very Rare|18|7d12|12,600 credits
X|Spectre|19|8d12|14,400 credits
