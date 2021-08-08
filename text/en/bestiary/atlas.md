---
name: Atlas
entries:
  features:
    - name: Grenades
      text: >-
        The atlas has the following grenades equipped. It can use a grenade as
        an action.
      id: grenades
  actions:
    - name: Smash
      id: smash
    - name: Mass Accelerator Cannon
      id: mass-accelerator-cannon
    - name: Rocket Launcher
      text: >-
        The atlas targets an area within <me-distance length='150' />. Each
        creature within <me-distance length='15' /> of the target must make a DC
        18 Dexterity saving throw. On a failed save, a creature takes 52 (8d12)
        thunder damage or half as much damage on a successful one.
      id: rocket-launcher
  legendary:
    text: >-
      The atlas can take 3 legendary actions, choosing from the options below.
      Only one legendary action can be used at a time and only at the end of
      another creature's turn. The atlas regains spent legendary actions at the
      start of its turn.
    actions:
      - name: Eject
        text: The pilot of the Atlas ejects, landing in an unoccupied space within <me-distance length='100' />. The pilot is an Assault Trooper. The Atlas then self-destructs. Each creature within a <me-distance length="15" adj /> radius must make a DC 18 Dexterity saving throw. On a failed save, a creature takes 39 (6d12) thunder damage or half as much on a successful one.
        id: eject
      - name: Mass Accelerator Cannon Attack
        text: The atlas makes a Mass Accelerator Cannon attack.
        id: mass-accelerator-cannon-attack
      - name: Smash Attack
        text: The atlas makes a Smash attack.
        id: smash-attack
---
