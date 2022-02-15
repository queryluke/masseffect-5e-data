---
name: Banshee
entries:
  features:
    - name: Barrier
      text: >-
        As an action or bonus action, the banshee gains 20 barrier ticks. When
        the banshee is dealt damage, remove one barrier tick and reduce the
        damage by 1d8.
      id: barrier
    - name: Innate Powercasting
      text: >-
        The banshee's innate powercasting ability is Wisdom (power save DC 18,
        +10 to hit with power attacks). It can innately cast the following
        powers:
      id: innate-powercasting
  actions:
    - name: Impale
      id: impale
    - name: Wail
      text: >-
        The banshee lets out a wail. Each creature within <me-distance
        length='150' /> that can hear the wail must make DC 17 Wisdom saving
        throw. On a failed save a creature is frightened for 1 minute.
      id: wail
  legendary:
    text: >-
      The banshee can take 3 legendary actions, choosing from the options below.
      Only one legendary action can be used at a time and only at the end of
      another creature's turn. The banshee regains spent legendary actions at
      the start of its turn.
    actions:
      - name: Cast a Power
        text: The banshee casts a power from its list of prepared powers, using a power slot as normal.
        id: cast-a-power
      - name: Impale Attack
        text: The banshee uses its imaple attack.
        id: impale-attack
      - name: Wail Attack
        text: The banshee uses its wail.
        id: wail-attack
  reactions:
    - name: Teleporting Dodge
      text: >-
        In response to making a Dexterity saving throw, the banshee can use its
        reaction to teleport up to <me-distance length='10' /> away. If it is
        still within the affected area, it has advantage on the saving throw.
      id: teleporting-dodge
---
