---
level: 18
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
              You and allies within <me-distance length="10" /> gain half cover.
              If an attack misses a target behind the Barricade because of this bonus, that means the barricade took a hit.
              <br><br>
              If the barricade would be hit, you can instead chose to take 1d4 damage to prevent it from being hit. The
              damage increases by 1d4 each time you use this feature per casting of Tech Barricade This damage does not bypass
              shields, but cannot be reduced by Barrier.
              <br><br>
              When an ally makes a ranged weapon attack while Barricade is active and they are receiving the cover bonus,
              they gain a bonus to hit their target equal to your powercasting modifier.
              <br><br>
              Allies within the area gain +6 to STR, DEX, and CON saving throws.
            moreInfo:
              additional:
                - {}
                - {}
                - model: class-features
                  id: bulwark
      moreInfo:
        additional:
          - {}
          - {}
          - {}
          - model: class-features
            id: bulwark
name: Bulwark
---
At 18th level, the benefit of Barricade extends to 4 meters around you, instead of only adjacent squares. In addition,
when an ally is within Barricade's area of effect, they add your proficiency modifier to their physical saving throws
(Strength, Dexterity, Constitution).
