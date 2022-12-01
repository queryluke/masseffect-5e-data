---
name: Pheromone Spray
version: 1
level: 1
type: tech
classes:
  - engineer
  - musician
  - sentinel
  - infiltrator
  - tracker
  - explorer
tags:
  - control
mechanics:
  - castingTime:
      length: 1
      unit: action
    attack: false
    dc:
      base: 8
      proficient: true
      save: wis
    damage: false
    conditions: [charmed]
    duration:
      length: 24
      unit: hour
    concentration: false
    range:
      short: 30
    detonates: false
    primes: false
advancements:
  - id: loyalty
    name: Loyalty
    text: If you successfully use this ability on a creature for 30 days in a row, the creature develops a fierce, chemically-induced sense of loyalty to you and remains charmed by you indefinitely.
    mechanics: []
  - id: aggression
    name: Aggression
    text: You are able to modify the pheromone cocktail to send creatures into a frenzy. When you use this ability, you may choose to frenzy creatures instead of charming them. A creature that becomes frenzied must use its movement to move towards the nearest creature and attack them if able. A frenzied creature may repeat its save at the end of each of its turns.
    mechanics: []
---
A spray of chemical pheromones lets you convince a beast that you mean it no harm. Choose an organic creature that you can see
within range. It must see you and be capable of smelling. If the creature's Intelligence is 4 or higher, the power fails.
Otherwise, the beast must succeed on a Wisdom saving throw or be <me-condition id="charmed"/> by you for the ability's duration.
If you or one of your companions harms the creature, the effect ends.

__At Higher Levels__. When you cast this power using a power slot of 2nd level or higher, you can affect one additional
creature for each slot level above 1st.
