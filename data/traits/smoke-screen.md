---
name: Smoke Screen
species:
  - exaltation-destined
mechanics:
  - type: action
    range:
      short: 0
      aoe:
        type: sphere
        size: 20
    resource:
      reset: short
      max:
        type: flat
        value: 2
    shortDesc: Create an <me-distance length="20" adj />-radius sphere of smoke centered on you.
---
As an action, you can create an <me-distance length="20" adj />-radius sphere of smoke centered on you.
The sphere spreads around corners, and its area is heavily obscured. It lasts
for 1 minute or until a wind of moderate or greater speed (at least
<me-distance large length="10" /> per hour) disperses it.

You may use this twice between short or long rests.
