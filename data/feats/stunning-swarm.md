---
name: Stunning Swarm
new: true
mechanics:
  - type: augment
    value:
      model: traits
      id: seeker-swarm
      limit: [bonus-action]
      instances: [0]
    merge:
      resource:
        displayType: counter
        reset: manual
        max:
          type: flat
          value: 5
        id: seeker-swarm-count
      dc:
        base: 8
        proficient: true
        note: '+ # swarms'
        save: con
      shortDesc: >-
        Use a bonus action to expend one to five swarms
        that hit a creature of your choice within {{ range }}. A swarm
        deals 1d4 + 1 necrotic damage its target that bypasses shields
        and detonates any primed conditions. If you expend more than
        one swarm, they all strike simultaneously, and you can direct
        them to hit one creature or several. If you hit a target with three
        or more swarms simultaneously, it must succeed on a Constitution saving
        throw or become stunned until the end of its next turn. The DC is
        {{ dc }} + the number of simultaneous swarms.
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

