---
level: 13
klass: infiltrator
subclass: devotee-of-the-old-ways
mechanics:
  - type: other
    name: Zeal
    shortDesc: >-
      During a short rest, choose Kalahira, Arashu, or Amonkira and replace the effect of their Prayer with the effect of their Zealous Prayer.
    toggle:
      id: devotee-zealous-prayer
      whenOn:
        - type: resource
          id: devotee-zealous-prayer-resource
          method: add
          value:
            type: flat
            value: 1
      options:
        - id: devotee-zealous-prayer-kalahira
          name: Kalahira
          whenOn:
            - type: augment
              value:
                model: infiltrator
                id: prayer
                limit: [bonus-action]
                instances: [0]
              merge:
                type: reaction
                name: Zealous Prayer (Kalahira)
                shortDesc: >-
                  When an ally within <me-distance length="25" /> of you loses their last hit point, they are reduced to to 1 hit point instead.
                  This effect only works once per long rest per ally.
                moreInfo:
                  model: class-features
                  id: zeal
        - id: devotee-zealous-prayer-arashu
          name: Arashu
          whenOn:
            - type: augment
              value:
                model: infiltrator
                id: prayer
                limit: [bonus-action]
                instances: [1]
              merge:
                type: reaction
                name: Zealous Prayer (Arashu)
                shortDesc: >-
                  When an ally within <me-distance length="25" /> suffers a hit from an attack roll, grant them a
                  {{ wisMod }} bonus to their AC. This can only work once per short rest per ally.
                moreInfo:
                  model: class-features
                  id: zeal
        - id: devotee-zealous-prayer-amonkira
          name: Amonkira
          whenOn:
            - type: augment
              value:
                model: infiltrator
                id: prayer
                limit: [bonus-action]
                instances: [2]
              merge:
                type: reaction
                name: Zealous Prayer (Amonkira)
                shortDesc: >-
                  When you succeed at an attack roll, deal 1d6+{{level}} bonus damage to your target.
                  This can only work {{ wisMod }} times per short rest.
                resource:
                  reset: short
                  max:
                    type: mod
                    value: wis
                damage:
                  - dieCount: 1
                    dieType: 6
                    type: null
                    bonus:
                      type: level
                moreInfo:
                  model: class-features
                  id: zeal
    resource:
      id: devotee-zealous-prayer-resource
      reset: short
name: Zeal
---
At 13th level, your prayers have become more sincere, and the gods grant you more benefits for them. During a short
rest, you can chose one of the three gods you worship - Amonkira, Arashu or Kalahira - to become your focus, which
strengthens the effects of their respective Prayers.

__Kalahira__: The prayers of a zealous devotee of the Goddess of the Afterlife are a powerful thing.
When an ally within <me-distance length="25" /> of you loses their last hit point, you can spend your reaction to
cause them to instead be reduced to 1 hit point. This effect only works once per long rest per ally.

__Arashu__: The zealous prayers of Arashu nurture and grow your companions to let them reach new heights. When an ally
within <me-distance length="25" /> suffers a hit from an attack roll, you can spend your reaction to grant them a
bonus to AC equal to your Wisdom modifier. This can only work once per short rest per ally.

__Amonkira__: Amonkira's prayers make you an even more effective hunter, striking fear into your enemies.
When you succeed at an attack roll, you can use your reaction to cause bonus damage to your target equal to
1d6+your level. This can only work a number of times equal to your Wisdom modifier per short rest.

The prayer you focused on becomes the Zealous prayer, and you cannot benefit from the effects of the normal prayer
for that god while you have the effects of Zeal on them.
