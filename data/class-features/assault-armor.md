---
level: 3
klass: sentinel
subclass: juggernaut
name: Assault Armor
mechanics:
  - type: augment
    value:
      model: sentinel
      id: tech-armor
      limit: [bonus-action]

    merge:
      moreInfo:
        additional:
          - model: class-features
            id: assault-armor
      range:
        short: 0
        aoe:
          type: sphere
          size: 60
      dc:
        base: 8
        proficient: true
        save: wis
        bonus:
          type: powercastingMod
          value: sentinel
      shortDesc: >-
        When active, each hostile creature within range must succeed on a DC {{ dc }} Wisdom
        saving throw (advantage for synthetic creatures) or be compelled to attack you while tech armor is active. Creatures make a new save when dealt damage from a source other than you.
---
Starting at 3rd level, your Tech Armor is rigged for keeping the action on you. When
you activate tech armor, you project a distracting holographic image (your choice) and each hostile creature within <me-distance length="60" />
that can see you must make a Wisdom saving throw (DC = 8 + proficiency bonus + powercasting modifier). On a failure,
a creature is compelled to attack you while your Tech Armor is active. A creature that is compelled to attack you always
targets you when it makes a weapon or power attack.

Each time a creature that is compelled to attack you takes damage from a source other than you, it makes a new Wisdom saving
throw against the power. If the saving throw succeeds, the creature is no longer compelled to attack you and is immune to
Assault Armor for the next 24 hours.

Synthetic creatures have advantage on the Wisdom saving throw.
