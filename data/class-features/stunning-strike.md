---
level: 6
klass: vanguard
subclass: shock-trooper
name: Stunning Strike
mechanics:
  - type: other
    resource:
      reset: 'off'
      displayType: barrier-ticks
      label: 'Barrier Ticks'
    dc:
      base: 8
      proficient: true
      bonus:
        type: powercastingMod
        value: vanguard
      save: con
    shortDesc: >-
      When you deal damage to a creature with charge, spend 1 barrier tick to force the creature to succeed a DC {{ dc }} CON save or become <me-condition id="stunned"/> until the end of your next turn.
---
Starting at 6th level, you can focus your barrier into the impact of your charge power. When you deal damage to a creature
with your charge cantrip, you can spend 1 barrier tick to attempt a stunning strike. The target must succeed on a Constitution
saving throw or be <me-condition id="stunned"/> until the end of your next turn.
