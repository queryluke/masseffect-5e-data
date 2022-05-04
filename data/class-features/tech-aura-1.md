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
      limit: [bonus-action, reaction]
    merge:
      toggle:
        whenOn:
          - type: resource
            id: tech-armor
            method: add
            value:
              type: flat
              value: 1
        whenOff: false
        options:
          - id: defensive
            name: Defensive
            whenOn:
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
            whenOff:
              - type: resource
                id: tech-armor-hp
                method: set
                value:
                  type: flat
                  value: 0
          - id: anti-biotic
            name: Anti-Biotic
            whenOn:
              - type: resistance
                value: force
              - type: resistance
                value: necrotic
              - type: reminder
                value: Each friendly creature within <me-distance length="30" /> gains resistance to force and necrotic damage.
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
