---
name: Cannibal
entries:
  features:
    pack-tactics:
      name: Pack Tactics
      text: >-
        The cannibal has advantage on an attack roll against a creature if at
        least one of the cannibal's allies is within <me-distance length='5' />
        of the creature and the ally isn't incapacitated.
    grenades:
      name: Grenades
      text: >-
        The cannibal has the following grenades equipped. It can use a grenade
        as an action.
  actions:
    multiattack:
      name: Multiattack
      text: The cannibal makes 2 Arm Cannon attacks.
    arm-cannon:
      name: Arm Cannon
    bash:
      name: Bash
    cannibalize:
      name: Cannibalize
      text: >-
        The cannibal spends its action consuming a creature with 0 hit points
        within <me-distance length='5' />. At the start of its next turn it
        gains 5 AC and 1d8 hit points and the consumed creature (including all
        of its weapons, armor, and items) is completely dissolved. If the
        creature is a player character, it dies. Cannibals prefer to use their
        cannibalize action over any other.
---