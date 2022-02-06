---
name: Bite
species:
  - vorcha
mechanics:
  - type: attack
    range:
      short: 5
    attack:
      proficient: true
      mod: str
    damage:
      - dieCount: 1
        dieType: 6
        mod: str
        type: piercing
    moreInfo: false
---
Your fanged maw is a natural weapon, which you can use to make unarmed strikes. If you hit with it, you deal piercing
damage equal to 1d6 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.
