---
level: 3
klass: sentinel
subclass: artillerist
mechanics:
  - type: augment
    value:
      model: sentinel
      id: tech-armor
      limit: [bonus-action]
    merge:
      name: Activate Tech Armor/Cannon
      shortDesc: When you would activate your tech armor, you may activate tech cannon instead.
      moreInfo:
        additional:
          - model: class-features
            id: tech-cannon
      toggle:
        id: tech-armor
        whenOn:
          - type: false
          - type: resource
            id: tech-armor
            method: add
            value:
              type: flat
              value: 1
          - type: false
        options:
          - id: tech-armor-option
            name: Tech Armor
            whenOn:
              - type: augment
                value:
                  model: sentinel
                  id: tech-armor
                  limit: [bonus-action]
                merge:
                  shortDesc: Tech Armor active for 1 minute.
              - type: resource
                id: tech-armor-hp
                method: set
                value:
                  type: multi
                  value:
                    - type: level
                      value: sentinel
                      multiplier: 2
                    - type: powercastingMod
                      value: sentinel
                      multiplier: 2
              - type: action
                name: Detonate Tech Armor
                range:
                  short: 0
                  aoe:
                    type: sphere
                    size: 10
                dc:
                  base: 8
                  proficient: true
                  bonus:
                    type: powercastingMod
                    value: sentinel
                  save: con
                damage:
                  - dieCount: 0
                    type: force
                    bonus:
                      type: resource
                      value: tech-armor-hp
          - id: tech-cannon-option
            name: Tech Cannon
            whenOn:
              - type: global-note
                value: Tech Cannon
                subType: power
                moreInfo:
                  model: class-features
                  id: tech-cannon
name: Tech Cannon
---
At 3rd level, you can choose to create a Tech Cannon instead of Tech Armor. When you chose to do so, you don't gain the
Temporary Hit Points your armor would give you. Instead, your power slots are treated as one level higher when you
cast them for the duration of Tech Armor. When you cast a Cantrip while Tech Canon is active,
you roll one more damage die of equal size and add that to the damage.

Maintaining Tech Canon is difficult. Whenever it's on, you can't
concentrate on a power for more than 1 turn, and when you take health damage, you must roll a DC 10 concentration
check to avoid a preemptive shut off. The DC grows by 1 each time you succeed the save, and resets when Tech Cannon ends.
