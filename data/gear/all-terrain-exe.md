---
rarity: uncommon
type: omni_tool_program
cost: 0
weight: 0
subType: ''
name: All_Terrain.exe
installation: true
equippable: true
mechanics:
  - type: other
    shortDesc: >-
      When on, climbing and swimming don't cost you extra movement, and you gain a +5 bonus to Strength
      (Athletics) checks made to climb or swim.
    toggle:
      id: all-terrain-exe
      whenOn:
        - type: skill-check
          value: athletics
          effect:
            type: advantage
            note: 'to climb or swim'
---
You can spend a free action to flash forge hard light enhancements for your armor, such as climbing spikes
on your boots and gloves, and flexible fins on your boots. While running this program, climbing and swimming don't cost
you extra movement, and you gain advantage on Strength (Athletics) checks made to climb or swim.
