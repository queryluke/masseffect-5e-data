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
          - type: false
        options:
          - id: omni-shield
            name: Omni-Shield
            whenOn:
              - type: attack
                name: Omni-Shield Attack
                modelType:
                  model: weapon
                  type: melee
                range:
                  short: 5
                attack:
                  type: melee
                  proficient: true
                  mod: false
                  bonus:
                    type: powercastingMod
                    value: sentinel
                damage:
                  - dieCount: 1
                    dieType: 12
                    type: bludgeoning
                    bonus:
                      type: powercastingMod
                      value: sentinel
                notes:
                  - 'Hit: shove creature <me-distance length="5" />.'
                moreInfo:
                  model: class-features
                  id: omni-shield-1
          - id: fire-shield
            name: Fire Shield
            whenOn:
              - type: attack
                name: Fire-Shield Attack
                modelType:
                  model: weapon
                  type: melee
                range:
                  short: 5
                attack:
                  type: melee
                  proficient: true
                  mod: false
                  bonus:
                    type: powercastingMod
                    value: sentinel
                damage:
                  - dieCount: 4
                    dieType: 10
                    type: fire
                    bonus:
                      type: powercastingMod
                      value: sentinel
                notes:
                  - 'Hit: detonates'
                moreInfo:
                  model: class-features
                  id: omni-shield-1
                  additional:
                    - model: class-features
                      id: omni-shield-2
          - id: cryo-shield
            name: Cryo Shield
            whenOn:
              - type: attack
                name: Cryo-Shield Attack
                modelType:
                  model: weapon
                  type: melee
                range:
                  short: 5
                attack:
                  type: melee
                  proficient: true
                  mod: false
                  bonus:
                    type: powercastingMod
                    value: sentinel
                dc:
                  save: str
                  bonus:
                    type: powercastingMod
                    value: sentinel
                damage:
                  - dieCount: 2
                    dieType: 8
                    type: cold
                    bonus:
                      type: powercastingMod
                      value: sentinel
                notes:
                  - 'Hit: DC {{ dc }} STR save or frozen.'
                moreInfo:
                  model: class-features
                  id: omni-shield-1
                  additional:
                    - model: class-features
                      id: omni-shield-2
---
Starting at 14th level, you can transform your omni-shield into a fire shield or cryo shield.

__Fire Shield__.
* +1 AC.
* If a creature within <me-distance length="5" /> of you is attacked, you may use your reaction to impose disadvantage on that attack.
* You can make a melee weapon attack with your fire shield. You are proficient with this attack and add your powercasting modifier to the attack and damage rolls.
On a hit, it deals 4d10 fire damage and detonates primed targets.

__Cryo Shield__.
* +1 AC.
* If a creature within <me-distance length="5" /> of you is attacked, you may use your reaction to impose disadvantage on that attack.
* You can make a melee weapon attack with your cryo shield. You are proficient with this attack and add your powercasting modifier to the attack and damage rolls.
On a hit, it deals 2d8 cold damage and detonates primed targets and the target must succeed on a Strength saving throw against your powercasting DC or become <me-condition id="frozen"/> until the end its next turn.
