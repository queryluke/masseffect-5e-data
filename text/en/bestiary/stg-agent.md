---
name: Salarian STG Agent
entries:
  features:
    - name: Surprise Attack
      text: >-
        If the agent surprises a creature and hits it with an attack during the
        first round of combat, the target takes an extra 10 (3d6) damage from
        the attack.
      id: surprise-attack
    - name: Innate Powercasting
      text: >-
        The salarian stg agent's innate powercasting ability is Intelligence
        (power save DC 12, +4 to hit with power attacks). It can innately cast
        the following powers:
      id: innate-powercasting
    - name: Grenades
      text: >-
        The salarian stg agent has the following grenades equipped. It can use a
        grenade as an action.
      id: grenades
  actions:
    - name: Multiattack
      text: The agent makes 2 attacks with its Scorpion.
      id: multiattack
    - name: Explosive Decoy
      text: >-
        As an action, the agent detonates its active Decoy. Each creature within
        <me-distance length='10' /> of the decoy must make a Dexterity saving
        throw. On a failed save, a creature takes 3d6 thunder damage or half as
        much on a successful one.
      id: explosive-decoy
---
