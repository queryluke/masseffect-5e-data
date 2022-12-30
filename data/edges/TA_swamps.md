---
name: Swamps
mechanics:
  - type: speed-bonus
    value: [swimming]
    ifExists:
      bonus:
        type: flat
        value: 4
    else:
      bonus:
        type: speed
        value: walking
type: tracker-affinity
---
You gain a swimming speed equal to your walking speed. If you already have a swimming speed, your swim speed increases by <me-distance length="10" />.
