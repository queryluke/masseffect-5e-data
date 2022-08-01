---
subsets:
  - id: sticky-grenade-i
    rarity: common
    cost: 1400
    name: Sticky Grenade I
    html: >-
      Target an area within <me-distance length="30" />. At the start of your next turn, creatures within
      <me-distance length="10" /> of the target must make a DC 11 Dexterity saving throw. On a failed save, a creature suffers
      2d6 thunder damage or half as much damage on a successful one. Alternatively, you may make a melee weapon attack
      or a ranged weapon attack with the sticky grenade, adding your Dexterity modifier to the attack roll. On a hit,
      the grenade hits and sticks to the target, and when it explodes, the target automatically fails its saving throw.
      On a miss, the grenade lands within <me-distance length="5" /> of the target.
    mechanics:
      - type: action
        layout: attack
        name: Sticky Grenade I
        group: Grenades
        resource:
          id: sticky-grenade-i
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
            size: 10
            type: sphere
  - id: sticky-grenade-ii
    rarity: common
    cost: 2400
    name: Sticky Grenade II
    html: >-
      Target an area within <me-distance length="30" />. At the start of your next turn, creatures within
      <me-distance length="10" /> of the target must make a DC 13 Dexterity saving throw. On a failed save, a creature suffers
      2d6 thunder damage or half as much damage on a successful one. Alternatively, you may make a melee weapon attack
      or a ranged weapon attack with the sticky grenade, adding your Dexterity modifier to the attack roll. On a hit,
      the grenade hits and sticks to the target, and when it explodes, the target automatically fails its saving throw.
      On a miss, the grenade lands within <me-distance length="5" /> of the target.
    mechanics:
      - type: action
        layout: attack
        name: Sticky Grenade II
        group: Grenades
        resource:
          id: sticky-grenade-ii
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
            size: 10
            type: sphere
  - id: sticky-grenade-iii
    rarity: uncommon
    cost: 3100
    name: Sticky Grenade III
    html: >-
      Target an area within <me-distance length="30" />. At the start of your next turn, creatures within
      <me-distance length="10" /> of the target must make a DC 13 Dexterity saving throw. On a failed save, a creature suffers
      3d6 thunder damage or half as much damage on a successful one. Alternatively, you may make a melee weapon attack
      or a ranged weapon attack with the sticky grenade, adding your Dexterity modifier to the attack roll. On a hit,
      the grenade hits and sticks to the target, and when it explodes, the target automatically fails its saving throw.
      On a miss, the grenade lands within <me-distance length="5" /> of the target.
    mechanics:
      - type: action
        layout: attack
        name: Sticky Grenade III
        group: Grenades
        resource:
          id: sticky-grenade-iii
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
            size: 10
            type: sphere
  - id: sticky-grenade-iv
    rarity: uncommon
    cost: 4100
    name: Sticky Grenade IV
    html: >-
      Target an area within <me-distance length="30" />. At the start of your next turn, creatures within
      <me-distance length="10" /> of the target must make a DC 15 Dexterity saving throw. On a failed save, a creature suffers
      3d6 thunder damage or half as much damage on a successful one. Alternatively, you may make a melee weapon attack
      or a ranged weapon attack with the sticky grenade, adding your Dexterity modifier to the attack roll. On a hit,
      the grenade hits and sticks to the target, and when it explodes, the target automatically fails its saving throw.
      On a miss, the grenade lands within <me-distance length="5" /> of the target.
    mechanics:
      - type: action
        layout: attack
        name: Sticky Grenade IV
        group: Grenades
        resource:
          id: sticky-grenade-iv
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
            size: 10
            type: sphere
  - id: sticky-grenade-v
    rarity: rare
    cost: 5500
    name: Sticky Grenade V
    html: >-
      Target an area within <me-distance length="30" />. At the start of your next turn, creatures within
      <me-distance length="10" /> of the target must make a DC 15 Dexterity saving throw. On a failed save, a creature suffers
      5d6 thunder damage or half as much damage on a successful one. Alternatively, you may make a melee weapon attack
      or a ranged weapon attack with the sticky grenade, adding your Dexterity modifier to the attack roll. On a hit,
      the grenade hits and sticks to the target, and when it explodes, the target automatically fails its saving throw.
      On a miss, the grenade lands within <me-distance length="5" /> of the target.
    mechanics:
      - type: action
        layout: attack
        name: Sticky Grenade V
        group: Grenades
        resource:
          id: sticky-grenade-v
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
            size: 10
            type: sphere
  - id: sticky-grenade-vi
    rarity: rare
    cost: 6500
    name: Sticky Grenade VI
    html: >-
      Target an area within <me-distance length="30" />. At the start of your next turn, creatures within
      <me-distance length="10" /> of the target must make a DC 17 Dexterity saving throw. On a failed save, a creature suffers
      5d6 thunder damage or half as much damage on a successful one. Alternatively, you may make a melee weapon attack
      or a ranged weapon attack with the sticky grenade, adding your Dexterity modifier to the attack roll. On a hit,
      the grenade hits and sticks to the target, and when it explodes, the target automatically fails its saving throw.
      On a miss, the grenade lands within <me-distance length="5" /> of the target.
    mechanics:
      - type: action
        layout: attack
        name: Sticky Grenade VI
        group: Grenades
        resource:
          id: sticky-grenade-vi
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
            size: 10
            type: sphere
  - id: sticky-grenade-vii
    rarity: very_rare
    cost: 7200
    name: Sticky Grenade VII
    html: >-
      Target an area within <me-distance length="30" />. At the start of your next turn, creatures within
      <me-distance length="10" /> of the target must make a DC 17 Dexterity saving throw. On a failed save, a creature suffers
      6d6 thunder damage or half as much damage on a successful one. Alternatively, you may make a melee weapon attack
      or a ranged weapon attack with the sticky grenade, adding your Dexterity modifier to the attack roll. On a hit,
      the grenade hits and sticks to the target, and when it explodes, the target automatically fails its saving throw.
      On a miss, the grenade lands within <me-distance length="5" /> of the target.
    mechanics:
      - type: action
        layout: attack
        name: Sticky Grenade VII
        group: Grenades
        resource:
          id: sticky-grenade-vii
          displayType: gear-consumable
        damage:
          - dieCount: 6
            dieType: 6
            type: thunder
        dc:
          save: dex
          base: 17
          proficient: false
        range:
          short: 30
          aoe:
            size: 10
            type: sphere
  - id: sticky-grenade-viii
    rarity: very_rare
    cost: 7700
    name: Sticky Grenade VIII
    html: >-
      Target an area within <me-distance length="30" />. At the start of your next turn, creatures within
      <me-distance length="10" /> of the target must make a DC 18 Dexterity saving throw. On a failed save, a creature suffers
      6d6 thunder damage or half as much damage on a successful one. Alternatively, you may make a melee weapon attack
      or a ranged weapon attack with the sticky grenade, adding your Dexterity modifier to the attack roll. On a hit,
      the grenade hits and sticks to the target, and when it explodes, the target automatically fails its saving throw.
      On a miss, the grenade lands within <me-distance length="5" /> of the target.
    mechanics:
      - type: action
        layout: attack
        name: Sticky Grenade VIII
        group: Grenades
        resource:
          id: sticky-grenade-viii
          displayType: gear-consumable
        damage:
          - dieCount: 6
            dieType: 6
            type: thunder
        dc:
          save: dex
          base: 18
          proficient: false
        range:
          short: 30
          aoe:
            size: 10
            type: sphere
  - id: sticky-grenade-ix
    rarity: very_rare
    cost: 8400
    name: Sticky Grenade IX
    html: >-
      Target an area within <me-distance length="30" />. At the start of your next turn, creatures within
      <me-distance length="10" /> of the target must make a DC 18 Dexterity saving throw. On a failed save, a creature suffers
      7d6 thunder damage or half as much damage on a successful one. Alternatively, you may make a melee weapon attack
      or a ranged weapon attack with the sticky grenade, adding your Dexterity modifier to the attack roll. On a hit,
      the grenade hits and sticks to the target, and when it explodes, the target automatically fails its saving throw.
      On a miss, the grenade lands within <me-distance length="5" /> of the target.
    mechanics:
      - type: action
        layout: attack
        name: Sticky Grenade IX
        group: Grenades
        resource:
          id: sticky-grenade-ix
          displayType: gear-consumable
        damage:
          - dieCount: 7
            dieType: 6
            type: thunder
        dc:
          save: dex
          base: 18
          proficient: false
        range:
          short: 30
          aoe:
            size: 10
            type: sphere
  - id: sticky-grenade-x
    rarity: spectre
    cost: 9600
    name: Sticky Grenade X
    html: >-
      Target an area within <me-distance length="30" />. At the start of your next turn, creatures within
      <me-distance length="10" /> of the target must make a DC 19 Dexterity saving throw. On a failed save, a creature suffers
      8d6 thunder damage or half as much damage on a successful one. Alternatively, you may make a melee weapon attack
      or a ranged weapon attack with the sticky grenade, adding your Dexterity modifier to the attack roll. On a hit,
      the grenade hits and sticks to the target, and when it explodes, the target automatically fails its saving throw.
      On a miss, the grenade lands within <me-distance length="5" /> of the target.
    mechanics:
      - type: action
        layout: attack
        name: Sticky Grenade X
        group: Grenades
        resource:
          id: sticky-grenade-x
          displayType: gear-consumable
        damage:
          - dieCount: 8
            dieType: 6
            type: thunder
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
name: Sticky Grenade
consumable: true
equippable: true
---
Target an area within <me-distance length="30" />. At the beginning of your next turn, creatures within
<me-distance length="10" /> of the target must make a Dexterity saving throw. On a failed save, a creature suffers
thunder damage (see below) or half as much damage on a successful one.

With a sticky grenade, you may choose to make a melee weapon attack on a target creature within
<me-distance length="5" /> instead, or a ranged weapon attack on a target creature within <me-distance length="30" />.
Add your Dexterity modifier to the attack. Do not add your proficiency bonus to the attack unless you have the
Grenadier feat. On a hit, the grenade hits and sticks to the target, and when it explodes, the target automatically
fails its saving throw. On a miss, the grenade lands within <me-distance length="5" /> of the target.

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

