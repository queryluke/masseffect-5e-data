---
level: 3
klass: tracker
subclass: outrider
mechanics:
  - type: global-note
    subType: action
    value: 'Ride On (1d8)'
    moreInfo:
      model: class-features
      id: ride-on
  - type: initiative
    effect:
      type: bonus
      bonus:
        type: mod
        value: cha
name: Ride On!
---
You and your beast are of one mind, and perfectly adjusted to each others strengths, weaknesses, and weights. Starting
at 3rd level, you gain the ability to mount creatures that are the same size as you. If the Beast casts a power that
moves it, such as Charge, while its tracker is mounted atop him, the Tracker is moved with it to its new location
without being dismounted.

While mounted, you gain the following benefits:

- You may add your Charisma to your initiative checks.
- When you use a bonus action to order your beast to take the Dash action, you may still command your beast to attack.
- Both you and your beast's attack deal an additional 1d8 damage when hitting an attack. This damage occurs once per turn,
per creature. The damage increases to 2d8 at level 7, and 3d8 at level 14.
