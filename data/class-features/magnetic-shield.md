---
level: 6
klass: experiment
subclass: cybernetic
name: Magnetic Shield
mechanics:
  - type: global-note
    subType: defenses
    value: Magnetic Shield
    moreInfo:
      model: class-features
      id: magnetic-shield
  - type: reaction
    name: Magnetic Shield
    damage:
      - dieCount: 1
        dieType:
          type: progressive
          value:
            1: 4
            5: 6
            9: 8
            13: 10
            17: 12
          bonus:
            type: level
            value: experiment
        label: 'Exploit Die'
    shortDesc: >-
      When you are hit by a
      projectile weapon reduce the damage taken from the weapon by one roll of your
      Exploit die + your Experiment level. If you reduce the damage of the attack to 0, you slingshot the
      projectile back at the attacker. Roll the attack with the same bonuses that your attacker used on the
      attack roll against you.
---
At 6th level, your shields are no longer vulnerable to Lightning damage. When you are hit by a
projectile weapon, you can use your reaction to reduce the damage taken from the weapon by one roll of your
Exploit die + your Experiment level. If you reduce the damage of the attack to 0, you slingshot the
projectile back at the attacker. Roll the attack with the same bonuses that your attacker used on the
attack roll against you.
