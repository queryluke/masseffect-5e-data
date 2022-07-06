---
subsets:
  - id: cain-trip-mine-i
    rarity: common
    cost: 3300
    name: Cain Trip Mine I
    html: >-
      Launch a Cain Trip Mine to a point you can see within <me-distance length="60" />. The mine affixes to a solid surface and projects
      a <me-distance length="15" adj />-long tripwire beam. When a creature or object passes through the tripwire, the mine detonates and
      each creature within a <me-distance length="10" adj/>-radius sphere centred on the mine must
      make a DC 15 Dexterity saving throw. A creature suffers 1d12 thunder damage on a failed save or half as much damage on a successful one.
      The mine can be found with a DC 13 Wisdom (Perception) check and disarmed with a DC 11 Intelligence (Electronics) check. If a creature
      fails to disarm the mine, it detonates. Additionally, the mine has an AC 10 and detonates when hit by a weapon attack roll.
    mechanics:
      - type: action
        layout: attack
        name: Cain Trip Mine I
        group: Grenades
        resource:
          id: cain-trip-mine-i
          displayType: gear-consumable
        damage:
          - dieCount: 1
            dieType: 12
            type: thunder
        dc:
          save: dex
          base: 15
          proficient: false
        range:
          short: 60
          aoe:
            size: 10
            type: sphere
  - id: cain-trip-mine-ii
    rarity: common
    cost: 4600
    name: Cain Trip Mine II
    html: >-
      Launch a Cain Trip Mine to a point you can see within <me-distance length="60" />. The mine affixes to a solid surface and projects
      a <me-distance length="15" adj />-long tripwire beam. When a creature or object passes through the tripwire, the mine detonates and
      each creature within a <me-distance length="10" adj/>-radius sphere centred on the mine must
      make a DC 15 Dexterity saving throw. A creature suffers 2d12 thunder damage on a failed save or half as much damage on a successful one.
      The mine can be found with a DC 13 Wisdom (Perception) check and disarmed with a DC 13 Intelligence (Electronics) check. If a creature
      fails to disarm the mine, it detonates. Additionally, the mine has an AC 10 and detonates when hit by a weapon attack roll.
    mechanics:
      - type: action
        layout: attack
        name: Cain Trip Mine II
        group: Grenades
        resource:
          id: cain-trip-mine-ii
          displayType: gear-consumable
        damage:
          - dieCount: 2
            dieType: 12
            type: thunder
        dc:
          save: dex
          base: 15
          proficient: false
        range:
          short: 60
          aoe:
            size: 10
            type: sphere
  - id: cain-trip-mine-iii
    rarity: uncommon
    cost: 5900
    name: Cain Trip Mine III
    html: >-
      Launch a Cain Trip Mine to a point you can see within <me-distance length="60" />. The mine affixes to a solid surface and projects
      a <me-distance length="15" adj />-long tripwire beam. When a creature or object passes through the tripwire, the mine detonates and
      each creature within a <me-distance length="10" adj/>-radius sphere centred on the mine must
      make a DC 15 Dexterity saving throw. A creature suffers 3d12 thunder damage on a failed save or half as much damage on a successful one.
      The mine can be found with a DC 13 Wisdom (Perception) check and disarmed with a DC 13 Intelligence (Electronics) check. If a creature
      fails to disarm the mine, it detonates. Additionally, the mine has an AC 10 and detonates when hit by a weapon attack roll.
    mechanics:
      - type: action
        layout: attack
        name: Cain Trip Mine III
        group: Grenades
        resource:
          id: cain-trip-mine-iii
          displayType: gear-consumable
        damage:
          - dieCount: 3
            dieType: 12
            type: thunder
        dc:
          save: dex
          base: 15
          proficient: false
        range:
          short: 60
          aoe:
            size: 10
            type: sphere
  - id: cain-trip-mine-iv
    rarity: uncommon
    cost: 7200
    name: Cain Trip Mine IV
    html: >-
      Launch a Cain Trip Mine to a point you can see within <me-distance length="60" />. The mine affixes to a solid surface and projects
      a <me-distance length="15" adj />-long tripwire beam. When a creature or object passes through the tripwire, the mine detonates and
      each creature within a <me-distance length="10" adj/>-radius sphere centred on the mine must
      make a DC 15 Dexterity saving throw. A creature suffers 4d12 thunder damage on a failed save or half as much damage on a successful one.
      The mine can be found with a DC 13 Wisdom (Perception) check and disarmed with a DC 15 Intelligence (Electronics) check. If a creature
      fails to disarm the mine, it detonates. Additionally, the mine has an AC 10 and detonates when hit by a weapon attack roll.
    mechanics:
      - type: action
        layout: attack
        name: Cain Trip Mine IV
        group: Grenades
        resource:
          id: cain-trip-mine-iv
          displayType: gear-consumable
        damage:
          - dieCount: 4
            dieType: 12
            type: thunder
        dc:
          save: dex
          base: 15
          proficient: false
        range:
          short: 60
          aoe:
            size: 10
            type: sphere
  - id: cain-trip-mine-v
    rarity: rare
    cost: 8500
    name: Cain Trip Mine V
    html: >-
      Launch a Cain Trip Mine to a point you can see within <me-distance length="60" />. The mine affixes to a solid surface and projects
      a <me-distance length="15" adj />-long tripwire beam. When a creature or object passes through the tripwire, the mine detonates and
      each creature within a <me-distance length="10" adj/>-radius sphere centred on the mine must
      make a DC 15 Dexterity saving throw. A creature suffers 5d12 thunder damage on a failed save or half as much damage on a successful one.
      The mine can be found with a DC 13 Wisdom (Perception) check and disarmed with a DC 15 Intelligence (Electronics) check. If a creature
      fails to disarm the mine, it detonates. Additionally, the mine has an AC 10 and detonates when hit by a weapon attack roll.
    mechanics:
      - type: action
        layout: attack
        name: Cain Trip Mine V
        group: Grenades
        resource:
          id: cain-trip-mine-v
          displayType: gear-consumable
        damage:
          - dieCount: 5
            dieType: 12
            type: thunder
        dc:
          save: dex
          base: 15
          proficient: false
        range:
          short: 60
          aoe:
            size: 10
            type: sphere
  - id: cain-trip-mine-vi
    rarity: rare
    cost: 9800
    name: Cain Trip Mine VI
    html: >-
      Launch a Cain Trip Mine to a point you can see within <me-distance length="60" />. The mine affixes to a solid surface and projects
      a <me-distance length="15" adj />-long tripwire beam. When a creature or object passes through the tripwire, the mine detonates and
      each creature within a <me-distance length="10" adj/>-radius sphere centred on the mine must
      make a DC 15 Dexterity saving throw. A creature suffers 6d12 thunder damage on a failed save or half as much damage on a successful one.
      The mine can be found with a DC 13 Wisdom (Perception) check and disarmed with a DC 17 Intelligence (Electronics) check. If a creature
      fails to disarm the mine, it detonates. Additionally, the mine has an AC 10 and detonates when hit by a weapon attack roll.
    mechanics:
      - type: action
        layout: attack
        name: Cain Trip Mine VI
        group: Grenades
        resource:
          id: cain-trip-mine-vi
          displayType: gear-consumable
        damage:
          - dieCount: 6
            dieType: 12
            type: thunder
        dc:
          save: dex
          base: 15
          proficient: false
        range:
          short: 60
          aoe:
            size: 10
            type: sphere
  - id: cain-trip-mine-vii
    rarity: very_rare
    cost: 11100
    name: Cain Trip Mine VII
    html: >-
      Launch a Cain Trip Mine to a point you can see within <me-distance length="60" />. The mine affixes to a solid surface and projects
      a <me-distance length="15" adj />-long tripwire beam. When a creature or object passes through the tripwire, the mine detonates and
      each creature within a <me-distance length="10" adj/>-radius sphere centred on the mine must
      make a DC 15 Dexterity saving throw. A creature suffers 7d12 thunder damage on a failed save or half as much damage on a successful one.
      The mine can be found with a DC 13 Wisdom (Perception) check and disarmed with a DC 17 Intelligence (Electronics) check. If a creature
      fails to disarm the mine, it detonates. Additionally, the mine has an AC 10 and detonates when hit by a weapon attack roll.
    mechanics:
      - type: action
        layout: attack
        name: Cain Trip Mine VII
        group: Grenades
        resource:
          id: cain-trip-mine-vii
          displayType: gear-consumable
        damage:
          - dieCount: 7
            dieType: 12
            type: thunder
        dc:
          save: dex
          base: 15
          proficient: false
        range:
          short: 60
          aoe:
            size: 10
            type: sphere
  - id: cain-trip-mine-viii
    rarity: very_rare
    cost: 12400
    name: Cain Trip Mine VIII
    html: >-
      Launch a Cain Trip Mine to a point you can see within <me-distance length="60" />. The mine affixes to a solid surface and projects
      a <me-distance length="15" adj />-long tripwire beam. When a creature or object passes through the tripwire, the mine detonates and
      each creature within a <me-distance length="10" adj/>-radius sphere centred on the mine must
      make a DC 15 Dexterity saving throw. A creature suffers 8d12 thunder damage on a failed save or half as much damage on a successful one.
      The mine can be found with a DC 13 Wisdom (Perception) check and disarmed with a DC 18 Intelligence (Electronics) check. If a creature
      fails to disarm the mine, it detonates. Additionally, the mine has an AC 10 and detonates when hit by a weapon attack roll.
    mechanics:
      - type: action
        layout: attack
        name: Cain Trip Mine VIII
        group: Grenades
        resource:
          id: cain-trip-mine-viii
          displayType: gear-consumable
        damage:
          - dieCount: 8
            dieType: 12
            type: thunder
        dc:
          save: dex
          base: 15
          proficient: false
        range:
          short: 60
          aoe:
            size: 10
            type: sphere
  - id: cain-trip-mine-ix
    rarity: very_rare
    cost: 13700
    name: Cain Trip Mine IX
    html: >-
      Launch a Cain Trip Mine to a point you can see within <me-distance length="60" />. The mine affixes to a solid surface and projects
      a <me-distance length="15" adj />-long tripwire beam. When a creature or object passes through the tripwire, the mine detonates and
      each creature within a <me-distance length="10" adj/>-radius sphere centred on the mine must
      make a DC 15 Dexterity saving throw. A creature suffers 9d12 thunder damage on a failed save or half as much damage on a successful one.
      The mine can be found with a DC 13 Wisdom (Perception) check and disarmed with a DC 18 Intelligence (Electronics) check. If a creature
      fails to disarm the mine, it detonates. Additionally, the mine has an AC 10 and detonates when hit by a weapon attack roll.
    mechanics:
      - type: action
        layout: attack
        name: Cain Trip Mine IX
        group: Grenades
        resource:
          id: cain-trip-mine-ix
          displayType: gear-consumable
        damage:
          - dieCount: 9
            dieType: 12
            type: thunder
        dc:
          save: dex
          base: 15
          proficient: false
        range:
          short: 60
          aoe:
            size: 10
            type: sphere
  - id: cain-trip-mine-x
    rarity: spectre
    cost: 13700
    name: Cain Trip Mine X
    html: >-
      Launch a Cain Trip Mine to a point you can see within <me-distance length="60" />. The mine affixes to a solid surface and projects
      a <me-distance length="15" adj />-long tripwire beam. When a creature or object passes through the tripwire, the mine detonates and
      each creature within a <me-distance length="10" adj/>-radius sphere centred on the mine must
      make a DC 15 Dexterity saving throw. A creature suffers 10d12 thunder damage on a failed save or half as much damage on a successful one.
      The mine can be found with a DC 13 Wisdom (Perception) check and disarmed with a DC 19 Intelligence (Electronics) check. If a creature
      fails to disarm the mine, it detonates. Additionally, the mine has an AC 10 and detonates when hit by a weapon attack roll.
    mechanics:
      - type: action
        layout: attack
        name: Cain Trip Mine IX
        group: Grenades
        resource:
          id: cain-trip-mine-ix
          displayType: gear-consumable
        damage:
          - dieCount: 10
            dieType: 12
            type: thunder
        dc:
          save: dex
          base: 15
          proficient: false
        range:
          short: 60
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
    damage: 4d12
  - mark: V
    rarity: Rare
    damage: 5d12
  - mark: VI
    rarity: Rare
    damage: 6d12
  - mark: VII
    rarity: Very Rare
    damage: 7d12
  - mark: VIII
    rarity: Very Rare
    damage: 8d12
  - mark: IX
    rarity: Very Rare
    damage: 9d12
  - mark: X
    rarity: Spectre
    damage: 10d12
rarity: varies
type: grenade
cost: Varies
weight: 1
subType: ''
name: Cain Trip Mine
consumable: true
---
Launch a Cain Trip Mine to a point you can see within <me-distance length="60" />. The mine affixes to a solid surface and projects
a <me-distance length="15" adj />-long tripwire beam. When a creature or object passes through the tripwire, the mine detonates.

A creature can spot the mine with a successful DC 13 Wisdom (Perception) check.

To disarm the mine, a creature must pass an Intelligence (Electronics) check. If the check fails, the mine detonates, and
the creature that made the check automatically fails its saving throw. Additionally, the mine has an AC 10 and detonates when hit by a weapon attack roll.

When the mine detonates, each creature within a <me-distance length="10" adj/>-radius sphere centred on the mine must
make a DC 15 Dexterity saving throw. A creature suffers thunder damage (see below) on a failed save
or half as much damage on a successful one.

The mark of this mine determines the DC of its Intelligence (Electronics) check, damage, and credits.

Mark|Rarity|Intelligence (Electronics) DC|Damage|Credits
---|---|---|---|---
I|Common|11|1d12|3,300 credits
II|Common|13|2d12|4,600 credits
III|Uncommon|13|3d12|5,900 credits
IV|Uncommon|15|4d12|7,200 credits
V|Rare|15|5d12|8,500 credits
VI|Rare|17|6d12|9,800 credits
VII|Very Rare|17|7d12|11,100 credits
VIII|Very Rare|18|8d12|12,400 credits
IX|Very Rare|18|9d12|13,700 credits
X|Spectre|19|10d12|15,000 credits
