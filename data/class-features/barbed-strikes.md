---
level: 10
klass: soldier
subclass: reaver-enforcer
mechanics:
  - type: augment
    value:
      model: soldier
      id: war-machine
      limit: powers
    merge:
      merge:
        resource:
          max:
            type: proficiency
  - type: bonus-action
    value: Barbed Strikes
    shortDesc: >-
       When you hit two attacks against the same target during a round, you deal damage equal to
       Blade Armor's dice roll to the target, without adding modifiers (such as your Strength or Brawler damage).
name: Barbed Strikes
---
At 10th level, you can use Blade Armor a number of times equal to your proficiency modifier between short rests.

Additionally, when you hit two attacks against the same target during a round, you can chose to
violently rip the target using a bonus action. When you do so, you deal damage equal to
Blade Armor's dice roll to the target, without adding modifiers (such as your Strength or Brawler damage).
