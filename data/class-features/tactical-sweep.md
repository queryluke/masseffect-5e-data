---
level: 3
klass: soldier
subclass: migrant-marine
mechanics:
  - type: powers
    value: tactical-scan
    klass: soldier
    merge:
      notes:
        - 'Targets up to {{ intMod }} targets'
  - type: bonus-action
    shortDesc: >-
      Choose a creature targeted by your tactical scan and receive the bonuses of the power against that creature.
name: Tactical Sweep
---
At 3rd level, you learn the Tactical Scan combat power. If you already know the Tactical Scan combat power, you
instead learn one advancement for it. Instead of only one target, you can target up to your Intelligence modifier
enemies when you use Tactical Scan, and you can make your Insight check using your Intelligence modifier for this power
only. You only receive your bonuses from Tactical Scan against one enemy at a time, but you can switch
who that enemy is as a bonus action, without the need to recast the power.
