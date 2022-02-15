---
name: Ambushing Hunter Mode
new: true
mechanics:
  - type: action
    resource: {}
    shortDesc: >-
      Become <me-condition id="invisible" /> for 1 minute or until you make an attack or deal damage. Additionally, for the next minute,
      your movement speed increases by <me-distance length="5" /> and, once per turn, you deal {{ profBonus }}d6 additional damage
      with a weapon attack when the attack has advantage or a friendly creature is within <me-distance length="5" abbr /> of the target.
prerequisite: Geth
prereq:
  - type: species
    limit: [geth]
---
Geth were designed as lethal weapons and can activate subroutines to enhance their lethality.

As an action, you can activate Ambushing Hunter Mode, gaining the following benefits for 1 minute:

- Your movement speed increases by 2 meters.
- You become invisible until ambushing hunter mode ends or until you make an attack, cast a power, use a grenade or
mine, or fire a heavy weapon.
- Once per turn, you can deal an extra damage to one creature you hit with an attack if you have advantage on the attack
roll. The attack must be made with a melee or ranged weapon. You don't need advantage on the attack roll if
another enemy of the target is within 2 meters of it, that enemy isn't incapacitated, and you don't have
disadvantage on the attack roll. The extra damage is equal to Xd6 where X is your proficiency bonus.

You may use this feat once per long rest.
