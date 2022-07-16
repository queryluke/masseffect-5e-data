---
subsets:
  - id: lift-grenade-i
    rarity: common
    cost: 500
    name: Lift Grenade I
    html: >-
      Target an area within <me-distance length="30" />. Each creature within <me-distance length="10" /> of the target must make a DC 11 Strength saving throw.
      On a failed save, a creature is <me-condition id="lifted" /> until the end of your next turn.
    mechanics:
      - type: action
        layout: attack
        name: Lift Grenade I
        group: Grenades
        resource:
          id: lift-grenade-i
          displayType: gear-consumable
        dc:
          save: str
          base: 11
          proficient: false
        range:
          short: 30
          aoe:
            size: 10
            type: sphere
  - id: lift-grenade-ii
    rarity: common
    cost: 1500
    name: Lift Grenade II
    html: >-
      Target an area within <me-distance length="30" />. Each creature within <me-distance length="10" /> of the target must make a DC 12 Strength saving throw.
      On a failed save, a creature is <me-condition id="lifted" /> until the end of your next turn.
    mechanics:
      - type: action
        layout: attack
        name: Lift Grenade II
        group: Grenades
        resource:
          id: lift-grenade-ii
          displayType: gear-consumable
        dc:
          save: str
          base: 12
          proficient: false
        range:
          short: 30
          aoe:
            size: 10
            type: sphere
  - id: lift-grenade-iii
    rarity: uncommon
    cost: 2500
    name: Lift Grenade III
    html: >-
      Target an area within <me-distance length="30" />. Each creature within <me-distance length="10" /> of the target must make a DC 13 Strength saving throw.
      On a failed save, a creature is <me-condition id="lifted" /> until the end of your next turn.
    mechanics:
      - type: action
        layout: attack
        name: Lift Grenade III
        group: Grenades
        resource:
          id: lift-grenade-iii
          displayType: gear-consumable
        dc:
          save: str
          base: 13
          proficient: false
        range:
          short: 30
          aoe:
            size: 10
            type: sphere
  - id: lift-grenade-iv
    rarity: uncommon
    cost: 3500
    name: Lift Grenade IV
    html: >-
      Target an area within <me-distance length="30" />. Each creature within <me-distance length="10" /> of the target must make a DC 14 Strength saving throw.
      On a failed save, a creature is <me-condition id="lifted" /> until the end of your next turn.
    mechanics:
      - type: action
        layout: attack
        name: Lift Grenade IV
        group: Grenades
        resource:
          id: lift-grenade-iv
          displayType: gear-consumable
        dc:
          save: str
          base: 14
          proficient: false
        range:
          short: 30
          aoe:
            size: 10
            type: sphere
  - id: lift-grenade-v
    rarity: rare
    cost: 4500
    name: Lift Grenade V
    html: >-
      Target an area within <me-distance length="30" />. Each creature within <me-distance length="10" /> of the target must make a DC 15 Strength saving throw.
      On a failed save, a creature is <me-condition id="lifted" /> until the end of your next turn.
    mechanics:
      - type: action
        layout: attack
        name: Lift Grenade V
        group: Grenades
        resource:
          id: lift-grenade-v
          displayType: gear-consumable
        dc:
          save: str
          base: 15
          proficient: false
        range:
          short: 30
          aoe:
            size: 10
            type: sphere
  - id: lift-grenade-vi
    rarity: rare
    cost: 5500
    name: Lift Grenade VI
    html: >-
      Target an area within <me-distance length="30" />. Each creature within <me-distance length="10" /> of the target must make a DC 16 Strength saving throw.
      On a failed save, a creature is <me-condition id="lifted" /> until the end of your next turn.
    mechanics:
      - type: action
        layout: attack
        name: Lift Grenade VI
        group: Grenades
        resource:
          id: lift-grenade-vi
          displayType: gear-consumable
        dc:
          save: str
          base: 16
          proficient: false
        range:
          short: 30
          aoe:
            size: 10
            type: sphere
  - id: lift-grenade-vii
    rarity: very_rare
    cost: 6500
    name: Lift Grenade VII
    html: >-
      Target an area within <me-distance length="30" />. Each creature within <me-distance length="10" /> of the target must make a DC 17 Strength saving throw.
      On a failed save, a creature is <me-condition id="lifted" /> until the end of your next turn.
    mechanics:
      - type: action
        layout: attack
        name: Lift Grenade VII
        group: Grenades
        resource:
          id: lift-grenade-vii
          displayType: gear-consumable
        dc:
          save: str
          base: 17
          proficient: false
        range:
          short: 30
          aoe:
            size: 10
            type: sphere
  - id: lift-grenade-viii
    rarity: very_rare
    cost: 7500
    name: Lift Grenade VIII
    html: >-
      Target an area within <me-distance length="30" />. Each creature within <me-distance length="10" /> of the target must make a DC 18 Strength saving throw.
      On a failed save, a creature is <me-condition id="lifted" /> until the end of your next turn.
    mechanics:
      - type: action
        layout: attack
        name: Lift Grenade VIII
        group: Grenades
        resource:
          id: lift-grenade-viii
          displayType: gear-consumable
        dc:
          save: str
          base: 18
          proficient: false
        range:
          short: 30
          aoe:
            size: 10
            type: sphere
  - id: lift-grenade-ix
    rarity: very_rare
    cost: 8500
    name: Lift Grenade IX
    html: >-
      Target an area within <me-distance length="30" />. Each creature within <me-distance length="10" /> of the target must make a DC 19 Strength saving throw.
      On a failed save, a creature is <me-condition id="lifted" /> until the end of your next turn.
    mechanics:
      - type: action
        layout: attack
        name: Lift Grenade IX
        group: Grenades
        resource:
          id: lift-grenade-ix
          displayType: gear-consumable
        dc:
          save: str
          base: 19
          proficient: false
        range:
          short: 30
          aoe:
            size: 10
            type: sphere
  - id: lift-grenade-x
    rarity: spectre
    cost: 9500
    name: Lift Grenade X
    html: >-
      Target an area within <me-distance length="30" />. Each creature within <me-distance length="10" /> of the target must make a DC 20 Strength saving throw.
      On a failed save, a creature is <me-condition id="lifted" /> until the end of your next turn.
    mechanics:
      - type: action
        layout: attack
        name: Lift Grenade X
        group: Grenades
        resource:
          id: lift-grenade-x
          displayType: gear-consumable
        dc:
          save: str
          base: 20
          proficient: false
        range:
          short: 30
          aoe:
            size: 10
            type: sphere
marks:
  - mark: I
    rarity: Common
  - mark: II
    rarity: Common
  - mark: III
    rarity: Uncommon
  - mark: IV
    rarity: Uncommon
  - mark: V
    rarity: Rare
  - mark: VI
    rarity: Rare
  - mark: VII
    rarity: Very Rare
  - mark: VIII
    rarity: Very Rare
  - mark: IX
    rarity: Very Rare
  - mark: X
    rarity: Spectre
rarity: varies
type: grenade
cost: Varies
weight: 1
subType: ''
name: Lift Grenade
consumable: true
equippable: true
---
Target an area within <me-distance length="30" />. Each creature within <me-distance length="10" /> of the target must make a Strength saving throw.
On a failed save, a creature is <me-condition id="lifted" /> until the end of your next turn.

The mark of this grenade determines its Save DC and credits.

Mark|Rarity|Save DC|Credits
---|---|---|---
I|Common|11|500 credits
II|Common|12|1,500 credits
III|Uncommon|13|2,500 credits
IV|Uncommon|14|3,500 credits
V|Rare|15|4,500 credits
VI|Rare|16|5,500 credits
VII|Very Rare|17|6,500 credits
VIII|Very Rare|18|7,500 credits
IX|Very Rare|19|8,500 credits
X|Spectre|20|9,500 credits
