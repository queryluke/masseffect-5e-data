---
rarity: uncommon
type: omni_tool_program
cost: 0
weight: 0
subType: ''
name: Active_Camo.exe
installation: true
equippable: true
mechanics:
  - type: other
    shortDesc: >-
      When on, Wisdom (Perception) checks made to see you have disadvantage and you have
      advantage on Dexterity (Stealth) checks made to hide.
    toggle:
      id: active-camo-exe
      whenOn:
        - type: skill-check
          value: stealth
          effect:
            type: advantage
            note: 'to hide'
---
The user's omni-tool diverts energy to coat their armor in color-adaptive hard light, using
data obtained from the suit's micro-sensors. While not making the wearer truly invisible, this adaptive camouflage helps
the user blend into any environment. Wisdom (Perception) checks made to see you have disadvantage and you have
advantage on Dexterity (Stealth) checks made to hide. You can use a free action to toggle this effect on or off.
