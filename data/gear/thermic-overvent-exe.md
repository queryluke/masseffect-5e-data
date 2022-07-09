---
mechanics:
  - type: action
    resource:
      reset: long
    attack:
      type: ranged
      proficient: false
      mod: dex
      bonus:
        type: flat
        value: 5
    damage:
      - dieCount: 2
        dieType: 6
        type: fire
    range:
      short: 600
    shortDesc: >-
      You create three fire rays from your outstretched hand, each with a range of <me-distance length="600" />. You
      can hurl them at one target or several. Make a ranged attack for each ray. You are not proficient with the attack
      but gain a +5 bonus to the roll. On a hit, the target takes  2d6 fire damage.
rarity: uncommon
type: omni_tool_program
cost: 0
weight: 0
subType: ''
name: Thermic_Overvent.exe
installation: false
equippable: true
---
You can use an action to overheat every heat-generating element within your omni-tool, overriding
safety protocols and using the omni-gel as propellant. You create three fire rays from your outstretched hand, each
with a range of <me-distance length="600" />. You can hurl them at one target or several. Make a ranged power attack
for each ray. On a hit, the target takes 2d6 fire damage. When you make the attacks, make them with a modifier of +5
to the attack roll. The omni-tool then needs time to compensate and repair itself, rendering this program inoperative
until the end of a long rest.

__Unstable__: When you acquire this program, it can be used 1d6 times before the code becomes too unstable to use.
