---
rarity: common
type: grenade
cost: 250
weight: 1
subType: ''
name: Smoke Grenade
mechanics:
  - type: action
    resource:
      id: smoke-grenade
      displayType: gear-consumable
consumable: true
equippable: true
---
Target an area within <me-distance length="30" />. A cloud of thick smoke erupts out in a <me-distance length="10" adj/>
cube centered on the target location. The cloud's area is heavily obscured. The cloud persists for 30 seconds.
A moderate wind (<me-distance length="11" large num-only /> to <me-distance length="20" large /> per hour) can disperse the
smoke after 1 round, and a strong wind (<me-distance length="21" large num-only override="or more {metric}"/> per hour)
can do so immediately.
