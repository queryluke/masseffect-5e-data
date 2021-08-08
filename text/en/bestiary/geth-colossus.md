---
name: Geth Colossus
entries:
  features:
    - name: Repair Protocol
      text: >-
        If the geth colossus starts its turn with 0 shield points, it activates
        its repair protocol, collapsing into a compact shell. Until the start of
        its next turn, its speed becomes <me-distance length="0" override="0
        {metric}"/> and it can take no Actions, but it is immune to all damage.
        At the start of its next turn, it regains 50 shields points.
      id: repair-protocol
  actions:
    - name: Mass Accelerator Machinegun
      hit: ' The geth colossus can make a burst fire attack instead'
      id: mass-accelerator-machinegun
    - name: Siege Cannon
      text: >-
        The geth colossus targets a creature within <me-distance length='150' />
        and launches a homing projectile. The target must make a DC 20 Dexterity
        saving throw. On a failed save, the target takes 55 (10d10) radiant
        damage, or half as much on a successful one.
      id: siege-cannon
    - name: Siege Pulse
      text: >-
        The geth colossus releases a burst of electrostatic energy that disrupts
        armor biofeedback. Each creature within a <me-distance length='15' />
        radius must make a DC 20 Constitution saving throw. On a failed save, a
        creature wearing armor looses 1d4 to their Strength and Dexterity
        ability scores. This loss ends if the armor is repaired, removed, or
        replaced.
      id: siege-pulse
  legendary:
    text: >-
      The geth colossus can take 3 legendary actions, choosing from the options
      below. Only one legendary action can be used at a time and only at the end
      of another creature's turn. The geth colossus regains spent legendary
      actions at the start of its turn.
    actions:
      - name: Mass Accelerator Machinegun Attack
        text: The geth colossus makes a Mass Accelerator Machinegun attack.
        id: mass-accelerator-machinegun-attack
      - name: Siege Cannon Attack
        text: The geth colossus makes a Siege Cannon attack.
        id: siege-cannon-attack
      - name: Siege Pulse Attack
        text: The geth colossus uses its Siege Pulse
        id: siege-pulse-attack
---
