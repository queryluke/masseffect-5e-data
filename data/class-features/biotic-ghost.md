---
level: 18
klass: vanguard
subclass: cardinal
mechanics:
  - type: bonus-action
    shortDesc: >-
      Spend 3 focus points to create a biotic copy of yourself within <me-distance length="5" />.
      This ghost acts after your turn as its own version of you, under your control. It cannot cast powers of
      1st-level or higher and cannot be targeted or damaged. At the start of your next turn, if the ghost is
      within <me-distance length="20" /> of you, you may choose to switch positions with your ghost,
      after that, the ghost dissipates.
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
<me-distance length="5" />, this ghost acts after your turn as its own version of you, under your control. However,
it is unable to cast powers (But it can cast cantrips that you have learned) and cannot be targeted or damaged. At the
start of your next turn, if the ghost is within <me-distance length="20" /> of you, you may choose to switch
positions with your ghost, after that, the ghost dissipates.

In addition, your Volt can now be upcasted to the 3rd level Volt version of Overload by spending 3 Focus Points
