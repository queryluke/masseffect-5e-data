---
rarity: rare
type: omni_tool_program
cost: 0
weight: 0
subType: ''
name: Double_Time.exe
installation: true
equippable: true
mechanics:
  - type: bonus-action
    resource:
      reset: long
    shortDesc: >-
      walking speed increases by <me-distance length="12" />, and any attack of opportunity made against you is made
      at disadvantage. This effect lasts 10 minutes.
    toggle:
      id: double-time-exe
      whenOn:
        - type: speed-bonus
          value: [walk]
          bonus:
            type: flat
            value: 30
---
While this program is Active, you can use a bonus action to re-route a third of your omni-tool's processing power to
your armor's mobility servos, dramatically increasing your speed. Your walking speed increases by <me-distance length="12" />,
and any attack of opportunity made against you is made at disadvantage. This effect lasts 10 minutes, and can only be activated once per
long rest.

(this re-route wasn't intended by any armor manufacturer, the recovery time allows the omni-tool to scan and repair
the abuse electronics within the armor.)
