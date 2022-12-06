---
level: 14
klass: experiment
subclass: reaper
name: Feeblemind
mechanics:
  - type: global-note
    subType: action
    value: Feeblemind
    moreInfo:
      model: class-features
      id: feeblemind
  - type: skill-check
    value: [intimidation]
    effect:
      type: advantage
  - type: augment
    value:
      model: experiment
      id: reaper-scar
      limit: [attack-augment]
    merge:
      bonus:
        value: 4
  - type: augment
    value:
      model: experiment
      id: reaper-scar
      limit: [global-note]
    merge:
      moreInfo:
        additional:
          - {}
          - {}
          - model: class-features
            id: feeblemind
---
At 14th level, when you cause Psychic damage to a target, the target must roll a Charisma saving throw with a
DC of 8 or have their Intelligence, Wisdom and Charisma scores reduced by 1. This effect is cumulative,
up to your proficiency modifier, and lasts until the end of the encounter.

You roll all of your Intimidation checks with advantage.

You become Indoctrinated 4. You are not immune to this Indoctrination level's negative effect.
