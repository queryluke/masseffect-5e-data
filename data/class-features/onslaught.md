---
level: 10
klass: vanguard
subclass: shock-trooper
name: Onslaught
mechanics:
  - type: augment
    value:
      model: vanguard
      id: biotic-bull-rush
    limit: [powers]
    merge:
      merge:
        damage:
          - bonus:
              type: powercastingMod
              value: vanguard
---
At 10th level, you've mastered your charge power, maximizing its damage. The damage of charge becomes d10 +
your powercasting modifier.
