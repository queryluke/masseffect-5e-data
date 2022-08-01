---
subsets:
  - id: proximity-mine-i
    rarity: common
    cost: 900
    name: Proximity Mine I
    html: >-
      Place a proximity mine within <me-distance length="5" />. On your turn, you may use a bonus action to arm or
      disarm the mine, as long as you are within <me-distance length="500" /> of it. While armed, if a creature moves within
      <me-distance length="5" /> of the mine, it detonates and each creature within a <me-distance length="5" adj/>-radius
      sphere centred on the mine suffers 1d8 thunder damage. A creature can spot the mine with a DC 11 Wisdom (Perception) check.
      Additionally, the mine has an AC 10 and detonates when hit by a weapon attack roll.
    mechanics:
      - type: action
        layout: attack
        name: Proximity Mine I
        group: Grenades
        resource:
          id: proximity-mine-i
          displayType: gear-consumable
        damage:
          - dieCount: 1
            dieType: 8
            type: thunder
        range:
          short: 5
          aoe:
            size: 5
            type: sphere
  - id: proximity-mine-ii
    rarity: common
    cost: 1800
    name: Proximity Mine II
    html: >-
      Place a proximity mine within <me-distance length="5" />. On your turn, you may use a bonus action to arm or
      disarm the mine, as long as you are within <me-distance length="500" /> of it. While armed, if a creature moves within
      <me-distance length="5" /> of the mine, it detonates and each creature within a <me-distance length="5" adj/>-radius
      sphere centred on the mine suffers 2d8 thunder damage. A creature can spot the mine with a DC 13 Wisdom (Perception) check.
      Additionally, the mine has an AC 10 and detonates when hit by a weapon attack roll.
    mechanics:
      - type: action
        layout: attack
        name: Proximity Mine II
        group: Grenades
        resource:
          id: proximity-mine-ii
          displayType: gear-consumable
        damage:
          - dieCount: 2
            dieType: 8
            type: thunder
        range:
          short: 5
          aoe:
            size: 5
            type: sphere
  - id: proximity-mine-iii
    rarity: uncommon
    cost: 2700
    name: Proximity Mine III
    html: >-
      Place a proximity mine within <me-distance length="5" />. On your turn, you may use a bonus action to arm or
      disarm the mine, as long as you are within <me-distance length="500" /> of it. While armed, if a creature moves within
      <me-distance length="5" /> of the mine, it detonates and each creature within a <me-distance length="5" adj/>-radius
      sphere centred on the mine suffers 3d8 thunder damage. A creature can spot the mine with a DC 13 Wisdom (Perception) check.
      Additionally, the mine has an AC 10 and detonates when hit by a weapon attack roll.
    mechanics:
      - type: action
        layout: attack
        name: Proximity Mine III
        group: Grenades
        resource:
          id: proximity-mine-iii
          displayType: gear-consumable
        damage:
          - dieCount: 3
            dieType: 8
            type: thunder
        range:
          short: 5
          aoe:
            size: 5
            type: sphere
  - id: proximity-mine-iv
    rarity: uncommon
    cost: 3600
    name: Proximity Mine IV
    html: >-
      Place a proximity mine within <me-distance length="5" />. On your turn, you may use a bonus action to arm or
      disarm the mine, as long as you are within <me-distance length="500" /> of it. While armed, if a creature moves within
      <me-distance length="5" /> of the mine, it detonates and each creature within a <me-distance length="5" adj/>-radius
      sphere centred on the mine suffers 4d8 thunder damage. A creature can spot the mine with a DC 15 Wisdom (Perception) check.
      Additionally, the mine has an AC 10 and detonates when hit by a weapon attack roll.
    mechanics:
      - type: action
        layout: attack
        name: Proximity Mine IV
        group: Grenades
        resource:
          id: proximity-mine-iv
          displayType: gear-consumable
        damage:
          - dieCount: 4
            dieType: 8
            type: thunder
        range:
          short: 5
          aoe:
            size: 5
            type: sphere
  - id: proximity-mine-v
    rarity: rare
    cost: 4500
    name: Proximity Mine V
    html: >-
      Place a proximity mine within <me-distance length="5" />. On your turn, you may use a bonus action to arm or
      disarm the mine, as long as you are within <me-distance length="500" /> of it. While armed, if a creature moves within
      <me-distance length="5" /> of the mine, it detonates and each creature within a <me-distance length="5" adj/>-radius
      sphere centred on the mine suffers 5d8 thunder damage. A creature can spot the mine with a DC 15 Wisdom (Perception) check.
      Additionally, the mine has an AC 10 and detonates when hit by a weapon attack roll.
    mechanics:
      - type: action
        layout: attack
        name: Proximity Mine V
        group: Grenades
        resource:
          id: proximity-mine-v
          displayType: gear-consumable
        damage:
          - dieCount: 5
            dieType: 8
            type: thunder
        range:
          short: 5
          aoe:
            size: 5
            type: sphere
  - id: proximity-mine-vi
    rarity: rare
    cost: 5400
    name: Proximity Mine VI
    html: >-
      Place a proximity mine within <me-distance length="5" />. On your turn, you may use a bonus action to arm or
      disarm the mine, as long as you are within <me-distance length="500" /> of it. While armed, if a creature moves within
      <me-distance length="5" /> of the mine, it detonates and each creature within a <me-distance length="5" adj/>-radius
      sphere centred on the mine suffers 6d8 thunder damage. A creature can spot the mine with a DC 17 Wisdom (Perception) check.
      Additionally, the mine has an AC 10 and detonates when hit by a weapon attack roll.
    mechanics:
      - type: action
        layout: attack
        name: Proximity Mine VI
        group: Grenades
        resource:
          id: proximity-mine-vi
          displayType: gear-consumable
        damage:
          - dieCount: 6
            dieType: 8
            type: thunder
        range:
          short: 5
          aoe:
            size: 5
            type: sphere
  - id: proximity-mine-vii
    rarity: very_rare
    cost: 6300
    name: Proximity Mine VII
    html: >-
      Place a proximity mine within <me-distance length="5" />. On your turn, you may use a bonus action to arm or
      disarm the mine, as long as you are within <me-distance length="500" /> of it. While armed, if a creature moves within
      <me-distance length="5" /> of the mine, it detonates and each creature within a <me-distance length="5" adj/>-radius
      sphere centred on the mine suffers 7d8 thunder damage. A creature can spot the mine with a DC 17 Wisdom (Perception) check.
      Additionally, the mine has an AC 10 and detonates when hit by a weapon attack roll.
    mechanics:
      - type: action
        layout: attack
        name: Proximity Mine VII
        group: Grenades
        resource:
          id: proximity-mine-vii
          displayType: gear-consumable
        damage:
          - dieCount: 7
            dieType: 8
            type: thunder
        range:
          short: 5
          aoe:
            size: 5
            type: sphere
  - id: proximity-mine-viii
    rarity: very_rare
    cost: 7200
    name: Proximity Mine VIII
    html: >-
      Place a proximity mine within <me-distance length="5" />. On your turn, you may use a bonus action to arm or
      disarm the mine, as long as you are within <me-distance length="500" /> of it. While armed, if a creature moves within
      <me-distance length="5" /> of the mine, it detonates and each creature within a <me-distance length="5" adj/>-radius
      sphere centred on the mine suffers 8d8 thunder damage. A creature can spot the mine with a DC 18 Wisdom (Perception) check.
      Additionally, the mine has an AC 10 and detonates when hit by a weapon attack roll.
    mechanics:
      - type: action
        layout: attack
        name: Proximity Mine VIII
        group: Grenades
        resource:
          id: proximity-mine-viii
          displayType: gear-consumable
        damage:
          - dieCount: 8
            dieType: 8
            type: thunder
        range:
          short: 5
          aoe:
            size: 5
            type: sphere
  - id: proximity-mine-ix
    rarity: very_rare
    cost: 8100
    name: Proximity Mine IX
    html: >-
      Place a proximity mine within <me-distance length="5" />. On your turn, you may use a bonus action to arm or
      disarm the mine, as long as you are within <me-distance length="500" /> of it. While armed, if a creature moves within
      <me-distance length="5" /> of the mine, it detonates and each creature within a <me-distance length="5" adj/>-radius
      sphere centred on the mine suffers 9d8 thunder damage. A creature can spot the mine with a DC 18 Wisdom (Perception) check.
      Additionally, the mine has an AC 10 and detonates when hit by a weapon attack roll.
    mechanics:
      - type: action
        layout: attack
        name: Proximity Mine IX
        group: Grenades
        resource:
          id: proximity-mine-ix
          displayType: gear-consumable
        damage:
          - dieCount: 9
            dieType: 8
            type: thunder
        range:
          short: 5
          aoe:
            size: 5
            type: sphere
  - id: proximity-mine-x
    rarity: spectre
    cost: 9000
    name: Proximity Mine X
    html: >-
      Place a proximity mine within <me-distance length="5" />. On your turn, you may use a bonus action to arm or
      disarm the mine, as long as you are within <me-distance length="500" /> of it. While armed, if a creature moves within
      <me-distance length="5" /> of the mine, it detonates and each creature within a <me-distance length="5" adj/>-radius
      sphere centred on the mine suffers 10d8 thunder damage. A creature can spot the mine with a DC 19 Wisdom (Perception) check.
      Additionally, the mine has an AC 10 and detonates when hit by a weapon attack roll.
    mechanics:
      - type: action
        layout: attack
        name: Proximity Mine X
        group: Grenades
        resource:
          id: proximity-mine-x
          displayType: gear-consumable
        damage:
          - dieCount: 10
            dieType: 8
            type: thunder
        range:
          short: 5
          aoe:
            size: 5
            type: sphere
marks:
  - mark: I
    rarity: Common
    damage: 1d8
  - mark: II
    rarity: Common
    damage: 2d8
  - mark: III
    rarity: Uncommon
    damage: 3d8
  - mark: IV
    rarity: Uncommon
    damage: 4d8
  - mark: V
    rarity: Rare
    damage: 5d8
  - mark: VI
    rarity: Rare
    damage: 6d8
  - mark: VII
    rarity: Very Rare
    damage: 7d8
  - mark: VIII
    rarity: Very Rare
    damage: 8d8
  - mark: IX
    rarity: Very Rare
    damage: 9d8
  - mark: X
    rarity: Spectre
    damage: 10d8
rarity: varies
type: grenade
cost: Varies
weight: 1
subType: ''
name: Proximity Mine
consumable: true
---
Place a proximity mine within <me-distance length="5" />. On your turn, you may use a bonus action to arm or
disarm the mine, as long as you are within <me-distance length="500" /> of it. While armed, any creature that moves within
<me-distance length="5" /> of the mine detonates it. If you arm the mine while a creature is within <me-distance length="5" />
of it, it detonates immediately.

A creature can spot the mine with a successful Wisdom (Perception) check. Additionally, the mine has an AC 10 and
detonates when hit by a weapon attack roll.

When the mine detonates, each creature within a <me-distance length="5" adj/>-radius sphere centred on the mine suffers
thunder damage (see below).

The mark of this mine determines the DC of its Wisdom (Perception) check, damage, and credits.

Mark|Rarity|Wisdom (Perception) DC|Damage|Credits
---|---|---|---|---
I|Common|11|1d8|900 credits
II|Common|13|2d8|1,800 credits
III|Uncommon|13|3d8|2,700 credits
IV|Uncommon|15|4d8|3,600 credits
V|Rare|15|5d8|4,500 credits
VI|Rare|17|6d8|5,400 credits
VII|Very Rare|17|7d8|6,300 credits
VIII|Very Rare|18|8d8|7,200 credits
IX|Very Rare|18|9d8|8,100 credits
X|Spectre|19|10d8|9,000 credits
