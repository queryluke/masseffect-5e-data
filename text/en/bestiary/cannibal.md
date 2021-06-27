---
name: Cannibal
entries:
  features:
    - name: Pack Tactics
      text: >-
        The cannibal has advantage on an attack roll against a creature if at
        least one of the cannibal's allies is within <me-distance length='5' />
        of the creature and the ally isn't incapacitated.
      id: pack-tactics
    - name: Grenades
      text: >-
        The cannibal has the following grenades equipped. It can use a grenade
        as an action.
      id: grenades
  actions:
    - name: Multiattack
      text: The cannibal makes 2 Arm Cannon attacks.
      id: multiattack
    - name: Arm Cannon
      id: arm-cannon
    - name: Bash
      id: bash
    - name: Cannibalize
      text: >-
        The cannibal spends its action consuming a creature with 0 hit points
        within <me-distance length='5' />. At the start of its next turn it
        gains 5 AC and 1d8 hit points and the consumed creature (including all
        of its weapons, armor, and items) is completely dissolved. If the
        creature is a player character, it dies. Cannibals prefer to use their
        cannibalize action over any other.
      id: cannibalize
---
