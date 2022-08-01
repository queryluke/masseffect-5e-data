---
level: 6
klass: vanguard
subclass: battle-master
mechanics:
  - type: bonus-action
    shortDesc: >-
      For the next minute, your walking speed increases by <me-distance length="30" />, +4 to all melee weapon damage rolls,
      and you have advantage on Strength and Dexterity saving throws.
    toggle:
      id: biotic-focus
      whenOn:
        - type: speed-bonus
          value: [walk]
          bonus:
            type: flat
            value: 30
        - type: attack-augment
          attackLimit:
            type: melee
            model: weapon
          augmentTypes: [damage]
          bonus:
            type: flat
            value: 4
        - type: saving-throw
          value: [str, dex]
          effect:
            type: advantage
    resource: {}
name: Biotic Focus
---
At 6th level, you can use a bonus action to focus your biotic energies into your muscles granting additional
speed and strength. You gain the following benefits for 1 minute:

* Your walking speed increases by <me-distance length="30" />.
* +4 to all melee weapon damage rolls.
* You have advantage on Strength and Dexterity saving throws.

<br>

Once you use this feature, you can't use it again until you finish a long rest.
