---
level: 18
klass: sentinel
subclass: artillerist
mechanics:
  - type: augment
    value:
      model: sentinel
      id: tech-armor
      limit: [bonus-action]
    merge:
      moreInfo:
        additional:
          - {}
          - {}
          - {}
          - {}
          - model: class-features
            id: assault-mastery
      toggle:
        options:
          - {}
          - whenOn:
              - {}
              - {}
              - {}
              - {}
              - type: global-note
                value: Assault Mastery
                subType: power
                moreInfo:
                  model: class-features
                  id: assault-mastery
name: Assault Mastery
---
At 18th level, you are a walking siege engine. When you expend a power slot to cast a power while Tech Cannon active,
it now counts as two levels higher than their actual level. In addition, once per short rest, you can cast two
powers with a single action. You take recoil damage equal to twice the level of your maximum power level. You cannot
cast powers granted by your L5n Implant feature this way.
