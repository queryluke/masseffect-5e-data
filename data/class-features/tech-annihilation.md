---
level: 18
klass: soldier
subclass: engi-knight
mechanics:
  - type: global-note
    value: Tech Annihilation
    subType: action
    moreInfo:
      model: class-features
      id: tech-annihilation
  - type: augment
    value:
      model: soldier
      id: tech-strike
      limit: [global-note]
    merge:
      moreInfo:
        additional:
          - {}
          - model: class-features
            id: tech-annihilation
  - type: augment
    value:
      model: soldier
      id: tech-avenger
      limit: [global-note]
    merge:
      moreInfo:
        additional:
          - {}
          - {}
          - model: class-features
            id: tech-annihilation
  - type: augment
    value:
      model: soldier
      id: tech-avenger
      limit: [other]
    merge:
      toggle:
        options:
          - {}
          - whenOn:
              - merge:
                  notes:
                    - {}
                    - 'Spend 1 TP: +1d10 DMG and target must succeed on STR save or become <me-condition id="frozen" />
                      and each creature within <me-distance length="10" /> has movement reduced by <me-distance length="10" />
                      + <me-condition id="primed" sub="cold" /> until the end of your next turn'
          - whenOn:
              - {}
              - {}
              - type: bonus-action
                range:
                  short: 0
                  aoe:
                    type: sphere
                    size: 10
                damage:
                  - dieCount: 2
                    dieType: 10
                    type: fire
                dc:
                  base: 8
                  proficient: ture
                  save: dex
                  mod: int
                shortDesc: >-
                  Spend 1 Tech Point. All creatures within <me-distance length="10" /> of you must succeed on a
                  {{ dc }} DEX Save or take {{ damage }} fire damage and be <me-condition id="primed" sub="fire" />
                  until the end of your next turn. Half damage on a success.
          - whenOn:
              - {}
              - {}
              - moreInfo:
                  additional:
                    - model: class-features
                      id: tech-annihilation
      moreInfo:
        additional:
          - model: class-features
            id: tech-obliteration
          - model: class-features
            id: tech-annihilation
name: Tech Annihilation
---
At 18th level, your Tech Strike and Tech Avenger damage dice increases from d8s to d10s, this includes the Blazing
Strike's extra damage after the attack.

Additionally, you recover 1 Tech Point whenever your Melee Weapon attack results on a critical hit on any
creature or a killing blow on a creature that is medium sized or larger.
