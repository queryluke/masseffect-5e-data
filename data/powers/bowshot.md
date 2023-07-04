---
author: Spagheddy
name: Bowshot
version: 1
level: 0
type: tech
classes: []
tags:
  - damage
mechanics:
  - castingTime:
      length: 1
      unit: action
    attack:
      type: ranged
      wp: power
      proficient: true
    dc: false
    damage:
      - dieCount: 1
        dieType: 10
        type: piercing
        mod: int
    conditions: false
    duration:
      length: 0
      unit: instant
    concentration: false
    range:
      short: 125
    detonates: false
    primes: false
    notes: []
  - notes:
      - 'Shoot 2 arrows'
  - notes:
      - 'Shoot 3 arrows'
  - notes:
      - 'Shoot 4 arrows'
advancements:
  - id: concussive-arrow
    name: Concussive Arrow
    text: >-
      You may chose to deal bludgeoning damage instead of piercing damage with your Bowshot. Targets hit by more
      than one arrow have to make a Constitution save or be stunned until the end of their next round.
    mechanics:
      - notes:
          - {}
          - '2+ hits to single target = CON save or stunned'
  - id: armor-piercing-arrow
    name: Armor Piercing Arrow
    text: >-
      Your Bowshot power now has a range of <me-distance length="200" />. Targets hit by more than one arrow lose 1
      point of AC until the end of their next turn.
    mechanics:
      - range:
          short: 250
        notes:
          - {}
          - '2+ hits to single target = -1 AC'
---
You draw your Omni-Bow and shoot at a target you can see within range. Make a ranged power attack against a target
within range. On a hit, your target takes 1d10 + Intelligence piercing damage. This power does not cost any Tech Points.

As you gain levels, you can make more shots per turn. You shoot two arrows at 5th level,
three arrows at 11th level, and four arrows at 17th level.
You can direct the arrows at the same target or at different ones.
