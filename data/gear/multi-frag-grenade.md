---
subsets:
  - id: multi-frag-grenade-i
    rarity: common
    cost: 1500
    name: Multi-Frag Grenade I
    html: >-
      Target 3 areas within <me-distance length="30" />. Each creature within <me-distance length="10" /> of each target must
      make a DC 11 Dexterity saving throw. On a failed save, a creature takes 1d4 piercing damage or half as much on a successful one.
    mechanics:
      - type: action
        layout: attack
        name: Multi-Frag Grenade I
        group: Grenades
        resource:
          id: multi-frag-grenade-i
          displayType: gear-consumable
        damage:
          - dieCount: 1
            dieType: 4
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
  - id: multi-frag-grenade-ii
    rarity: common
    cost: 2500
    name: Multi-Frag Grenade II
    html: >-
      Target 3 areas within <me-distance length="30" />. Each creature within <me-distance length="10" /> of each target must
      make a DC 13 Dexterity saving throw. On a failed save, a creature takes 1d4 piercing damage or half as much on a successful one.
    mechanics:
      - type: action
        layout: attack
        name: Multi-Frag Grenade II
        group: Grenades
        resource:
          id: multi-frag-grenade-ii
          displayType: gear-consumable
        damage:
          - dieCount: 1
            dieType: 4
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
  - id: multi-frag-grenade-iii
    rarity: uncommon
    cost: 5500
    name: Multi-Frag Grenade III
    html: >-
      Target 3 areas within <me-distance length="30" />. Each creature within <me-distance length="10" /> of each target must
      make a DC 13 Dexterity saving throw. On a failed save, a creature takes 3d4 piercing damage or half as much on a successful one.
    mechanics:
      - type: action
        layout: attack
        name: Multi-Frag Grenade III
        group: Grenades
        resource:
          id: multi-frag-grenade-iii
          displayType: gear-consumable
        damage:
          - dieCount: 3
            dieType: 4
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
  - id: multi-frag-grenade-iv
    rarity: uncommon
    cost: 6500
    name: Multi-Frag Grenade IV
    html: >-
      Target 3 areas within <me-distance length="30" />. Each creature within <me-distance length="10" /> of each target must
      make a DC 15 Dexterity saving throw. On a failed save, a creature takes 3d4 piercing damage or half as much on a successful one.
    mechanics:
      - type: action
        layout: attack
        name: Multi-Frag Grenade IV
        group: Grenades
        resource:
          id: multi-frag-grenade-iv
          displayType: gear-consumable
        damage:
          - dieCount: 3
            dieType: 4
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
  - id: multi-frag-grenade-v
    rarity: rare
    cost: 9500
    name: Multi-Frag Grenade V
    html: >-
      Target 3 areas within <me-distance length="30" />. Each creature within <me-distance length="10" /> of each target must
      make a DC 15 Dexterity saving throw. On a failed save, a creature takes 5d4 piercing damage or half as much on a successful one.
    mechanics:
      - type: action
        layout: attack
        name: Multi-Frag Grenade V
        group: Grenades
        resource:
          id: multi-frag-grenade-v
          displayType: gear-consumable
        damage:
          - dieCount: 5
            dieType: 4
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
  - id: multi-frag-grenade-vi
    rarity: rare
    cost: 10500
    name: Multi-Frag Grenade VI
    html: >-
      Target 3 areas within <me-distance length="30" />. Each creature within <me-distance length="10" /> of each target must
      make a DC 17 Dexterity saving throw. On a failed save, a creature takes 5d4 piercing damage or half as much on a successful one.
    mechanics:
      - type: action
        layout: attack
        name: Multi-Frag Grenade VI
        group: Grenades
        resource:
          id: multi-frag-grenade-vi
          displayType: gear-consumable
        damage:
          - dieCount: 5
            dieType: 4
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
  - id: multi-frag-grenade-vii
    rarity: very_rare
    cost: 12000
    name: Multi-Frag Grenade VII
    html: >-
      Target 3 areas within <me-distance length="30" />. Each creature within <me-distance length="10" /> of each target must
      make a DC 17 Dexterity saving throw. On a failed save, a creature takes 6d4 piercing damage or half as much on a successful one.
    mechanics:
      - type: action
        layout: attack
        name: Multi-Frag Grenade VII
        group: Grenades
        resource:
          id: multi-frag-grenade-vii
          displayType: gear-consumable
        damage:
          - dieCount: 6
            dieType: 4
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
  - id: multi-frag-grenade-viii
    rarity: very_rare
    cost: 12500
    name: Multi-Frag Grenade VIII
    html: >-
      Target 3 areas within <me-distance length="30" />. Each creature within <me-distance length="10" /> of each target must
      make a DC 18 Dexterity saving throw. On a failed save, a creature takes 6d4 piercing damage or half as much on a successful one.
    mechanics:
      - type: action
        layout: attack
        name: Multi-Frag Grenade VIII
        group: Grenades
        resource:
          id: multi-frag-grenade-viii
          displayType: gear-consumable
        damage:
          - dieCount: 6
            dieType: 4
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
  - id: multi-frag-grenade-ix
    rarity: very_rare
    cost: 14000
    name: Multi-Frag Grenade IX
    html: >-
      Target 3 areas within <me-distance length="30" />. Each creature within <me-distance length="10" /> of each target must
      make a DC 18 Dexterity saving throw. On a failed save, a creature takes 7d4 piercing damage or half as much on a successful one.
    mechanics:
      - type: action
        layout: attack
        name: Multi-Frag Grenade IX
        group: Grenades
        resource:
          id: multi-frag-grenade-ix
          displayType: gear-consumable
        damage:
          - dieCount: 7
            dieType: 4
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
  - id: multi-frag-grenade-x
    rarity: spectre
    cost: 16000
    name: Multi-Frag Grenade X
    html: >-
      Target 3 areas within <me-distance length="30" />. Each creature within <me-distance length="10" /> of each target must
      make a DC 19 Dexterity saving throw. On a failed save, a creature takes 8d4 piercing damage or half as much on a successful one.
    mechanics:
      - type: action
        layout: attack
        name: Multi-Frag Grenade X
        group: Grenades
        resource:
          id: multi-frag-grenade-x
          displayType: gear-consumable
        damage:
          - dieCount: 8
            dieType: 4
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
    damage: 1d4
  - mark: II
    rarity: Common
    damage: 1d4
  - mark: III
    rarity: Uncommon
    damage: 3d4
  - mark: IV
    rarity: Uncommon
    damage: 3d4
  - mark: V
    rarity: Rare
    damage: 5d4
  - mark: VI
    rarity: Rare
    damage: 5d4
  - mark: VII
    rarity: Very Rare
    damage: 6d4
  - mark: VIII
    rarity: Very Rare
    damage: 6d4
  - mark: IX
    rarity: Very Rare
    damage: 7d4
  - mark: X
    rarity: Spectre
    damage: 8d4
rarity: varies
type: grenade
cost: Varies
weight: 1
subType: ''
name: Multi-frag Grenade
consumable: true
equippable: true
---
Target 3 areas within <me-distance length="30" />. Each creature within <me-distance length="10" /> of each target must
make a Dexterity saving throw. On a failed save, a creature takes piercing damage or half as much on a successful one.

The mark of this grenade determines its Save DC, damage, and credits.

Mark|Rarity|Save DC|Damage|Credits
---|---|---|---|---
I|Common|11|1d4|1,500 credits
II|Common|13|1d4|2,500 credits
III|Uncommon|13|3d4|5,500 credits
IV|Uncommon|15|3d4|6,500 credits
V|Rare|15|5d4|9,500 credits
VI|Rare|17|5d4|10,500 credits
VII|Very Rare|17|6d4|12,000 credits
VIII|Very Rare|18|6d4|12,500 credits
IX|Very Rare|18|7d4|14,000 credits
X|Spectre|19|8d4|16,000 credits
