---
level: 10
klass: sentinel
subclass: warleader
mechanics:
  - type: augment
    value:
      model: sentinel
      id: tech-barricade
    merge:
      toggle:
        whenOn:
          - {}
          - {}
          - shortDesc: >-
              You and adjacent allies gain half cover. If an attack misses a target behind the Barricade because of
              this bonus, that means the barricade took a hit.
              <br><br>
              If the barricade would be hit, you can instead chose to take 1d4 damage to prevent it from being hit. The
              damage increases by 1d4 each time you use this feature per casting of Tech Barricade This damage does not bypass
              shields, but cannot be reduced by Barrier.
              <br><br>
              When an ally makes a ranged weapon attack while Barricade is active and they are receiving the cover bonus,
              they gain a bonus to hit their target equal to your powercasting modifier.
            moreInfo:
              additional:
                - {}
                - model: class-features
                  id: heavy-barricade
      moreInfo:
        additional:
          - {}
          - model: class-features
            id: heavy-barricade
name: Heavy Barricade
---
At 10th level, you can reroute the power from your shields or, in extreme cases, your own well being to power the
Barricade. If the barricade would be hit, you can instead chose to take 1d4 damage to prevent it from being hit. The
damage increases by 1d4 each time you use this feature per casting of Tech Barricade This damage does not bypass
shields, but cannot be reduced by Barrier.
