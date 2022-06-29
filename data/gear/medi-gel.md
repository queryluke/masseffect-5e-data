---
name: Medi-gel
rarity: varies
type: medi_gel
cost: Varies
weight: 0
subType: ''
subsets:
  - id: medi-gel-standard
    rarity: common
    cost: 200
    name: Standard Medi-gel
    html: You may administer this medi-gel to yourself or a willing creature within <me-distance length="5" /> to regain 2d4 + 2 hit points. Administering the medi-gel takes an action.
    mechanics:
      - type: action
        name: Standard Medi-gel
        group: Medi-gel
        resource:
          id: medi-gel-standard
          displayType: gear-consumable
        shortDesc: Regain {{ damage }} hit points.
        damage:
          - dieCount: 2
            dieType: 4
            type: hp
            bonus:
              type: flat
              value: 2
        range:
          short: 5
  - id: medi-gel-enhanced
    rarity: uncommon
    cost: 500
    name: Enhanced Medi-gel
    html: You may administer this medi-gel to yourself or a willing creature within <me-distance length="5" /> to regain 4d4 + 4 hit points. Administering the medi-gel takes an action.
    mechanics:
      - type: action
        group: Medi-gel
        name: Enhanced Medi-gel
        resource:
          id: medi-gel-enhanced
          displayType: gear-consumable
        shortDesc: Regain {{ damage }} hit points.
        damage:
          - dieCount: 4
            dieType: 4
            type: hp
            bonus:
              type: flat
              value: 4
        range:
          short: 5
  - id: medi-gel-superior
    rarity: rare
    cost: 1500
    name: Superior Medi-gel
    html: You may administer this medi-gel to yourself or a willing creature within <me-distance length="5" /> to regain 8d4 + 8 hit points. Administering the medi-gel takes an action.
    mechanics:
      - type: action
        group: Medi-gel
        name: Superior Medi-gel
        resource:
          id: medi-gel-superior
          displayType: gear-consumable
        shortDesc: Regain {{ damage }} hit points.
        damage:
          - dieCount: 8
            dieType: 4
            type: hp
            bonus:
              type: flat
              value: 8
        range:
          short: 5
  - id: medi-gel-ultimate
    rarity: spectre
    cost: military
    name: Ultimate Medi-gel
    html: You may administer this medi-gel to yourself or a willing creature within <me-distance length="5" /> to regain 10d4 + 20 hit points. Administering the medi-gel takes an action.
    mechanics:
      - type: action
        group: Medi-gel
        name: Ultimate Medi-gel
        resource:
          id: medi-gel-ultimate
          displayType: gear-consumable
        shortDesc: Regain {{ damage }} hit points.
        damage:
          - dieCount: 10
            dieType: 4
            type: hp
            bonus:
              type: flat
              value: 20
        range:
          short: 5
---
>Medi-gel (medical gel) is an all-purpose medicinal salve combining an anaesthetic and clotting agent used by paramedics,
EMTs, and military personnel, produced by the Sirta Foundation. It heals various wounds and ailments, instantly sealing
injuries against infection and allowing for rapid healing by having the gel grip tight to flesh until subjected to a frequency
of ultrasound. It is sealable against liquids - most notably blood - as well as contaminants and gases.

__Use__. When you use this item, you or a willing, organic creature within <me-distance length="5" /> regains hit points equal to the medi-gel's potency.

Type|Rarity|Credits|HP Regained
---|---|---|---
Standard|Common|200 credits|2d4 + 2
Enhanced|Uncommon|500 credits|4d4 + 4
Superior|Rare|1,500 credits|8d4+8
Ultimate|Very Rare|Military|10d4 + 20
