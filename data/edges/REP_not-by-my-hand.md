---
name: Not by my Hand
type: benefits
threshold: 60
prereq:
  paragon:
    within: 15
mechanics:
  - type: other
    resource:
      max:
        type: mod
        value: cha
    shortDesc: >-
      Whenever a creature that can see or hear you makes an ability check, it gains +{{ chaMod }}.
  - type: action
    resource:
      max:
        type: mod
        value: cha
    shortDesc: >-
      Whenever you take the Help action, the creature you aid gains a +{{ chaMod }} bonus to the roll, in addition to advantage.
---
When another creature that can see or hear you makes an ability check, you may add your Charisma modifier to the roll.
Alternatively, in combat, whenever you take the Help action, you may add your Charisma modifier to the first attack
roll or the next ability check the creature you aid makes before the start of your next turn.

You may use this benefit between long rests a number of times equal to your Charisma modifier (minimum of once).


