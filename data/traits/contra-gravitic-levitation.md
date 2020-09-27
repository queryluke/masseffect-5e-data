---
name: Contra-gravitic Levitation
species: hanar
mechanics:
  - type: immunities
    options:
      conditions:
        - prone
---
When not in water, you use a contra-gravitic levitation pack to move. It provides a walking speed of <me-distance length="30">,
though you actually hover <me-distance length="2" /> from the ground. You are immune to 
becoming <me-condition id="prone"/> and you ignore any penalties caused by difficult terrain.

However, when you suffer a critical hit, you must roll a d20. On a 1 or a 2, the device malfunctions and you fall to the
ground. Your walking speed becomes 0 and you are considered <me-condition id="prone"/>. You or another creature can use an 
Action to repair the pack with a successful DC 15 Intelligence (Engineering) check.
