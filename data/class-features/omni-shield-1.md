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
        - type: resource
          id: omni-shield
          method: add
          value:
            type: flat
            value: 1
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
            - 'Hit: shove creature <me-distance length="5" />'
          moreInfo:
            model: class-features
            id: omni-shield-1
    resource:
      reset: short
      max:
        type: flat
        value: 1
      id: omni-shield
name: Omni-Shield
---
Starting at 3rd level, you've mastered the omni-shield. As a bonus action, create a large kinetic shield out
of your omni-tool that lasts one minute. You can end Omni-shield at any point as a free action.

While Omni-Shield is deployed you cannot use another omni-* melee weapon. Instead, gain the following:

* +1 AC.
* If a creature within <me-distance length="5" /> of you is attacked, you may use your reaction to impose disadvantage on that attack.
* As an attack action, you may make a melee attack roll. On a hit, deal 1d12 bludgeoning damage. You may shove a
hit creature backward <me-distance length="5" />.

<br>

Once you use this feature, you must finish a short or long rest before you can use it again.
