---
rarity: spectre
type: weapon
cost: 52000
manufacturer: ''
tags:
  - augmentation
placement: ammo
availability:
  - assault_rifle
  - heavy_pistol
  - smg
  - shotgun
  - sniper_rifle
name: Beam Emitter
flavor: >-
  The weapon now fires a sustained energy beam that accurately deals rapid
  damage to the target.
mechanics:
  - type: attack-augment
    attackLimit:
      model: weapon
    augmentTypes: [hit]
    bonus:
      type: flat
      value: 2
  - type: adjust-weapon-props
    remove: [burst-fire, double-tap]
---
+2 on ranged attack rolls made with this weapon. It loses the Burst Fire and Double Tap properties and its damage type
becomes radiant. After successfully hitting a target with a ranged attack with this weapon, you may use your bonus
action to begin targeting. Until the targeting condition ends, you deal weapon damage to the target at each of the
following combat phases: the end of your turn, the beginning of the target's turn, the end of the target's turn, and
the beginning of your turn. Each time you deal damage, remove 1 heat. In addition to standard targeting rules, this
targeting condition can end when this weapon's heat becomes 0, when the targeted creature gains three-quarter or
full cover, the target uses an action and succeeds on an opposed Dexterity check (you may add your proficiency bonus
if you are proficient with this weapon type), or you use a bonus action on your turn to end the condition.
