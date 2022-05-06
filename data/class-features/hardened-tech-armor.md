---
level: 7
klass: sentinel
subclass: juggernaut
name: Hardened Tech Armor
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
          - model: class-features
            id: hardened-tech-armor
      shortDesc: >-
        When active, +1 AC. Immunity to critical hits. Each hostile creature within range must succeed on a DC {{ dc }} Wisdom
        saving throw (advantage for synthetic creatures) or be compelled to attack you while tech armor is active.
        Creatures make a new save when dealt damage from a source other than you.
      toggle:
        whenOn:
          - {}
          - {}
          - {}
          - type: immunity
            id: critical
            label: Critical Hits
---
At 7th level, you're able to shrug off hits that would normally devastate others. While your tech armor
is active, you have +1 AC and any critical hit against you becomes a normal hit.
