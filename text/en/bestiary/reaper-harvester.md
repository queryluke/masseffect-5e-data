---
name: Reaper Harvester
entries:
  actions:
    - name: Multiattack
      text: The reaper harvester makes two harvester cannon attacks.
      id: multiattack
    - name: Harvester Cannon
      text: >-
        The reaper harvester targets a location within <me-distance length='90'
        />. Each creature within a <me-distance length='15' /> radius must make
        a DC 19 Dexterity saving throw. On a failed save a creature takes 3d10 force
        and 3d10 thunder damage, or half as much damage on a successful one.
      id: harvester-cannon
  legendary:
    text: >-
      The reaper harvester can take 3 legendary actions, choosing from the
      options below. Only one legendary action can be used at a time and only at
      the end of another creature's turn. The reaper harvester regains spent
      legendary actions at the start of its turn.
    actions:
      - name: Detect
        text: The reaper harvester makes a Wisdom (Perception) check.
        id: detect
      - name: Harvester Cannon Attack
        text: The reaper harvester makes a harvester cannon attack.
        id: harvester-cannon-attack
      - name: Spawn Husks
        text: The reaper harvester releases 1d10 Husks from its body.
        id: spawn-husks
---
