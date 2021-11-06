---
name: N7 Demolisher
entries:
  features:
    - name: N7 Training
      text: The N7 demolisher has advantage on its first attack roll each turn.
      id: n7-training
    - name: Grenades
      text: >-
        The N7 demolisher has the following grenades equipped. It can use a
        grenade as an action.
      id: grenades
  actions:
    - name: Multiattack
      text: >-
        The N7 demolisher makes three weapon attacks or two weapon attacks and
        uses one grenade.
      id: multiattack
    - name: Repair
      text: >-
        The N7 demolisher uses its action to repair a friendly, synthetic target
        within <me-distance length='5' /> for 2d8 hit points.
      id: repair
    - name: Deploy Shield Pylon
      text: >-
        The N7 demolisher deploys a Shield Pylon to an unoccupied space within
        <me-distance length='5' />. The pylon has AC 10, 25 hit points and
        provides half cover. At the end of the N7 demolisher's turn, any friendly
        creature within <me-distance length='10' /> of the pylon gains 2 shield
        points. Shield points gained this way cannot exceed the creatures
        maximum shield points.
      id: deploy-shield-pylon
---
