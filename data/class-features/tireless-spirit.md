---
level: 10
klass: soldier
subclass: gladiator
name: Tireless Spirit
mechanics:
  - type: augment
    value:
      model: soldier
      id: fighting-spirit
      limit: [bonus-action]
    merge:
      shortDesc: >-
        Gain {{ damage }} temporary hit points. Additionally, gain advantage on
        all weapon attack rolls until the end of your turn. When you roll
        initiative and have no uses remaining, you regain one use.
      moreInfo:
        additional:
          - model: class-features
            id: tireless-spirit
---
Starting at 10th level, when you roll initiative and have no uses of Fighting Spirit remaining, you regain one use.
