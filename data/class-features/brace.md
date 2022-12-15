---
level: 7
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
              When an ally makes a ranged weapon attack while Barricade is active and they are receiving the cover bonus,
              they gain a bonus to hit their target equal to your powercasting modifier.
            moreInfo:
              additional:
                - model: class-features
                  id: brace
      moreInfo:
        additional:
          - model: class-features
            id: brace
name: Brace
---
At 7th level, your allies can now brace their weapons on the Barricade when they are adjacent to it. When an ally
makes a ranged weapon attack while Barricade is active and they are receiving the cover bonus, they gain a bonus
to hit their target equal to your powercasting modifier.
