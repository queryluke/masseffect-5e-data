---
name: Geth Armature
entries:
  features:
    repair-protocol:
      name: Repair Protocol
      text: >-
        If the geth armature starts its turn with 0 shield points, it activates
        its repair protocol, collapsing into a compact shell. Until the start of
        its next turn, its speed becomes <me-distance length="0" override="0
        {metric}"/> and it can take no Actions, but it is immune to all damage.
        At the start of its next turn, it regains 50 shields points.
  actions:
    mass-accelerator-machinegun:
      name: Mass Accelerator Machinegun
      hit: ' The geth armature can make a burst fire attack instead'
    siege-cannon:
      name: Siege Cannon
      text: >-
        The geth armature targets a creature within <me-distance length='150' />
        and launches a homing projectile. The target must make a DC 18 Dexterity
        saving throw. On a failed save, the target takes 55 (10d10) radiant
        damage, or half as much on a successful one.
    siege-pulse:
      name: Siege Pulse
      text: >-
        The geth armature releases a burst of electrostatic energy that disrupts
        armor biofeedback. Each creature within a <me-distance length='15' />
        radius must make a DC 18 Constitution saving throw. On a failed save, a
        creature wearing armor looses 1d4 to their Strength and Dexterity
        ability scores. This loss ends if the armor is repaired, removed, or
        replaced.
---
