---
level: 14
klass: sentinel
subclass: warleader
mechanics:
  - type: reaction
    value:
      model: sentinel
      id: tech-barricade
    merge:
      toggle:
        whenOn:
          - {}
          - {}
          - {}
          - type: reaction
            name: Reflecting Barricade
            shortDesc: >-
              When your Barricade is hit or you prevent it from being hit with your Heavy Barricade ability, you can
              use your reaction to send the attack back at it's source. Add your powercasting modifier to the original attack roll,
              and compare it to the attacker's AC. If it's higher, the attacker is hit, and rolls damage as normal.
      moreInfo:
       additional:
         - {}
         - {}
         - model: class-features
           id: reflecting-barricade
name: Reflecting Barricade
---
At 14th level, when your Barricade is hit or you prevent it from being hit with your Heavy Barricade ability, you can
use your reaction to send the attack back at it's source. Add your powercasting modifier to the original attack roll,
and compare it to the attacker's AC. If it's higher, the attacker is hit, and rolls damage as normal.
