---
level: 18
klass: vanguard
subclass: cardinal
mechanics:
  - type: bonus-action
    shortDesc: >-
      At 18th level, as a Bonus Action you may spend 3 Focus Points to create a biotic copy of yourself with a range of
      <me-distance length="5" />. This ghost is a copy of you, with your character's ability scores and weapons
      (Not Gear, e.g. Grenades or Heavy Weapons), and acts directly after your turn under your control.
      <br>
      The Biotic Ghost is unable to cast powers (But it can however cast Cantrips). Additionally the Biotic Ghost
      cannot be targeted or damaged. At the start of your next turn, the ghost will dissipate from the battlefield and
      is no longer in the encounter. Before this happens, if the ghost is within <me-distance length="20" /> of you at the
      start of your next turn, you may choose to switch positions with your biotic ghost's current location.
    resource:
      reset: off
      label: 'Costs 3 Focus Points'
      max:
        type: progressive
        limit: vanguard
        value:
          3: 2
          6: 3
          10: 4
          14: 5
          18: 6
      id: cardinal-focus-points
  - type: powers
    value: overload
    provider:
      model: subclass
      id: cardinal
    castAt: 3
    mod: wis
    merge:
      damage:
        - type: force
      primes: force
      resource:
        reset: off
        label: 'Focus Points'
        id: cardinal-focus-points
        max:
          type: progressive
          limit: vanguard
          value:
            3: 2
            6: 3
            10: 4
            14: 5
            18: 6
      notes:
        - Costs 3 focus points
name: Biotic Ghost
---
Through mastery of the Exalted Prophets' meditation methods, you are able to push enough energy out to have a
temporary version of yourself to unleash in order to overwhelm your prey.

At 18th level, as a Bonus Action you may spend 3 Focus Points to create a biotic copy of yourself with a range of
<me-distance length="5" />. This ghost is a copy of you, with your character's ability scores and weapons
(Not Gear, e.g. Grenades or Heavy Weapons), and acts directly after your turn under your control.

The Biotic Ghost is unable to cast powers (But it can however cast Cantrips). Additionally the Biotic Ghost
cannot be targeted or damaged. At the start of your next turn, the ghost will dissipate from the battlefield and
is no longer in the encounter. Before this happens, if the ghost is within <me-distance length="20" /> of you at the
start of your next turn, you may choose to switch positions with your biotic ghost's current location.

In addition, your Volt can now be upcasted to the 3rd level Volt version of Overload by spending 3 Focus Points
