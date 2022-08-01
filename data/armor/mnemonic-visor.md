---
placement: head
type: light
cost: 21250
manufacturer: hahne-kedar
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/e/ea/ME3_mnemonic_visor.png/revision/latest/scale-to-width-down/115?cb=20120312191649
tags:
  - extra_damage
andromeda: false
set: false
rarity: uncommon
name: Mnemonic Visor
flavor: >-
  Relatively new to the market, the Mnemonic Visor is difficult to find outside
  Alliance space. Intended for biotic specialists, this headpiece plugs into the
  rest of the user's suit, gathering data so it can adapt to the wearer's
  tactics. It boosts biotic performance at critical moments to allow a soldier
  to perform with greater power than normally possible.
mechanics:
  - type: attack-augment
    attackLimit:
      model: power
      modelTypes: [biotic]
    augmentTypes: [damage]
    rerollIfLessThan: 2
---
- When you roll a 1 on a damage die for an attack you make with a biotic power, you can reroll the die
and must use the new roll, even if the new roll is a 1.
