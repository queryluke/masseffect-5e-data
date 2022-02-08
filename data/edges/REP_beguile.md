---
name: Beguile
type: benefits
threshold: 30
prereq:
  paragon:
    within: 10
mechanics:
  - type: action
    layout: stats-right
    resource: {}
    range:
      short: 120
    dc:
      base: 8
      proficient: true
      mod: cha
      save: wis
    shortDesc: >-
      Monolog for 1 minute, causing creatures of your choice within {{ range }} to make a DC {{ dc }} Wisdom saving throw.
      A creature has advantage if you or your companions are fighting it. A creature with Intelligence 3 or lower succeeds.
      On a failure, a creature has disadvantage on attack rolls against creatures other than you and Wisdom (Perception)
      checks to perceive creatures other than you.
---
You can start monologing for up to 1 minute, causing creatures of your choice that you can see within range and that
can hear you to make a Wisdom saving throw. Any creature with an Intelligence of 3 or lower succeeds on this
saving throw automatically, and if you or your companions are fighting a creature, it has advantage on the
save. On a failed save, the target has disadvantage on attack rolls against any creature other than you and
Wisdom (Perception) checks made to perceive any creature other than you until you stop talking or until the
target can no longer hear you. The effect also ends if you are incapacitated or can no longer speak.

You may use this benefit once per long rest.

