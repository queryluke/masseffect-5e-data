---
species:
  - asari
mechanics:
  - type: action
    resource:
      displayType: checkbox
      max:
        type: mod
        value: wis
    range:
      short: 5
    dc:
      proficient: true
      mod: wis
      save: wis
    shortDesc: >-
      For 1 minute, transfer or receive thoughts from a willing creature within {{ range }}. An unwilling creature must succeed
      on a DC {{ dc }} WIS saving throw or you learn its surface thoughts. While active, you may probe deeper into its thoughts
      or direct questions to shape its thoughts as an Action. Lasts 1 minute. An unwilling creature makes another saving throw
      at the start of each of its turn. Creatures with intelligence 3 or less are unaffected.
---
