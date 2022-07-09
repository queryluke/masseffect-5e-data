---
subsets:
  - id: recon-mine-i
    rarity: common
    cost: 3000
    name: Recon Mine I
    html: >-
      Launch a recon mine to a target location you can see within <me-distance length="30" />. It first sticks to the target
      then scans creatures within a <me-distance length="30" adj/> cone. Each creature within the cone or enters the cone
      suffers a -1 penalty to its AC and cannot benefit from being invisible. A creature can only be affected by this
      penalty once per combat. A creature can spot the mine with a DC 10 Wisdom (Perception) check and disarm it with a
      DC 11 Intelligence (Electronics) check. If a creature fails to disarm the mine, it detonates; you may detonate
      the mine with a bonus action; and, the mine has an AC 10 and detonates when hit by a weapon attack roll. When
      the mine detonates, each creature within a <me-distance length="5" adj/>-radius sphere centred on the mine must
      make a DC 13 Dexterity saving throw. A creature suffers 2d4 thunder damage on a failed save or half as much
      damage on a successful one.
    mechanics:
      - type: action
        layout: attack
        name: Recon Mine I
        group: Grenades
        resource:
          id: recon-mine-i
          displayType: gear-consumable
        damage:
          - dieCount: 2
            dieType: 4
            type: thunder
        dc:
          save: dex
          base: 13
          proficient: false
        range:
          short: 30
          aoe:
            size: 30
            type: cone
  - id: recon-mine-ii
    rarity: common
    cost: 3500
    name: Recon Mine II
    html: >-
      Launch a recon mine to a target location you can see within <me-distance length="30" />. It first sticks to the target
      then scans creatures within a <me-distance length="30" adj/> cone. Each creature within the cone or enters the cone
      suffers a -1 penalty to its AC and cannot benefit from being invisible. A creature can only be affected by this
      penalty once per combat. A creature can spot the mine with a DC 10 Wisdom (Perception) check and disarm it with a
      DC 13 Intelligence (Electronics) check. If a creature fails to disarm the mine, it detonates; you may detonate
      the mine with a bonus action; and, the mine has an AC 10 and detonates when hit by a weapon attack roll. When
      the mine detonates, each creature within a <me-distance length="5" adj/>-radius sphere centred on the mine must
      make a DC 13 Dexterity saving throw. A creature suffers 2d4 thunder damage on a failed save or half as much
      damage on a successful one.
    mechanics:
      - type: action
        layout: attack
        name: Recon Mine II
        group: Grenades
        resource:
          id: recon-mine-ii
          displayType: gear-consumable
        damage:
          - dieCount: 2
            dieType: 4
            type: thunder
        dc:
          save: dex
          base: 13
          proficient: false
        range:
          short: 30
          aoe:
            size: 30
            type: cone
  - id: recon-mine-iii
    rarity: uncommon
    cost: 4000
    name: Recon Mine III
    html: >-
      Launch a recon mine to a target location you can see within <me-distance length="30" />. It first sticks to the target
      then scans creatures within a <me-distance length="30" adj/> cone. Each creature within the cone or enters the cone
      suffers a -1 penalty to its AC and cannot benefit from being invisible. A creature can only be affected by this
      penalty once per combat. A creature can spot the mine with a DC 10 Wisdom (Perception) check and disarm it with a
      DC 13 Intelligence (Electronics) check. If a creature fails to disarm the mine, it detonates; you may detonate
      the mine with a bonus action; and, the mine has an AC 10 and detonates when hit by a weapon attack roll. When
      the mine detonates, each creature within a <me-distance length="5" adj/>-radius sphere centred on the mine must
      make a DC 13 Dexterity saving throw. A creature suffers 4d4 thunder damage on a failed save or half as much
      damage on a successful one.
    mechanics:
      - type: action
        layout: attack
        name: Recon Mine III
        group: Grenades
        resource:
          id: recon-mine-iii
          displayType: gear-consumable
        damage:
          - dieCount: 4
            dieType: 4
            type: thunder
        dc:
          save: dex
          base: 13
          proficient: false
        range:
          short: 30
          aoe:
            size: 30
            type: cone
  - id: recon-mine-iv
    rarity: uncommon
    cost: 4500
    name: Recon Mine IV
    html: >-
      Launch a recon mine to a target location you can see within <me-distance length="30" />. It first sticks to the target
      then scans creatures within a <me-distance length="30" adj/> cone. Each creature within the cone or enters the cone
      suffers a -1 penalty to its AC and cannot benefit from being invisible. A creature can only be affected by this
      penalty once per combat. A creature can spot the mine with a DC 10 Wisdom (Perception) check and disarm it with a
      DC 15 Intelligence (Electronics) check. If a creature fails to disarm the mine, it detonates; you may detonate
      the mine with a bonus action; and, the mine has an AC 10 and detonates when hit by a weapon attack roll. When
      the mine detonates, each creature within a <me-distance length="5" adj/>-radius sphere centred on the mine must
      make a DC 13 Dexterity saving throw. A creature suffers 4d4 thunder damage on a failed save or half as much
      damage on a successful one.
    mechanics:
      - type: action
        layout: attack
        name: Recon Mine IV
        group: Grenades
        resource:
          id: recon-mine-iv
          displayType: gear-consumable
        damage:
          - dieCount: 4
            dieType: 4
            type: thunder
        dc:
          save: dex
          base: 13
          proficient: false
        range:
          short: 30
          aoe:
            size: 30
            type: cone
  - id: recon-mine-v
    rarity: rare
    cost: 7000
    name: Recon Mine V
    html: >-
      Launch a recon mine to a target location you can see within <me-distance length="30" />. It first sticks to the target
      then scans creatures within a <me-distance length="30" adj/> cone. Each creature within the cone or enters the cone
      suffers a -2 penalty to its AC and cannot benefit from being invisible. A creature can only be affected by this
      penalty once per combat. A creature can spot the mine with a DC 10 Wisdom (Perception) check and disarm it with a
      DC 15 Intelligence (Electronics) check. If a creature fails to disarm the mine, it detonates; you may detonate
      the mine with a bonus action; and, the mine has an AC 10 and detonates when hit by a weapon attack roll. When
      the mine detonates, each creature within a <me-distance length="5" adj/>-radius sphere centred on the mine must
      make a DC 13 Dexterity saving throw. A creature suffers 6d4 thunder damage on a failed save or half as much
      damage on a successful one.
    mechanics:
      - type: action
        layout: attack
        name: Recon Mine V
        group: Grenades
        resource:
          id: recon-mine-v
          displayType: gear-consumable
        damage:
          - dieCount: 6
            dieType: 4
            type: thunder
        dc:
          save: dex
          base: 13
          proficient: false
        range:
          short: 30
          aoe:
            size: 30
            type: cone
  - id: recon-mine-vi
    rarity: rare
    cost: 7500
    name: Recon Mine VI
    html: >-
      Launch a recon mine to a target location you can see within <me-distance length="30" />. It first sticks to the target
      then scans creatures within a <me-distance length="30" adj/> cone. Each creature within the cone or enters the cone
      suffers a -2 penalty to its AC and cannot benefit from being invisible. A creature can only be affected by this
      penalty once per combat. A creature can spot the mine with a DC 10 Wisdom (Perception) check and disarm it with a
      DC 17 Intelligence (Electronics) check. If a creature fails to disarm the mine, it detonates; you may detonate
      the mine with a bonus action; and, the mine has an AC 10 and detonates when hit by a weapon attack roll. When
      the mine detonates, each creature within a <me-distance length="5" adj/>-radius sphere centred on the mine must
      make a DC 13 Dexterity saving throw. A creature suffers 6d4 thunder damage on a failed save or half as much
      damage on a successful one.
    mechanics:
      - type: action
        layout: attack
        name: Recon Mine VI
        group: Grenades
        resource:
          id: recon-mine-vi
          displayType: gear-consumable
        damage:
          - dieCount: 6
            dieType: 4
            type: thunder
        dc:
          save: dex
          base: 13
          proficient: false
        range:
          short: 30
          aoe:
            size: 30
            type: cone
  - id: recon-mine-vii
    rarity: very_rare
    cost: 9000
    name: Recon Mine VII
    html: >-
      Launch a recon mine to a target location you can see within <me-distance length="30" />. It first sticks to the target
      then scans creatures within a <me-distance length="30" adj/> cone. Each creature within the cone or enters the cone
      suffers a -3 penalty to its AC and cannot benefit from being invisible. A creature can only be affected by this
      penalty once per combat. A creature can spot the mine with a DC 10 Wisdom (Perception) check and disarm it with a
      DC 17 Intelligence (Electronics) check. If a creature fails to disarm the mine, it detonates; you may detonate
      the mine with a bonus action; and, the mine has an AC 10 and detonates when hit by a weapon attack roll. When
      the mine detonates, each creature within a <me-distance length="5" adj/>-radius sphere centred on the mine must
      make a DC 13 Dexterity saving throw. A creature suffers 6d4 thunder damage on a failed save or half as much
      damage on a successful one.
    mechanics:
      - type: action
        layout: attack
        name: Recon Mine VII
        group: Grenades
        resource:
          id: recon-mine-vii
          displayType: gear-consumable
        damage:
          - dieCount: 6
            dieType: 4
            type: thunder
        dc:
          save: dex
          base: 13
          proficient: false
        range:
          short: 30
          aoe:
            size: 30
            type: cone
  - id: recon-mine-viii
    rarity: very_rare
    cost: 10000
    name: Recon Mine VIII
    html: >-
      Launch a recon mine to a target location you can see within <me-distance length="30" />. It first sticks to the target
      then scans creatures within a <me-distance length="30" adj/> cone. Each creature within the cone or enters the cone
      suffers a -3 penalty to its AC and cannot benefit from being invisible. A creature can only be affected by this
      penalty once per combat. A creature can spot the mine with a DC 10 Wisdom (Perception) check and disarm it with a
      DC 18 Intelligence (Electronics) check. If a creature fails to disarm the mine, it detonates; you may detonate
      the mine with a bonus action; and, the mine has an AC 10 and detonates when hit by a weapon attack roll. When
      the mine detonates, each creature within a <me-distance length="5" adj/>-radius sphere centred on the mine must
      make a DC 13 Dexterity saving throw. A creature suffers 7d4 thunder damage on a failed save or half as much
      damage on a successful one.
    mechanics:
      - type: action
        layout: attack
        name: Recon Mine VIII
        group: Grenades
        resource:
          id: recon-mine-viii
          displayType: gear-consumable
        damage:
          - dieCount: 7
            dieType: 4
            type: thunder
        dc:
          save: dex
          base: 13
          proficient: false
        range:
          short: 30
          aoe:
            size: 30
            type: cone
  - id: recon-mine-ix
    rarity: very_rare
    cost: 11000
    name: Recon Mine IX
    html: >-
      Launch a recon mine to a target location you can see within <me-distance length="30" />. It first sticks to the target
      then scans creatures within a <me-distance length="30" adj/> cone. Each creature within the cone or enters the cone
      suffers a -3 penalty to its AC and cannot benefit from being invisible. A creature can only be affected by this
      penalty once per combat. A creature can spot the mine with a DC 10 Wisdom (Perception) check and disarm it with a
      DC 18 Intelligence (Electronics) check. If a creature fails to disarm the mine, it detonates; you may detonate
      the mine with a bonus action; and, the mine has an AC 10 and detonates when hit by a weapon attack roll. When
      the mine detonates, each creature within a <me-distance length="5" adj/>-radius sphere centred on the mine must
      make a DC 13 Dexterity saving throw. A creature suffers 8d4 thunder damage on a failed save or half as much
      damage on a successful one.
    mechanics:
      - type: action
        layout: attack
        name: Recon Mine IX
        group: Grenades
        resource:
          id: recon-mine-ix
          displayType: gear-consumable
        damage:
          - dieCount: 8
            dieType: 4
            type: thunder
        dc:
          save: dex
          base: 13
          proficient: false
        range:
          short: 30
          aoe:
            size: 30
            type: cone
  - id: recon-mine-x
    rarity: spectre
    cost: 13000
    name: Recon Mine X
    html: >-
      Launch a recon mine to a target location you can see within <me-distance length="30" />. It first sticks to the target
      then scans creatures within a <me-distance length="30" adj/> cone. Each creature within the cone or enters the cone
      suffers a -4 penalty to its AC and cannot benefit from being invisible. A creature can only be affected by this
      penalty once per combat. A creature can spot the mine with a DC 10 Wisdom (Perception) check and disarm it with a
      DC 19 Intelligence (Electronics) check. If a creature fails to disarm the mine, it detonates; you may detonate
      the mine with a bonus action; and, the mine has an AC 10 and detonates when hit by a weapon attack roll. When
      the mine detonates, each creature within a <me-distance length="5" adj/>-radius sphere centred on the mine must
      make a DC 13 Dexterity saving throw. A creature suffers 8d4 thunder damage on a failed save or half as much
      damage on a successful one.
    mechanics:
      - type: action
        layout: attack
        name: Recon Mine IX
        group: Grenades
        resource:
          id: recon-mine-ix
          displayType: gear-consumable
        damage:
          - dieCount: 8
            dieType: 4
            type: thunder
        dc:
          save: dex
          base: 13
          proficient: false
        range:
          short: 30
          aoe:
            size: 30
            type: cone
marks:
  - mark: I
    rarity: Common
    damage: 2d4
  - mark: II
    rarity: Common
    damage: 2d4
  - mark: III
    rarity: Uncommon
    damage: 4d4
  - mark: IV
    rarity: Uncommon
    damage: 4d4
  - mark: V
    rarity: Rare
    damage: 6d4
  - mark: VI
    rarity: Rare
    damage: 6d4
  - mark: VII
    rarity: Very Rare
    damage: 6d4
  - mark: VIII
    rarity: Very Rare
    damage: 7d4
  - mark: IX
    rarity: Very Rare
    damage: 8d4
  - mark: X
    rarity: Spectre
    damage: 8d4
rarity: varies
type: grenade
cost: Varies
weight: 1
subType: ''
name: Recon Mine
consumable: true
---
Launch a recon mine to a location of your choice within <me-distance length="30" />. It first sticks to the target
location then scans creatures within a <me-distance length="30" adj/> cone, relaying tactical weak points about the creature's
armor and location. After your turn ends, any hostile creature that walks through the scanning cone suffers a penalty to
its AC and cannot benefit from being <me-condition id="invisible"/>. Each creature can only be affected by this penalty once.

A creature can spot the mine with a successful DC 10 Wisdom (Perception) check.

To disarm the mine, a creature must pass an Intelligence (Electronics) check. If the check fails, the mine detonates, and
the creature that made the check automatically fails its saving throw. Additionally, the mine has an AC 10 and detonates when hit by a weapon attack roll.

When the mine detonates, each creature within a <me-distance length="5" adj/>-radius sphere centred on the mine must
make a DC 13 Dexterity saving throw. A creature suffers thunder damage (see below) on a failed save
or half as much damage on a successful one.

The mark of this mine determines the DC of its AC penalty, Intelligence (Electronics) check, damage, and credits.

Mark|Rarity|AC Penalty|Intelligence (Electronics) DC|Damage|Credits
---|---|---|---|---|---
I|Common|-1|11|2d4|3,000 credits
II|Common|-1|13|2d4|3,500 credits
III|Uncommon|-1|13|4d4|4,000 credits
IV|Uncommon|-1|15|4d4|4,500 credits
V|Rare|-2|15|6d4|7,000 credits
VI|Rare|-2|17|6d4|7,500 credits
VII|Very Rare|-3|17|6d4|9,000 credits
VIII|Very Rare|-3|18|7d4|10,000 credits
IX|Very Rare|-3|18|8d4|11,000 credits
X|Spectre|-4|19|8d4|13,000 credits


