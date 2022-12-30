---
level: 3
klass: sentinel
subclass: field-medic
mechanics:
  - type: other
    name: Trauma Suite
    shortDesc: >-
      Create a Trauma Suite on a willing ally within <me-distance length="75" /> of you for 1 minute. While active,
      you may cast First Aid on the ally as a bonus action. If the ally reaches zero hit points, the Trauma Suite shuts off
      and your ally is stabilized.
    resource:
      max:
        type: flat
        value: 2
      id: tech-armor
  - type: powers
    value: first-aid
    klass: sentinel
name: Trauma Suite
---
Your omni-tool's software is calibrated for first aid actions. At 3rd level, you gain access to the First Aid
Sentinel Power. This power doesn't count against your powers known, and you can cast it as you would any Sentinel power.

You can also spend a use of your Tech Armor to create a Trauma Suite on a willing ally within <me-distance length="75" />
of you. The trauma suite doesn't grant your ally the usual benefits of Tech Armor, but it provides them with other benefits.

- You can cast First Aid on that ally as a Bonus Action instead of a normal action.
- If your ally reaches zero hit points, the Trauma Suite shuts off and your ally is stabilized.

In standard circumstances, Trauma Suite lasts for one minute.


