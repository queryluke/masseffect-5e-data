---
level: 7
klass: soldier
subclass: engi-knight
mechanics:
  - type: global-note
    subType: Tech Avenger
    value: Tech Avenger
    moreInfo:
      - model: class-features
        id: tech-avenger
  - type: other
    name: Tech Strike Focus
    toggle:
      id: tech-strike-focus
      options:
        - id: tech-strike-focus-none
          name: None
          whenOn:
            - type: powers
              value: bec-field
              provider:
                model: subclass
                id: engi-knight
        - id: tech-strike-focus-cold
          name: Frostbite Strike
          whenOn:
            - type: powers
              value: bec-field
              provider:
                model: class-features
                id: tech-avenger
              merge:
                primed: cold
                notes:
                  - Immune to detonations on this primer
        - id: tech-strike-focus-fire
          name: Blazing Strike
          whenOn:
            - type: powers
              value: bec-field
              provider:
                model: class-features
                id: tech-avenger
              merge:
                damage:
                  - {}
                  - type: fire
                primed: fire
                notes:
                  - Immune to detonations on this primer
        - id: tech-strike-focus-lightning
          name: Storm Strike
          whenOn:
            - type: powers
              value: bec-field
              provider:
                model: subclasses
                id: engi-knight
              merge:
                damage:
                  - {}
                  - type: lightning
                primed: lightning
                notes:
                  - Immune to detonations on this primer
name: Tech Avenger
---
At 7th level, you always have the B.E.C Field power prepared (it does not count against your Powers Known in the
Engi Knight Powers table). If you have B.E.C Field known in your list of powers, you may learn another Engineer Power.

Additionally, you can now have two Tech Strike programs installed at once.

After you have completed a long rest, you may choose an installed Tech Strike to focus your omni-tool's
resource allocation to provide additional capabilities based on your chosen focus.

#### Tech Avenger Focus Upgrade
__Frostbite Strike__: On top of the cold damage, the attacking creature will also be <me-condition id="primed" sub="cold" /> until the end of your next turn.

__Blazing Strike__: The damage type changes to fire and the attacking creature will also be <me-condition id="primed" sub="fire" /> until the end of your next turn.

__Storm Strike__: The damage type changes to lightning and will also be <me-condition id="primed" sub="lightning" /> until the end of your next turn.

Regardless of your chosen focus upgrade, you have immunity on any detonations on primes caused by your B.E.C Field.

You will gain additional bonuses with your chosen Tech Strike focus at 10th and 15th level.


