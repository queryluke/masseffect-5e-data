---
name: Synthetic Healer
new: true
mechanics:
  - type: skill-check
    value: [engineering, electronics]
    effect:
      type: advantage
      note: to stabilize a synthetic creature
  - type: action
    baseGroup: Create 10 charges of epoxy
  - type: action
    resource:
      displayType: counter
      reset: manual
      resetTo: max
      max:
        type: flat
        value: 10
    damage:
      - dieCount: 1
        dieType: 6
        bonus:
          type: flat
          value: 4
        type: hp
    shortDesc: >-
      Restore 1d6 + 4 hit points to a synthetic creature, plus additional hit
      points equal to its level
prerequisite: Intelligence 13 or higher
prereq:
  - type: mod
    limit: [intelligence]
    value: 13
---
You’ve practiced in repairing and patching synthetics, gaining the following benefits:

- You have advantage on Intelligence (Engineering) and Intelligence (Electronics) checks to
stabilize synthetic creatures.
- You can use your action to expend an omni-gel and create 10 charges of a fast-acting,
conductive Epoxy.
- As an action, you can spend one epoxy to tend to a synthetic creature and restore
1d6 + 4 hit points to it, plus additional hit points equal to the creature's level.
The creature can't regain hit points from this feat again until it finishes a short or long rest.

