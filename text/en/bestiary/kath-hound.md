---
name: Kath Hound
entries:
  features:
    - name: Keen Hearing and Smell
      text: >-
        The kath hound has advantage on Wisdom (Perception) checks that rely on
        hearing or smell.
      id: keen-hearing-and-smell
    - name: Pack Tactics
      text: >-
        The kath hound has advantage on an attack roll against a creature if at
        least one of the kath hound's allies is within <me-distance length='5'
        /> of the creature and the ally isn't incapacitated.
      id: pack-tactics
    - name: Grappler
      text: >-
        The kath hound has advantage on attack rolls against any creature
        grappled by it.
      id: grappler
  actions:
    - name: Bite
      hit: ' If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone'
      id: bite
    - name: Maul
      miss: >-
        Hit or miss, if the target is a creature, it must succeed on a DC 12
        Dexterity saving throw or be knocked prone and is grappled. A creature
        takes half damage on a successful saving throw
      id: maul
---
