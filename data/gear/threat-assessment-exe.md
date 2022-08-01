---
rarity: rare
type: omni_tool_program
cost: 0
weight: 0
subType: ''
name: Threat_Assessment.exe
installation: true
equippable: true
mechanics:
  - type: ac
    bonus:
      type: flat
      value: 1
  - type: saving-throw
    value: [str,dex,con,int,wis,cha]
    effect:
      type: bonus
      bonus:
        type: flat
        value: 1
---
Your omni-tool powers a specialized VI whose purpose is to detect incoming threats and identify them for the user. This
data appears as audio and visual warnings on the user's HUD and gives the user +1 to their AC and all Saving Throws.
