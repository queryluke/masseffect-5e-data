---
name: Self Destruct
species: [hardware-loki]
mechanics:
  - type: reaction
    layout: statsRight
    range:
      short: 0
      aoe:
        type: sphere
        size: 10
    dc:
      proficient: true
      base: 15
      save: dex
    damage:
      - dieCount: 8
        dieType: 6
        type: fire
        bonus:
          type: hp
    shortDesc: >-
      When you have half you hit points or less remaining, initiate a self-destruct sequence. Each creature
      within <me-distance length="10" abbr /> of you must make DC {{ dc }} DEX saving throw. On a failed save
      a creature suffers 8d6 + {{ hp }} fire damage, or half as much on a successful save. Then, you drop to 0 hit
      points and suffer one death saving throw failure.
---
If you have less than half your hit points remaining, you can use your reaction to initiate a self-destruct sequence.
If you do so, each creature within <me-distance length="10" /> of you must make a Dexterity saving throw. The DC of this saving throw is
equal to 15 plus your proficiency bonus. On a failed save, a creature suffers fire damage equal to 8d6 + your
remaining hit points, or half as much on a successful save. Then, you drop to 0 hit points and suffer one death
saving throw failure.

After you use your this trait, you cannot do so again until you’ve successfully reinstalled your explosive devices.
The process takes 4 hours and 5,000 credits worth of explosives.

##### Variant: Aftermath
After you use your this trait, roll a d8 and consult the Self Destruct Aftermath table. The result of the d8
indicates the parts of your hardware that are irreparable and must be replaced. When you are stabilized or healed you
suffer the effect listed in the table which persists until you can purchase or find replacement parts and install them.
Typically installation requires 4 hours of work and a successful DC 15 Intelligence (Engineering) or (Electronics) check.

You cannot use Self Destruct again until all of your parts are replaced.

__Self Destruct Aftermath__

d8|Effect|Replacement Cost
---|---|---
1|Damage to voice and expression modulators. You have disadvantage on Charisma checks and saving throws.|1,000 credits
2|Damage to auxiliary CPUs. You have disadvantage on Intelligence checks and saving throws.|1,000 credits
3|Damage to power modulators. You have disadvantage on all ability checks.|2,000 credits
4|Loss of 1 arm. You cannot perform tasks or take actions that would require two hands.|2,000 credits
5|Loss of 1 leg. Your speed becomes 6 meters, you cannot take the Dash action, and you have disadvantage on Dexterity saving throws.|2,000 credits
6|Loss of one leg and one arm. Combined effects of 4 and 5 on this table.|4,000 credits
7|Loss of lower body. Your speed becomes 2 meters, you cannot take the Dash action, and you automatically fail Dexterity saving throws.|5,000 credits
8|Loss of both arms. You cannot wield weapons or cast powers.|4,000 credits


