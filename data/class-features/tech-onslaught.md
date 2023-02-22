---
level: 15
klass: soldier
subclass: engi-knight
mechanics:
  - type: augment
    value:
      model: soldier
      id: tech-strike
      limit: [global-note]
    merge:
      moreInfo:
        additional:
          - model: class-features
            id: tech-obliteration
  - type: augment
    value:
      model: soldier
      id: tech-avenger
      limit: [global-note]
    merge:
      moreInfo:
        additional:
          - {}
          - model: class-features
            id: tech-onslaught
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
                    - 'Spend 1 TP: +1d8 DMG and target must succeed on STR save or become <me-condition id="frozen" />
                      and each creature within <me-distance length="10" /> has movement reduced by <me-distance length="10" />
                      + <me-condition id="primed" sub="cold" /> until the end of your next turn'
          - whenOn:
              - {}
              - {}
              - type: bonus-action
                name: Tech Onslaught (Blazing Strike)
                layout: stats-right
                range:
                  short: 0
                  aoe:
                    type: sphere
                    size: 10
                damage:
                  - dieCount: 2
                    dieType: 8
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
              - type: global-note
                subType: action
                value: Tech Onslaught (Storm Strike)
                moreInfo:
                  model: class-features
                  id: tech-onslaught
      moreInfo:
        additional:
          - model: class-features
            id: tech-obliteration
name: Tech Onslaught
---
At 15th level, using further inspiration from Galaxy of Fantasy and with the help of your AI, you are now able to dash
further in towards danger or to a safe distance without risking crashing into obstacles. Whenever you use your
Adrenaline Rush, you can move up to <me-distance length="30" /> to an unoccupied space you can see, without provoking
Attacks of Opportunity. This movement can occur before or after you perform your additional Action and does not
count towards your current Movement during your turn.

In addition, your chosen focus as part of Tech Avenger will now provide this final additional upgrade:


__Frostbite Strike__: You may spend an additional Tech Point during Frostbite Strike to add an additional 1d8 to the
total damage. Additionally, the creature then has to pass a Strength saving throw against your Powercasting DC or
become Frozen until start of your next turn. In addition, all other creatures within <me-distance length="10" /> of
your target (Except yourself) will have their movement reduced by <me-distance length="10" /> for their next turn and
are <me-condition id="primed" sub="cold" /> until the end of your next turn.

__Blazing Strike__: As a Bonus Action, you may spend 1 Tech Point to vent high amounts of heat from your
omni-tool and armor. All creatures within <me-distance length="10" /> of you must succeed on a Dexterity
Saving throw against your Powercasting DC or take 2d8 fire damage and be <me-condition id="primed" sub="fire" />
until the end of your next turn. Half damage on a success.

__Storm Strike__: You may spend an additional Tech Point during Storm Strike to cause a <me-distance length="30" adj/>
line of lightning to unleash from your weapon's strike going in the direction your target was in, all creatures
in the area of effect (Including your attacked target) must succeed on a Dexterity saving throw against your
Powercasting DC or take 2d8 lightning damage and become <me-condition id="primed" sub="lightning" /> until the end of
your next turn. You may change the direction of the line after <me-distance length="15" /> and can only be changed once.
You cannot change the direction to hit creatures a second time.

You have immunity to any detonation caused by primes inflicted by these upgrades.

This above benefit does not require the B.E.C Field Tech Power to be active to use.
