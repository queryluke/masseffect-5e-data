---
level: 18
klass: experiment
subclass: reaper
name: Apex Augments
mechanics:
  - type: model-choice
    options: true
    model: apex-augments
  - type: augment
    value:
      model: experiment
      id: reaper-scar
      limit: [attack-augment]
    merge:
      bonus:
        value: 5
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
          - {}
          - model: class-features
            id: apex-augments
---
At 18th level, the true power of the Reaper's augmentations shows itself to you now. You now count as an Indoctrinated
device for the purposes of Indoctrinating other people around you. In addition, your augments improve.
This only applies to your Main Augment.

__Apex Weaponry__: Your weapon deals an additional 1d8 radiant damage. Whenever you damage an enemy with your weapon,
that enemy takes half the damage you dealt again at the start of their next turn.

__Apex Processor__: You gain proficiency in all saving throws. You regenerate hit points equal to 5 + your constitution
modifier each turn as long as you are below half your max hit points and still have at least one hit point.

__Apex Plating__: You become resistant to Slashing, Piercing, Bludgeoning and Psychic damage. You are
immune to critical hits.

You become Indoctrinated 5, and you are not immune to this Indoctrination level's negative effects.
