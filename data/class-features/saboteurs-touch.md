---
level: 3
klass: infiltrator
subclass: saboteur
name: Saboteur's Touch
mechanics:
  - type: powers
    value: sabotage
    klass: infiltrator
    merge:
      altCasting:
        - length: 1
          unit: bonus_action
        - length: 1
          unit: reaction
          reaction: when you see a creature making a ranged weapon attack
  - type: advancements-choice
    options: true
    limit:
      value: sabotage
---
At 3rd level, you always have the sabotage power prepared (it does not count against your list of prepared powers). Preparing the advanced
version of the power counts as one power, not two.

You can cast sabotage as a bonus action or as a reaction to a ranged weapon attack you can see.
