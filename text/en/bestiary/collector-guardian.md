---
name: Collector Guardian
entries:
  features:
    - name: Barrier
      text: >-
        The collector guardian has 2 barrier ticks. When it is dealt damage,
        remove one barrier tick and reduce the damage by 1d8.
      id: barrier
    - name: Possessed Collector
      text: >-
        When the collector guardian is possessed by a harbinger it gains
        temporary hit points equal to its total hit points and 6 barrier ticks.
        While it has barrier ticks it also gains resistance to bludgeoning,
        piercing, and slashing damage.
      id: possessed-collector
    - name: Warp Ammo
      text: >-
        Successful ranged attacks on a target with an active barrier will strip
        away 2 barrier ticks and reduce the damage reduction by half. Warp ammo
        can detonate primed targets.
      id: warp-ammo
  actions:
    - name: Multiattack
      text: The collector guardian makes two Collector Assault Rifle attacks.
      id: multiattack
    - name: Weapon Bash
      id: weapon-bash
    - name: Hex Shield
      text: >-
        As a bonus action, the collector guardian generates a <me-distance
        length='5' /> tall and wide, hexagon-shaped shield with 5AC and 50
        shield points which offers full-cover.
      id: hex-shield
---
