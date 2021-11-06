---
name: YMIR Mech
entries:
  features:
    - name: Post-mortem Explosion
      text: >-
        When the YMIR mech is reduced to 0 hit points, it self-destructs. Each
        creature within a <me-distance length='15' adj />-radius sphere must
        make a DC 15 Dexterity saving throw. On a failed save, a creature takes
        22 (4d10) thunder damage or half as much on a successful one.
      id: post-mortem-explosion
  actions:
    - name: Mass Accelerator Machinegun
      hit: ' The YMIR mech can make a burst fire attack instead'
      id: mass-accelerator-machinegun
    - name: Rocket Launcher
      text: >-
        The YMIR mech targets an area within <me-distance length='150' />. Each
        creature within <me-distance length='15' /> of the target must make a DC
        18 Dexterity saving throw. On a failed save, a creature takes 52 (8d12)
        thunder damage or half as much damage on a successful one.
      id: rocket-launcher
---
