---
level: 7
klass: sentinel
subclass: guardian
name: Tech Aura
mechanics:
  - type: augment
    value:
      model: sentinel
      id: tech-armor
      limit: [bonus-action]
    merge:
      name: Activate Tech Armor/Aura
      shortDesc: Instead of your standard tech armor, you may activate a tech aura package which lasts 1 hour.
      moreInfo:
        additional:
          - model: class-features
            id: tech-aura-1
      toggle:
        id: tech-armor
        whenOn:
          - type: false
          - type: resource
            id: tech-armor
            method: add
            value:
              type: flat
              value: 1
          - type: false
        options:
          - id: defensive
            name: Defensive
            whenOn:
              - type: augment
                value:
                  model: sentinel
                  id: tech-armor
                  limit: [bonus-action]
                merge:
                  shortDesc: Tech Armor active for 1 minute.
              - type: resource
                id: tech-armor-hp
                method: set
                value:
                  type: multi
                  value:
                    - type: level
                      value: sentinel
                      multiplier: 2
                    - type: powercastingMod
                      value: sentinel
                      multiplier: 2
              - type: action
                name: Detonate Tech Armor
                range:
                  short: 0
                  aoe:
                    type: sphere
                    size: 10
                dc:
                  base: 8
                  proficient: true
                  bonus:
                    type: powercastingMod
                    value: sentinel
                  save: con
                damage:
                  - dieCount: 0
                    type: force
                    bonus:
                      type: resource
                      value: tech-armor-hp
          - id: anti-biotic
            name: Anti-Biotic
            whenOn:
              - type: resistance
                value: force
              - type: resistance
                value: necrotic
              - type: augment
                value:
                  model: sentinel
                  id: tech-armor
                merge:
                  range:
                    short: 0
                    aoe:
                      type: sphere
                      size: 30
                  shortDesc: >-
                    Each creature within range gains resistance to force and necrotic damage.
          - id: anti-tech
            name: Anti-Tech
            whenOn:
              - type: resistance
                value: fire
              - type: resistance
                value: cold
              - type: augment
                value:
                  model: sentinel
                  id: tech-armor
                merge:
                  range:
                    short: 0
                    aoe:
                      type: sphere
                      size: 30
                  shortDesc: >-
                    Each creature within range gains resistance to fire and cold damage.
          - id: grounded
            name: Grounded
            whenOn:
              - type: resistance
                value: lightning
              - type: augment
                value:
                  model: sentinel
                  id: tech-armor
                merge:
                  range:
                    short: 0
                    aoe:
                      type: sphere
                      size: 30
                  shortDesc: >-
                    Each creature within range gains resistance to lightning damage.
          - id: reactive
            name: Reactive
            whenOn:
              - type: saving-throw
                value: [str, dex]
                effect:
                  type: bonus
                  bonus:
                    type: powercastingMod
                    value: sentinel
              - type: augment
                value:
                  model: sentinel
                  id: tech-armor
                merge:
                  range:
                    short: 0
                    aoe:
                      type: sphere
                      size: 30
                  shortDesc: >-
                    Each creature within range adds {{ powercastingMod:sentinel }} to Strength and Dexterity saving throws.
          - id: speed
            name: Speed
            whenOn:
              - type: speed-bonus
                value: [walk]
                bonus:
                  flat:
                  value: 15
              - type: bonus-action
                name: Disengage
                baseGroup: true
              - type: augment
                value:
                  model: sentinel
                  id: tech-armor
                merge:
                  range:
                    short: 0
                    aoe:
                      type: sphere
                      size: 30
                  shortDesc: >-
                    Each creature within gains a <me-distance length="15" /> walking speed bonus and can take the Disengage action as a bonus action.
---
In addition to the standard defensive VI, you've augmented your Tech Armor to run different VI packages.
At 7th level, when you activate
tech armor, you can choose to run a different VI package instead. When you activate an alternate package, you
do not gain hit points, instead, you and any friendly creature within <me-distance length="30" /> of you gain
the effect of the package for 1 hour. You may only have one tech armor active at once.

Package | Effect
--- | ---
Defensive | This is the standard Tech Armor package. It does not affect allies.
Anti-biotic | Resistance to force and necrotic damage.
Anti-tech | Resistance to fire and cold damage.
Grounded | Resistance to lightning damage.
Reactive | Add your powercasting modifier to Strength or Dexterity saving throws.
Speed | Increase speed by <me-distance length="15" />. Can take the Disengage action as a bonus action.
Regen | Regenerate shield points equal to your powercasting modifier on the start of each of your turns.
Inspiring Music | Advantage on saving throws against becoming frightened or charmed.
Brute force | Creatures within your aura deal an additional 1d8 bludgeoning damage with melee attacks.
Negation Field | Creatures within your aura can't be primed.
