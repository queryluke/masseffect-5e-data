---
name: Nanite Combat
level: 3
klass: soldier
subclass: nanobreaker
mechanics:
  - type: attack
    name: Unarmed Strike*
    modelType:
      model: weapon
      type: melee
    range:
      short: 5
    attack:
      type: melee
      proficient: true
      bonus:
        type: modComparison
        value: [dex,str]
    damage:
      - dieCount: 1
        dieType: 8
        type: bludgeoning
        bonus:
          type: modComparison
          value: [dex,str]
    notes:
      - '* - while note wearing armor or wielding a riot shield'
    moreInfo:
      model: class-features
      id: nanite-combat
---
Also 3rd level, your hardening nanomachines let your bare handed attacks strike as hard as gunshots. Your unarmed
strikes deal 1d8 damage when you're unarmored and not using a Riot Shield. You can chose to use your Strength or your
Dexterity modifier for these attacks, but you must use the same modifier for both rolls.

You can use your bonus action when making an attack roll with unarmed strikes to make another unarmed strike.
