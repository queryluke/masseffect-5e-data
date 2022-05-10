---
name: Backlash
version: 1
level: 2
type: biotic
tags:
  - protection
classes:
  - adept
  - sentinel
  - vanguard
mechanics:
  - castingTime:
      length: 1
      unit: reaction
      reaction: which you take when you are hit by an attack
    resource:
      displayType: counter
      reset: cast
      resetTo: max
      max:
        type: flat
        value: 15
      id: backlash
      label: false
    attack: false
    dc: false
    damage: false
    duration:
      length: 1
      unit: minute
    concentration: true
    range:
      short: 0
    detonates: false
    primes: false
  - resource:
      max:
        value: 25
  - resource:
      max:
        value: 35
  - resource:
      max:
        value: 45
advancements:
  - id: durable
    name: Durable
    text: Increase the aegis's hit points to 30.
    mechanics:
      - resource:
          max:
            value: 30
      - resource:
          max:
            value: 40
      - resource:
          max:
            value: 50
      - resource:
          max:
            value: 60
  - id: counterstrike
    name: Counterstrike
    text: >-
      If you cast Backlash as a reaction against a melee attack, gain an attack of opportunity against the attacking creature.
    mechanics: []
---
Generate a frontal biotic aegis barrier with 15 hit points. If a creature you can see hits you with an attack while the
aegis is active, including the triggering attack, split the damage equally between yourself and the aegis. If the attack
is a ranged weapon attack from a non-heavy weapon, the portion of the damage that would be dealt to you is dealt to the
attacking creature instead.

If the damage is an odd number, you may choose where the extra 1 damage is dealt.

If damage that would be dealt to the aegis is greater than its remaining hit points, deal any remaining damage to yourself.

When the aegis drops to 0 hit points the power ends.

__At Higher Levels__: When you cast this power using a power slot of 3rd level or higher, the aegis's hit points increase
by 10 for each slot level above the 2nd.
