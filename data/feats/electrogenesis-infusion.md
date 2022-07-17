---
name: Electrogenesis Infusion
new: true
mechanics:
  - type: asi
    ability: con
    amount: 1
  - type: bonus-action
    resource:
      displayType: checkbox
      reset: long
      max:
        type: mod
        value: con
      id: electrogenesis
    shortDesc: Choose a weapon and roll a d6, then lose that much hp. For 1 minute, the chosen weapon deals additional 1d6 lightning.
prerequisite: Angara
prereq:
  - type: species
    limit: [angara]
---
You have trained with amplifying your electrogenesis into your weapons and can even electrify ammunition.

- Increase your Constitution score by 1, to a maximum of 20.
- As a bonus action on your turn, you may use your electrogenesis trait to charge a weapon you are wielding with
bio-electric energy, draining the electric charge from your vitality. Roll a d6 and subtract the amount rolled
from your hit points. Then, for the next minute or until you stow or drop the weapon, attacks made with the weapon
deal an additional 1d6 lightning damage.
