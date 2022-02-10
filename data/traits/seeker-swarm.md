---
species:
  - awakened-collector
mechanics:
  - type: action
    resource:
      id: seeker-swarm
    shortDesc: >-
      Summon three seeker swarms that orbit around you for 1 hour.
  - type: bonus-action
    layout: stats-right
    resource:
      displayType: counter
      reset: manual
      max:
        type: flat
        value: 3
      id: seeker-swarm-count
    damage:
      - dieCount: 1
        dieType: 4
        type: necrotic
        bonus:
          type: flat
          value: 1
    range:
      short: 150
    shortDesc: >-
      Use a bonus action to expend one to three swarms
      that hit a creature of your choice within {{ range }}. A swarm
      deals 1d4 + 1 necrotic damage its target that bypasses shields
      and detonates any primed conditions. If you expend more than
      one swarm, they all strike simultaneously, and you can direct
      them to hit one creature or several.
---
