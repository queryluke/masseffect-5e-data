---
level: 3
klass: infiltrator
subclass: sniper
mechanics:
  - type: bonus-action
    layout: simple
    shortDesc: For the next minute, you ignore 3/4-cover and deal {{ damage }} additional damage with sniper rifles.
    damage:
      - dieCount: 0
        bonus:
          type: multi
          value:
            - type: flat
              value: 2
            - type: level
              value: infiltrator
    resource:
      reset: short
      max:
        type: flat
        value: 3
name: Steady Aim
---
At the 3rd level, your aim with a sniper rifle becomes deadly. As a bonus action on your turn, you can overclock
your targeting system to take careful aim at a creature you can see that is within range of a sniper rifle you're wielding.
Your ranged attacks with the sniper rifle gain two benefits against the target:

* The attacks ignore half and three-quarters cover.
* On a hit, the weapon deals additional damage to the target equal to 2 + half your infiltrator level.

<br>

This effect lasts 1 minute or until you use Steady Aim on a different target.

You can use this feature three times. You regain all expended uses of it when you finish a short or long rest.
