---
name: Stimulant Pack
version: 1
level: 0
type: combat
classes:
  - infiltrator
  - soldier
  - vanguard
tags:
  - buff
mechanics:
  - castingTime:
      length: 1
      unit: bonus_action
    attack: false
    dc: false
    damage: false
    conditions: false
    duration:
      length: 1
      unit: minute
    concentration: false
    range:
      short: 0
    detonates: false
    primes: false
    resource:
      reset: long
      max:
        type: flat
        value: 1
    toggle:
      id: stimulant-pack
      mechanics:
        whenOn:
          - type: global-attack-note
            value:
              - Add 1d4 to attack rolls
          - type: saving-throw
            effect:
              type: die-bonus
              note: add a d4 to the roll
advancements:
  - id: friendly
    name: Friendly
    text: You can inject a willing creature within melee range with the stimulant pack.
    mechanics:
      - range:
          short: 5
  - id: high-tolerance
    name: High Tolerance
    text: You can use stimulant pack twice per long rest.
    mechanics:
      - resource:
          max:
            value: 2
---
Inject yourself with a stimulant pack. For the next minute, whenever you make an attack roll or saving throw,
you can roll a d4 and add the number rolled to the attack roll or saving throw.

You must finish a long rest before you can use this feature again.
