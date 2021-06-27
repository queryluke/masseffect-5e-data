---
name: Collector Trooper
entries:
  features:
    - name: Barrier
      text: >-
        The collector trooper has 2 barrier ticks. When it is dealt damage,
        remove one barrier tick and reduce the damage by 1d8.
      id: barrier
    - name: Possessed Collector
      text: >-
        When the collector trooper is possessed by a harbinger it gains
        temporary hit points equal to its total hit points and 6 barrier ticks.
        While it has barrier ticks it also gains resistance to bludgeoning,
        piercing, and slashing damage.
      id: possessed-collector
    - name: Grenades
      text: >-
        The collector trooper has the following grenades equipped. It can use a
        grenade as an action.
      id: grenades
  actions:
    - name: Claw
      id: claw
    - name: Collector Web
      hit: >-
        The target is restrained by organic webbing. As an action, the
        restrained target  can make a DC 14 Strength check, bursting the webbing
        on a success. The webbing  can also be attacked and destroyed (AC 10; hp
        5; vulnerability to fire damage;  immunity to bludgeoning, poison, and
        psychic damage).
      id: collector-web
---
