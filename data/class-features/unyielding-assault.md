---
level: 14
klass: sentinel
subclass: juggernaut
name: Unyielding Assault
mechanics:
  - type: saving-throw
    against: [frozen, paralyzed, stunned]
    effect:
      type: advantage
  - type: augment
    value:
      model: class-features
      id: tech-armor
      limit: [bonus-action]
    merge:
      toggle:
        whenOn:
          - {}
          - {}
          - {}
          - type: augment
            value:
              model: class-features
              id: tech-armor
              limit: [bonus-action]
            merge:
              moreInfo:
                additional:
                  - []
                  - []
                  - model: class-features
                    id: unyielding-assault
              shortDesc: >-
                +1 AC. Immunity to critical hits. Each hostile creature within range must succeed on a DC {{ dc }} Wisdom
                saving throw (advantage for synthetic creatures) or be compelled to attack you while tech armor is active.
                Creatures make a new save when dealt damage from a source other than you.
          - {}
          - type: condition-immunity
            value: frozen
          - type: condition-immunity
            value: paralyzed
          - type: condition-immunity
            value: stunned
---
Starting at 14th level, you have advantage on saving throws to avoid becoming paralyzed, stunned, or frozen.
While tech armor is active, you are immune to becoming paralyzed, stunned, or frozen.
