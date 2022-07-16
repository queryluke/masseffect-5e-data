---
subsets:
  - id: inferno-grenade-i
    rarity: common
    cost: 1000
    name: Inferno Grenade I
    html: >-
      Target an area within <me-distance length="30" />. Each creature within <me-distance length="10" /> of the target
      must make a DC 11 Dexterity saving throw. A creature takes 2d4 fire damage on a failed save or half as
      much on a successful one. The area within a <me-distance length="10" adj /> radius, centered on the target
      continues to burn for 1 minute. A creature must also make the saving throw when it enters the burning space
      for the first time on a turn or ends its turn there.
    mechanics:
      - type: action
        layout: attack
        name: Inferno Grenade I
        group: Grenades
        resource:
          id: inferno-grenade-i
          displayType: gear-consumable
        damage:
          - dieCount: 2
            dieType: 4
            type: fire
        dc:
          save: dex
          base: 11
          proficient: false
        range:
          short: 30
          aoe:
            size: 10
            type: sphere
  - id: inferno-grenade-ii
    rarity: common
    cost: 2000
    name: Inferno Grenade II
    html: >-
      Target an area within <me-distance length="30" />. Each creature within <me-distance length="10" /> of the target
      must make a DC 13 Dexterity saving throw. A creature takes 2d4 fire damage on a failed save or half as
      much on a successful one. The area within a <me-distance length="10" adj /> radius, centered on the target
      continues to burn for 1 minute. A creature must also make the saving throw when it enters the burning space
      for the first time on a turn or ends its turn there.
    mechanics:
      - type: action
        layout: attack
        name: Inferno Grenade II
        group: Grenades
        resource:
          id: inferno-grenade-ii
          displayType: gear-consumable
        damage:
          - dieCount: 2
            dieType: 4
            type: fire
        dc:
          save: dex
          base: 13
          proficient: false
        range:
          short: 30
          aoe:
            size: 10
            type: sphere
  - id: inferno-grenade-iii
    rarity: uncommon
    cost: 2500
    name: Inferno Grenade III
    html: >-
      Target an area within <me-distance length="30" />. Each creature within <me-distance length="10" /> of the target
      must make a DC 13 Dexterity saving throw. A creature takes 3d4 fire damage on a failed save or half as
      much on a successful one. The area within a <me-distance length="10" adj /> radius, centered on the target
      continues to burn for 1 minute. A creature must also make the saving throw when it enters the burning space
      for the first time on a turn or ends its turn there.
    mechanics:
      - type: action
        layout: attack
        name: Inferno Grenade III
        group: Grenades
        resource:
          id: inferno-grenade-iii
          displayType: gear-consumable
        damage:
          - dieCount: 3
            dieType: 4
            type: fire
        dc:
          save: dex
          base: 13
          proficient: false
        range:
          short: 30
          aoe:
            size: 10
            type: sphere
  - id: inferno-grenade-iv
    rarity: uncommon
    cost: 3500
    name: Inferno Grenade IV
    html: >-
      Target an area within <me-distance length="30" />. Each creature within <me-distance length="10" /> of the target
      must make a DC 15 Dexterity saving throw. A creature takes 3d4 fire damage on a failed save or half as
      much on a successful one. The area within a <me-distance length="10" adj /> radius, centered on the target
      continues to burn for 1 minute. A creature must also make the saving throw when it enters the burning space
      for the first time on a turn or ends its turn there.
    mechanics:
      - type: action
        layout: attack
        name: Inferno Grenade IV
        group: Grenades
        resource:
          id: inferno-grenade-iv
          displayType: gear-consumable
        damage:
          - dieCount: 3
            dieType: 4
            type: fire
        dc:
          save: dex
          base: 15
          proficient: false
        range:
          short: 30
          aoe:
            size: 10
            type: sphere
  - id: inferno-grenade-v
    rarity: rare
    cost: 4500
    name: Inferno Grenade V
    html: >-
      Target an area within <me-distance length="30" />. Each creature within <me-distance length="10" /> of the target
      must make a DC 15 Dexterity saving throw. A creature takes 5d4 fire damage on a failed save or half as
      much on a successful one. The area within a <me-distance length="10" adj /> radius, centered on the target
      continues to burn for 1 minute. A creature must also make the saving throw when it enters the burning space
      for the first time on a turn or ends its turn there.
    mechanics:
      - type: action
        layout: attack
        name: Inferno Grenade V
        group: Grenades
        resource:
          id: inferno-grenade-v
          displayType: gear-consumable
        damage:
          - dieCount: 5
            dieType: 4
            type: fire
        dc:
          save: dex
          base: 15
          proficient: false
        range:
          short: 30
          aoe:
            size: 10
            type: sphere
  - id: inferno-grenade-vi
    rarity: rare
    cost: 5500
    name: Inferno Grenade VI
    html: >-
      Target an area within <me-distance length="30" />. Each creature within <me-distance length="10" /> of the target
      must make a DC 17 Dexterity saving throw. A creature takes 5d4 fire damage on a failed save or half as
      much on a successful one. The area within a <me-distance length="10" adj /> radius, centered on the target
      continues to burn for 1 minute. A creature must also make the saving throw when it enters the burning space
      for the first time on a turn or ends its turn there.
    mechanics:
      - type: action
        layout: attack
        name: Inferno Grenade VI
        group: Grenades
        resource:
          id: inferno-grenade-vi
          displayType: gear-consumable
        damage:
          - dieCount: 5
            dieType: 4
            type: fire
        dc:
          save: dex
          base: 17
          proficient: false
        range:
          short: 30
          aoe:
            size: 10
            type: sphere
  - id: inferno-grenade-vii
    rarity: very_rare
    cost: 6000
    name: Inferno Grenade VII
    html: >-
      Target an area within <me-distance length="30" />. Each creature within <me-distance length="10" /> of the target
      must make a DC 17 Dexterity saving throw. A creature takes 6d4 fire damage on a failed save or half as
      much on a successful one. The area within a <me-distance length="10" adj /> radius, centered on the target
      continues to burn for 1 minute. A creature must also make the saving throw when it enters the burning space
      for the first time on a turn or ends its turn there.
    mechanics:
      - type: action
        layout: attack
        name: Inferno Grenade VII
        group: Grenades
        resource:
          id: inferno-grenade-vii
          displayType: gear-consumable
        damage:
          - dieCount: 6
            dieType: 4
            type: fire
        dc:
          save: dex
          base: 17
          proficient: false
        range:
          short: 30
          aoe:
            size: 10
            type: sphere
  - id: inferno-grenade-viii
    rarity: very_rare
    cost: 6500
    name: Inferno Grenade VIII
    html: >-
      Target an area within <me-distance length="30" />. Each creature within <me-distance length="10" /> of the target
      must make a DC 18 Dexterity saving throw. A creature takes 6d4 fire damage on a failed save or half as
      much on a successful one. The area within a <me-distance length="10" adj /> radius, centered on the target
      continues to burn for 1 minute. A creature must also make the saving throw when it enters the burning space
      for the first time on a turn or ends its turn there.
    mechanics:
      - type: action
        layout: attack
        name: Inferno Grenade VIII
        group: Grenades
        resource:
          id: inferno-grenade-viii
          displayType: gear-consumable
        damage:
          - dieCount: 6
            dieType: 4
            type: fire
        dc:
          save: dex
          base: 18
          proficient: false
        range:
          short: 30
          aoe:
            size: 10
            type: sphere
  - id: inferno-grenade-ix
    rarity: very_rare
    cost: 7000
    name: Inferno Grenade IX
    html: >-
      Target an area within <me-distance length="30" />. Each creature within <me-distance length="10" /> of the target
      must make a DC 18 Dexterity saving throw. A creature takes 7d4 fire damage on a failed save or half as
      much on a successful one. The area within a <me-distance length="10" adj /> radius, centered on the target
      continues to burn for 1 minute. A creature must also make the saving throw when it enters the burning space
      for the first time on a turn or ends its turn there.
    mechanics:
      - type: action
        layout: attack
        name: Inferno Grenade IX
        group: Grenades
        resource:
          id: inferno-grenade-IX
          displayType: gear-consumable
        damage:
          - dieCount: 7
            dieType: 4
            type: fire
        dc:
          save: dex
          base: 18
          proficient: false
        range:
          short: 30
          aoe:
            size: 10
            type: sphere
  - id: inferno-grenade-x
    rarity: spectre
    cost: 8000
    name: Inferno Grenade X
    html: >-
      Target an area within <me-distance length="30" />. Each creature within <me-distance length="10" /> of the target
      must make a DC 19 Dexterity saving throw. A creature takes 8d4 fire damage on a failed save or half as
      much on a successful one. The area within a <me-distance length="10" adj /> radius, centered on the target
      continues to burn for 1 minute. A creature must also make the saving throw when it enters the burning space
      for the first time on a turn or ends its turn there.
    mechanics:
      - type: action
        layout: attack
        name: Inferno Grenade X
        group: Grenades
        resource:
          id: inferno-grenade-x
          displayType: gear-consumable
        damage:
          - dieCount: 8
            dieType: 4
            type: fire
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
    damage: 2d4
  - mark: II
    rarity: Common
    damage: 2,000 credits
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
consumable: true
equippable: true
name: Inferno Grenade
---
Target an area within <me-distance length="30" />. Each creature within <me-distance length="10" /> of the target must make a Dexterity saving throw.
On a failed save, a creature suffers fire damage or half as much on a successful one. The area within a <me-distance length="10" adj /> radius, centered on the target
continues to burn for 1 minute.

A creature must also make the saving throw when it enters the burning space for the first time on a turn or ends its turn there.

The mark of this grenade determines its Save DC, damage, and credits.

Mark|Rarity|Save DC|Damage|Credits
---|---|---|---|---
I|Common|11|2d4|1,000 credits
II|Common|13|2d4|2,000 credits
III|Uncommon|13|3d4|2,500 credits
IV|Uncommon|15|3d4|3,500 credits
V|Rare|15|5d4|4,500 credits
VI|Rare|17|5d4|5,500 credits
VII|Very Rare|17|6d4|6,000 credits
VIII|Very Rare|18|6d4|6,500 credits
IX|Very Rare|18|7d4|7,000 credits
X|Spectre|19|8d4|8,000 credits
