---
level: 6
klass: adept
subclass: blackstar
mechanics:
  - type: reaction
    resource:
      reset: short
      max:
        type: level
        value: adept
        min: 1
        multiplier: 0.5
    shortDesc: >-
      when another creature you can see makes an attack roll, an ability check, or a saving throw, roll 1d4 and
      apply the number rolled as a bonus or penalty (your choice) to the creature's roll.
    damage:
      - dieCount: 1
        dieType: 4
        label: 'Bend Luck'
name: Bend Luck
---
You've mastered the art of using small mass effect fields to slightly alter the outcome of other creature's actions.
It might be a small burst under the muzzle of a gun to throw off the attacker's aim or a negative field around a
friendly creature as it leaps away from a grenade.

At 6th level, when another creature you can see makes an attack roll, an ability check, or a saving throw, you can use
your reaction to roll 1d4 and apply the number rolled as a bonus or penalty (your choice) to the creature's roll. You
can do so after the creature rolls but before any effects of the roll occur.

You can use Bend Luck a number of times equal to half of your Adept level (minimum 1). You regain all expended uses
after a long rest.
