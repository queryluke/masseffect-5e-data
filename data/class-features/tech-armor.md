---
level: 1
klass: sentinel
mechanics:
  - type: tech-armor
  - type: bonus-action
    resource:
      max:
        type: flat
        value: 2
    damage:
      - dieCount: 0
        type: tech-armor-hp
        bonus:
          type: multi
          value:
            - type: level
              value: sentinel
              multiplier: 2
            - type: powercastingMod
              value: sentinel
              multiplier: 2
    label: Activate Tech Armor
  - type: reaction
    resource:
      max:
        type: flat
        value: 2
    damage:
      - dieCount: 0
        type: tech-armor-hp
        bonus:
          type: multi
          value:
            - type: level
              value: sentinel
              multiplier: 2
            - type: powercastingMod
              value: sentinel
              multiplier: 2
    label: Activate Tech Armor
    reactionQualifier: when you take damage
  - type: action
    label: Detonate Tech Armor
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
    damage:
      - dieCount: 0
        type: force
        bonus:
          type: resource
          value: tech-armor-hp
name: Tech Armor
---
You've bolstered your armor with a powerful, defense-oriented AI. As a bonus action or as a reaction to taking damage,
activate your Tech Armor.

When activated, tech armor creates a new kinetic barrier with additional hit points equal to the sum of your sentinel level
and powercasting modifier, multiplied by 2. When you have tech armor hit points and take damage, the tech armor hit points
are lost first, and any leftover damage carries over to your shields and/or normal hit points. Tech armor lasts 1 minute
or until it has 0 hit points remaining.

While tech armor is active, you can use your action to overload it. Each creature within <me-distance length="10" /> must make a Constitution
saving throw. On a failed save, a creature takes force damage equal to the remaining hit points of your tech armor,
or half as much on a successful one.

You can use Tech Armor twice between long rests.
