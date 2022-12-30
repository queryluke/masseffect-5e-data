---
level: 14
klass: sentinel
subclass: warlord
mechanics:
  - type: augment
    value:
      model: sentinel
      id: power-slam
    merge:
      moreInfo:
        additional:
          - {}
          - {}
          - model: class-features
            id: groundshaker
name: Groundshaker
---
At 14th level, if you do not move before using Power Slam, you can chose to slam the ground instead of an enemy
for your attack. If you do so, enemies within a <me-distance length="10" /> burst centred on you must make a
Dexterity saving throw against your Powercasting DC or be knocked prone and take the damage of the power you
discharged. If they succeed on the saving throw, they still take half of the damage of the spell you discharged.
