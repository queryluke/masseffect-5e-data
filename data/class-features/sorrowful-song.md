---
level: 17
klass: musician
subclass: operatic
mechanics:
  - type: action
    name: Sorrowful Song
    resource:
      id: musicians-inspiration
      min: 1
      reset: off
      max:
        type: mod
        value: cha
    dc:
      base: 8
      save: cha
      bonus:
        type: powercastingMod
        value: musician
    shortDesc: >-
      You can spend one use of Inspiration as an action to target an enemy. Do not roll the Inspiration die.
      When you use this ability, the enemy must succeed on a DC {{dc}} Charisma saving throw or be
      <me-condition id="stunned" /> until the end of your next round.
name: Sorrowful Song
---
At 17th level, you can spend one use of Inspiration as an action to target an enemy. Do not roll the Inspiration die.
When you use this ability, the enemy must succeed a Charisma saving throw of DC equal to your Powercasting DC or be
<me-condition id="stunned" /> until the end of your next round.
