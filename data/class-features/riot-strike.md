---
level: 18
klass: soldier
subclass: armiger
mechanics:
  - type: augment
    value:
      model: soldier
      id: armiger-rush
    merge:
      merge:
        detonates: true
  - type: augment
    value:
      model: soldier
      id: quick-burn
    merge:
      shortDesc: >-
        Spend fuel to cast Havoc Strike as a bonus action. The number of Fuel spent is equal to half the number of damage dice that Havoc Strike deals.
      moreInfo:
        additional:
          - model: class-features
            id: riot-strike
  - type: global-note
    subType: defenses
    value: Riot Strike
    moreInfo:
      model: class-features
      id: riot-strike
name: Riot Strike
---
At 18th level, you halve the amount of fuel needed to cast Havoc Strike as a bonus action. Your Havoc
Strike now also detonates targets caught in the radius. You are immune to detonations caused by your Havoc Strike.
