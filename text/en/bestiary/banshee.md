---
name: Banshee
entries:
  features:
    barrier:
      name: Barrier
      text: 'TODO: Write barrier text'
    innate-powercasting:
      name: Innate Powercasting
      text: >-
        The banshee's innate powercasting ability is Charisma (power save DC 18,
        +10 to hit with power attacks). It can innately cast the following
        spells:
  actions:
    impale:
      name: Impale
    wail:
      name: Wail
      text: >-
        The banshee lets out a wail. Each creature within <me-distance
        length='150' /> that can hear the wail must make DC 17 Wisdom saving
        throw. On a failed save a creature is frightened for 1 minute.
  legendary:
    text: >-
      The banshee can take 3 legendary actions, choosing from the options below.
      Only one legendary action can be used at a time and only at the end of
      another creature's turn. The banshee regains spent legendary actions at
      the start of its turn.
    actions:
      cast-a-power:
        name: Cast a Power
        text: The banshee casts a power from its list of prepared powers, using a power slot as normal.
      impale-attack:
        name: Impale Attack
        text: The banshee uses its imaple attack.
      wail-attack:
        name: Wail Attack
        text: The banshee uses its wail.
  reactions:
    teleporting-dodge:
      name: Teleporting Dodge
      text: >-
        In response to making a Dexterity saving throw, the banshee can use its
        reaction to teleport up to <me-distance length='10' /> away. If it is
        still within the affected area, it has advantage on the saving throw.
---
