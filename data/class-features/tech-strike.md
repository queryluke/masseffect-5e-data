---
level: 3
klass: soldier
subclass: engi-knight
mechanics:
  - type: global-note
    subType: action
    value: Tech Strike
    moreInfo:
      model: class-features
      id: tech-strike
name: Tech Strike
---
Starting from 3rd level, once per turn during a Melee Weapon attack, spending a minimum of 1 Tech Point, you can use your omni-tool to enhance your wielded weapon's strike, limited to your Tech Point limit.

You may only have one Tech Strike program installed to your omni-tool per short or long rest.

Like Melee Weapon attacks, this bonus damage also bypasses shields, but the damage dice from Tech Strike does not double on a critical hit. Additionally, you are immune to all detonation effects of any primes that are caused by your Tech Strike.

The Tech Strike can be upcasted, spending additional Tech Points to add 1d8 of the chosen strike's element to the attack's damage, per Tech Point spent. The total amount of Tech Points spent for Tech Strike cannot pass beyond your Tech Point Limit. Upcasting does not increase the Blazing Strike's extra damage on the creature's next turn.

### Tech Strike Programs

__Frostbite Strike:__ Your attack adds 2d8 Cold Damage, and the creature's movement is reduced by <me-distance length="15" />
for its next turn. The attack also inflicts the <me-condition id="primed" sub="cold" /> condition until the end of your next turn.

__Blazing Strike__: Your attack adds 2d8 Fire Damage, and your attack ignites the creature's wound for an extra
1d8 fire damage on its next turn. The attack also inflicts the <me-condition id="primed" sub="fire" /> condition until the end of your next turn.

__Storm Strike__: Your attack adds 2d8 Lightning Damage, then the lightning will arc to another creature within <me-distance length="5" />
of your choosing for half of the bonus lightning damage result. The attack also inflicts the <me-condition id="primed" sub="lightning" />
condition until the end of your next turn.
