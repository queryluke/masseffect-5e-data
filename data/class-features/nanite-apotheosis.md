---
name: Nanite Apotheosis
level: 18
klass: soldier
subclass: nanobreaker
mechanics:
  - type: natural-armor
    base: 16
    mod: con
  - type: speed-bonus
    value: [walk]
    bonus:
      type: flat
      value: 15
  - type: speed-note
    note: Your long jump and high jump distance is tripled
  - type: other
    name: Nanite Apothesis (regen)
    shortDesc: >-
      Whenever you are conscious and below half your hit point maximum, regain {{ 5 + conMod }} hit points per turn
      until you are at or above half of your hit points.
  - type: other
    name: Nanite Apothesis (unarmed strikes)
    shortDesc: Your unarmed strikes deal an extra 1d8 fire, lightning, or force damage. You can change the damage type when you take a long rest.
    toggle:
      id: nanite-apotheosis
      options:
        - id: nanite-apotheosis-fire
          name: Fire
          whenOn:
            - type: augment
              value:
                model: soldier
                id: nanite-combat
                limit: [attack]
              merge:
                damage:
                  - {}
                  - dieCount: 1
                    dieType: 8
                    type: fire
                    addTo: base
                moreInfo:
                  additional:
                    - {}
                    - model: class-features
                      id: nanite-apotheosis
        - id: nanite-apotheosis-lightning
          name: Lightning
          whenOn:
            - type: augment
              value:
                model: soldier
                id: nanite-combat
                limit: [attack]
              merge:
                damage:
                  - {}
                  - dieCount: 1
                    dieType: 8
                    type: lightning
                    addTo: base
                moreInfo:
                  additional:
                    - {}
                    - model: class-features
                      id: nanite-apotheosis
        - id: nanite-apotheosis-fire
          name: Force
          whenOn:
            - type: augment
              value:
                model: soldier
                id: nanite-combat
                limit: [attack]
              merge:
                damage:
                  - {}
                  - dieCount: 1
                    dieType: 8
                    type: force
                    addTo: base
                moreInfo:
                  additional:
                    - {}
                    - model: class-features
                      id: nanite-apotheosis
---
At 18th level, your nanoamchines are so adapted to you you couldn't fathom living without them. In turn, they make you
more than superhuman in combat.

- Whenever you're conscious and below half your hit point maximum, regain 5 + Con hit points per turn until you are at or above half of your hit points.
- Your speed increases by 6 meters
- Your long jump and high jump distance triples
- Your unarmed attacks deal 1d8 extra damage. This extra damage is either Fire, Lightning or Force damage, and you can change it when you take a long rest.
- Your Nanite Armor's AC is now 16+ Con modifier.
