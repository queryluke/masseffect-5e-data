---
level: 6
klass: experiment
subclass: reaper
name: Aura of Dominance
mechanics:
  - type: global-note
    subType: action
    value: Aura of Dominance
    moreInfo:
      model: class-features
      id: aura-of-dominance
  - type: augment
    value:
      model: experiment
      id: reaper-scar
      limit: [attack-augment]
    merge:
      bonus:
        value: 2
  - type: augment
    value:
      model: experiment
      id: reaper-scar
      limit: [global-note]
    merge:
      moreInfo:
        additional:
          - model: class-features
            id: aura-of-dominance
---
At 6th level, your indoctrination works it's way into the minds of people around you. It's a pervasive paranoia that
slowly takes over other's cognitive behaviour. While within <me-distance length="25" /> of you, creatures reduce their movement
speed by <me-distance length="10" />. Any creature that starts it's turn frightened in this
space has it's speed reduced to 0 instead. This area increases to encapsulate <me-distance length="50" /> at 12th level.

You become Indoctrinated 2.
