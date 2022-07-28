---
rarity: uncommon
type: armor
cost: 40000
manufacturer: ariake-technologies
tags:
  - special
placement: head
availability:
  - light
  - medium
  - heavy
name: Focus Modulator
flavor: >-
  Your headwear filters out distracting movement and sounds from sources other
  than your target.
mechanics:
  - type: bonus-action
    name: Focus Modulator (mod)
    resource:
      reset: long
      max:
        type: flat
        value: 3
    range:
      short: 90
    shortDesc: >-
      Choose a creature you can see within <me-distance length="90" />. For the next minute,
      you deal an extra 1d6 damage to the target whenever you hit it with a weapon attack, and you have
      advantage on any Wisdom (Perception) or Wisdom (Survival) check you make to find it.
---
As a bonus action, you choose a creature you can see within <me-distance length="90" />. For the next minute,
you deal an extra 1d6 damage to the target whenever you hit it with a weapon attack, and you have
advantage on any Wisdom (Perception) or Wisdom (Survival) check you make to find it. You can use this feature
3 times per long rest.
