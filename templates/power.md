---
name: string
version: 1
level: int
type: enum [tech, biotic, combat]
tags:
  - string
classes:
  - enum [classes]
mechanics:
  - castingTime:
      length: int // default 1
      unit: enum [attack, action, reaction, bonus_action]
      reaction: string // only if reaction
    altCasting:
      - @castingTime
    attack:
      type: enum [ranged, melee]
      proficient: true
    dc:
      save: string
      bonus: @bonus
    damage:
      - dieCount: integer
        dieType: integer
        mod: enum [str, dex, con, int, wis, cha] # optional
        type: enum [damage types] or hp, sp, tempHp
        bonus: @bonus
    conditions: array, enum[conditions] // what it does instead of damage
    duration:
      length: int // default 0
      unit: string // default instant
    concentration: boolean
    range: @range
    detonates: boolean
    primes: enum [prime types]
    resource: @resource
    notes:
      - string
  - @mechanic // only include mechanics that are different at a higher level
advancements:
  - id: string
    name: string
    text: string
    mechanics:
      - @mechanics
---
