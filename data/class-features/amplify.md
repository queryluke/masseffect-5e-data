---
level: 10
klass: vanguard
subclass: cardinal
mechanics:
  - type: global-note
    subType: power
    value: Amplify
    moreInfo:
      model: class-features
      id: amplify
  - type: powers
    value: overload
    provider:
      model: subclass
      id: cardinal
    castAt: 2
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
        - Costs 2 focus points
name: Amplify
---
Your energies now adversely affect your victim's fortitude, allowing for other comrades to go in for the kill with ease.

At 10th level, any creature you hit with Volt and they fail their dexterity saving throw, they will also be afflicted
to take additional damage equal to your Wisdom modifier for the next 3 attacks against them. The maximum duration this
effect can last is until the end of your next turn.

Additionally, your Volt may be upcasted by spending 2 Focus Points to cast the Volt version of Overload at 2nd level.
