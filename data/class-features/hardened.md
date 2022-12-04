---
name: Hardened
level: 10
klass: soldier
subclass: nanobreaker
mechanics:
  - type: natural-armor
    base: 14
    mod: con
  - type: augment
    value:
      model: soldier
      id: nanite-combat
      limit: [attack]
    merge:
      damage:
        - dieCount: 2
      moreInfo:
        additional:
          - model: class-features
            value: hardened
  - type: resistance
    value: bludgeoning
    note: while not wearing armor
  - type: resistance
    value: piercing
    note: while not wearing armor
  - type: resistance
    value: slashing
    note: while not wearing armor
---
At 10th level, your nanomachine advancements make you even more resilient to trauma, allowing you to hit harder and last longer.

When not wearing armor or wielding a shield, you gain resistance to bludgeoning, slashing and piercing damage.

- Your unarmed strikes now deal 2d8 bludgeoning damage instead of 1d8.
- Your Nanite Armor's AC is now 14+Con Modifier
