---
level: 6
klass: vanguard
subclass: cardinal
mechanics:
  - type: powers
    value: overload
    provider:
      model: subclass
      id: cardinal
    castAt: 1
    mod: wis
    merge:
      damage:
        - type: force
      primes: force
      notes:
        - Costs 1 Focus Point
      resource:
        id: cardinal-focus-points
        reset: off
        label: 'Focus Points'
        max:
          type: progressive
          limit: vanguard
          value:
            3: 2
            6: 3
            10: 4
            14: 5
            18: 6
  - type: augment
    value:
      model: vanguard
      id: rend
      limit: [natural-weapon]
    merge:
      value:
        html: >-
          <p>On a killing blow with this weapon, you gain 1 Focus Point. You also gain 1 Focus Point when you
          roll a 9 or 10 on the damage die with a single-handed attack or a 6 on either damage die with a two-handed attack.
          You cannot raise your Focus Points past your current maximum with this weapon.</p>
          <p>Attacks with this weapon will add your current Focus Points to this melee weapon's
          attack and damage rolls.</p>
name: Volt
---
Your gifts of focussing your energy have now allowed you to push it out as a bolt of biotic lightning.

At 6th level, as an Action, you may spend a Focus Point to cast a 1st level Overload at a target within <me-distance length="30" />.
The damage type of this overload is force damage and the Primed condition becomes force instead of lightning.

Additionally, your Cardinal Blades can now potentially charge Focus Points on a successful weapon attack. If you roll
a 9-10 on the d10 damage die (Or a 6 on either d6 when using Versatile), you also gain one Focus Point.
