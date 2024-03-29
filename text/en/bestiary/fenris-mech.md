---
name: FENRIS Mech
entries:
  features:
    - name: Aggressive
      text: >-
        As a bonus action, the fenris mech can move up to its speed toward a
        hostile creature that it can see.
      id: aggressive
    - name: Post-mortem Explosion
      text: >-
        If damage reduces the FENRIS mech to 3 or fewer hit points, it
        deactivates its primary systems and remains stationary. Any additional
        damage done to the mech while in this state causes it to explode. Any
        creature within a <me-distance length='10' adj />-radius sphere must
        succeed on a DC 13 Constitution saving throw or take 7 (3d4) lightning
        damage.
      id: post-mortem-explosion
    - name: Innate Powercasting
      text: >-
        The fenris mech's innate powercasting ability is Intelligence (power
        save DC 10, +2 to hit with power attacks). It can innately cast the
        following powers:
      id: innate-powercasting
  actions:
    - name: Pounce
      hit: ' If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone'
      id: pounce
    - name: Stun
      hit: ' If the target is a creature, it must succeed on a DC 13 Constitution saving throw or be stunned until the end of its next turn'
      id: stun
---
