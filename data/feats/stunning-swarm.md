---
name: Stunning Swarm
new: true
mechanics:
  - type: augment
    model: trait
    modelId: seeker-swarm
    mechanicTarget: bonus-action
    instance: 0
    replacements:
      - path: resource.max.value
        value: 5
        type: replace
      - path: dc
        value:
          base: 8
          proficient: true
          save: con 
          textBonus: ' + # swarms'
          type: replace
      - path: notes
        value: 'when a creature suffers damage from 2 or more swarms simultaneously, CON save or stunned until end of its next turn'
        type: replace
prerequisite: Awakened Collector
prereq:
  - type: species
    limit: [awakened-collector]
---
You can summon additional swarms and multiple stings can briefly stun enemies.

- When you use your Seeker Swarm trait, you summon five swarms instead of three. 
- Whenever a creature suffers damage from two or more of your seeker swarms simultaneously, 
it must succeed on a Constitution saving throw or become stunned until the end of its next 
turn. The DC of the saving throw is equal to 8 + your proficiency bonus + the number of 
simultaneous seekers swarms that hit the target.

