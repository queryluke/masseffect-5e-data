---
level: 14
klass: sentinel
subclass: guardian
name: Omni-Shield
mechanics:
  - type: augment
    value:
      model: sentinel
      id: omni-shield-1
      limit: [bonus-action]
    merge:
      shortDesc: Activate your regular omni-shield, or a fire or cryo shield.
      toggle:
        whenOn:
          - {}
          - {}
          - {}
          - type: false
        options:
          - id: omni-shield
            name: Omni-Shield
            whenOn:
              - type: action
                name: Omni-Shield Attack
                range:
                  short: 5
                attack:
                  type: melee
                  proficient: true
                  mod: str
                damage:
                  - dieCount: 1
                    dieType: 12
                    type: bludgeoning
                notes:
                  - 'Hit: shove creature <me-distance length="5" />.'
                moreInfo:
                  model: class-features
                  id: omni-shield-1
          - id: fire-shield
            name: Fire Shield
            whenOn:
              - type: action
                name: Fire-Shield Attack
                range:
                  short: 5
                attack:
                  type: melee
                  proficient: true
                  mod: str
                damage:
                  - dieCount: 1
                    dieType: 12
                    type: bludgeoning
                notes:
                  - 'Hit: 3d10 fire damage, detonate primed conditions, and shove creature <me-distance length="5" />.'
                moreInfo:
                  model: class-features
                  id: omni-shield-1
                  additional:
                    model: class-features
                    id: omni-shield-2
          - id: cryo-shield
            name: Cryo Shield
            whenOn:
              - type: action
                name: Cryo-Shield Attack
                range:
                  short: 5
                attack:
                  type: melee
                  proficient: true
                  mod: str
                damage:
                  - dieCount: 1
                    dieType: 12
                    type: bludgeoning
                notes:
                  - 'Hit: 1d8 cold damage, shove creature <me-distance length="5" />, and DC 13 STR save or frozen.'
                moreInfo:
                  model: class-features
                  id: omni-shield-1
                  additional:
                    model: class-features
                    id: omni-shield-2
---
Starting at 14th level, you can transform your omni-shield into a fire shield or cryo shield.

__Fire Shield__. Gain all the benefits of Omni-Shield. In addition, a target hit by a Fire Shield attack takes 3d10 fire damage.
This damage detonates primed targets, but you are immune to any detonating effects.

__Cryo Shield__. Gain all the benefits of Omni-Shield. In addition, a target hit by a Cryo Shield attack takes 1d8 cold
damage and must succeed on a DC 13 Strength saving throw or become <me-condition id="frozen"/> until the end its next turn.
