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
At 7th level, you always have the B.E.C Field power prepared (it does not count against your Powers Known in the Engi Knight Powers table). If you already have B.E.C Field known in your list of powers, you may learn another Engineer Power.

Additionally, you may now have two Tech Strike programs installed at once.

You may choose one of the three Tech Strikes to focus your omni-tool's resource allocation to provide your B.E.C Field Tech Power additional effects based on your chosen focus. You may change your Tech Strike focus at the end of a long rest.

#### Tech Avenger Focus Upgrade
__Frostbite Strike__: While your B.E.C Field is active, the attacking creature will also become <me-condition id="primed" sub="cold" /> until the end of your next turn.

__Blazing Strike__: While your B.E.C Field is active, the attacking creature will take fire damage instead of cold damage and will also become <me-condition id="primed" sub="fire" /> until the end of your next turn.

__Storm Strike__: While your B.E.C Field is active, the attacking creature will take lightning damage instead of cold damage and will also become <me-condition id="primed" sub="lightning" /> until the end of your next turn.

You have immunity on any detonations on primes caused by your B.E.C Field.

You will gain additional bonuses with your chosen Tech Strike Focus at 10th and 15th level.
