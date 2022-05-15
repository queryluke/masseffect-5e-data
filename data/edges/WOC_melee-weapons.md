---
name: Melee Weapons
mechanics:
  - type: other
    name: 'Weapon of Choice: Melee Weapons'
    damage:
      - dieCount: 1
        dieType:
          type: progressive
          limit: soldier
          value:
            3: 8
            10: 10
            18: 12
        label: 'Superiority Die'
    shortDesc: >-
      When you attack with a melee weapon, add {{ damage }} to the attack or damage roll. If you choose the damage roll, the
      creature has disadvantage on CON saves to maintain powers.
    resource:
      reset: short
      label: 'd8s / short rest'
      max:
        type: progressive
        limit: soldier
        value:
          3: 4
          10: 5
          18: 6
  - type: reaction
    name: 'Melee Weapon (parry)'
    damage:
      - dieCount: 1
        dieType:
          type: progressive
          limit: soldier
          value:
            3: 8
            10: 10
            18: 12
        label: 'Superiority Die'
    shortDesc: >-
      When you are hit by a melee attack and holding a melee weapon, add {{ damage }} to your AC. If the attack still hits, take half damage.
    resource:
      reset: short
      label: 'd8s / short rest'
      max:
        type: progressive
        limit: soldier
        value:
          3: 4
          10: 5
          18: 6
type: weapon-of-choice
---
You can expend superiority dice to gain a number of different benefits:

* When you make a weapon attack against a creature with a melee weapon, you can expend one superiority die to add
it to the attack roll. You can use this ability before or after making the attack roll, but before any of the effects of
the attack are applied.
* When you damage a creature with a melee weapon, you can expend one superiority die to add
it to the damage roll. You can use this ability after rolling damage. If the attack causes the target to make a Constitution
saving throw to maintain concentration, it has disadvantage on that save.
* When you are hit by a melee attack, if you are currently holding a melee weapon, you can expend one superiority
die as a reaction, adding the number rolled to your AC. If the attack still hits, you take half damage from it.
