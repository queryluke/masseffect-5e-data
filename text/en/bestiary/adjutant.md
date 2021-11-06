---
name: Adjutant
entries:
  features:
    - name: Barrier
      text: >-
        The adjutant has 6 barrier ticks. When it is dealt damage, remove one
        barrier tick and reduce the damage by 1d8.
      id: barrier
    - name: Grappler
      text: >-
        The adjutant has advantage on attack rolls against any creature grappled
        by it.
      id: grappler
    - name: Innate Powercasting
      text: >-
        The adjutant's innate powercasting ability is Charisma (power save DC
        12, +4 to hit with power attacks). It can innately cast the following
        powers:
      id: innate-powercasting
  actions:
    - name: Multiattack
      text: The adjutant makes two Arm Cannon attacks.
      id: multiattack
    - name: Arm Cannon
      id: arm-cannon
    - name: Bash
      id: bash
    - name: Reaper Infection
      hit: The target's hit point maximum is reduced by an amount equal to the necrotic damage taken
      target: one organic creature that is grappled by the adjutant, incapacitated, or restrained
      id: reaper-infection
---
