---
name: Recon Mine
stats:
  range: 25
  blast: 5
  damageType: thunder
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
type: Grenade
cost: Varies
weight: 1
rarity: Varies
---
Launch a recon mine to a location of your choice within <me-distance length="25" />. It first sticks to the target
location then scans creatures within a <me-distance length="25" adj/> cone, relaying tactical weak points about the creature's
armor and location. After your turn ends, any hostile creature that walks through the scanning cone suffers a penalty to
its AC and cannot benefit from being <me-condition id="invisible"/>. Each creature can only be affected by this penalty once.

A creature can spot the mine with a successful DC 10 Wisdom (Perception).

To disarm the mine, a creature must pass an Intelligence (Electronics) check. If the check fails, the mine detonates, and
the creature that made the check automatically fails its saving throw. Additionally, a successful ranged attack on the
mine (AC 10) will detonate it. You may also use a bonus action on your turn to detonate the mine.

When the mine detonates, each creature within a <me-distance length="5" adj/>-radius sphere centred on the mine must
make a DC 13 Dexterity saving throw. A creature suffers thunder damage (see below) on a failed save
or half as much damage on a successful one.

The mark of this mine determines the DC of its AC penalty, Intelligence (Electronics) check, damage, and credits.

Mark|Rarity|AC Penalty|Intelligence (Electronics) DC|Damage|Credits
---|---|---|---|---|---
I|Common|-1|11|2d4|6,000 credits
II|Common|-1|13|2d4|6,500 credits
III|Uncommon|-1|13|4d4|4,000 credits
IV|Uncommon|-1|15|4d4|4,500 credits
V|Rare|-2|15|6d4|7,000 credits
VI|Rare|-2|17|6d4|7,500 credits
VII|Very Rare|-3|17|6d4|9,000 credits
VIII|Very Rare|-3|18|7d4|10,000 credits
IX|Very Rare|-3|18|8d4|11,000 credits
X|Spectre|-4|19|8d4|13,000 credits


