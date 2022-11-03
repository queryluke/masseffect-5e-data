---
level: 3
klass: sentinel
subclass: guardian
mechanics:
  - type: bonus-action
    name: Activate Omni-Shield
    toggle:
      id: omni-shield
      whenOn:
        - type: ac
          bonus:
            type: flat
            value: 1
        - type: reaction
          name: Omni-Shield Reaction
          shortDesc: >-
            Impose disadvantage on an attack roll that targets a creature within <me-distance length="5" /> of you.
          moreInfo:
            model: class-features
            id: omni-shield-1
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
            - 'Hit: shove creature <me-distance length="5" />'
          moreInfo:
            model: class-features
            id: omni-shield-1
name: Omni-Shield
---
Starting at 3rd level, you've mastered the omni-shield. As a bonus action, create a large kinetic shield out
of your omni-tool. You can end Omni-shield at any point as a free action.

While Omni-Shield is deployed you cannot use another omni-* melee weapon. Instead, gain the following:

* +1 AC.
* If a creature within <me-distance length="5" /> of you is attacked, you may use your reaction to impose disadvantage on that attack.
* You can make a melee weapon attack with your omni-shield. You are proficient with this attack and add your powercasting modifier to the attack and damage rolls.
On a hit, it deals 1d12 bludgeoning damage and you may shove the creature <me-distance length="5" />.
