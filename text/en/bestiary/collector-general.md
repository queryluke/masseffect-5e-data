---
name: Collector General
entries:
  features:
    - name: Barrier
      text: >-
        The collector general has 20 barrier ticks. When it is dealt damage,
        remove one barrier tick and reduce the damage by 1d8.
      id: barrier
    - name: Powercasting
      text: >-
        The collector general is a 12th-level powercaster. Its powercasting
        ability is Wisdom (power save DC 16, +8 to hit with powers). The
        collector general has the following powers:
      id: powercasting
  actions:
    - name: Bash
      id: bash
  legendary:
    text: >-
      The collector general can take 3 legendary actions, choosing from the
      options below. Only one legendary action can be used at a time and only at
      the end of another creature's turn. The collector general regains spent
      legendary actions at the start of its turn.
    actions:
      - name: Assume Control
        text: The harbinger targets a friendly collector that is not incapacitated. The target creature becomes possessed and gains the benefits listed on its monster sheet. The harbinger can only assume control of one creature at a time. While it is assuming control, its speed becomes 0, attacking creatures have advantage, it automatically fails Strength and Dexterity saving throws, and it cannot cast any powers. If the harbinger is incapacitated, assume control ends. The harbinger can use its bonus action to end assume control. As a result, the targeted creature loses all benefits including any temporary hit points and barrier ticks.
        id: assume-control
      - name: Bash Attack
        text: The collector general makes one bash attack.
        id: bash-attack
      - name: Cast a Power
        text: The collector general casts a power from its list of prepared powers, using a power slot as normal.
        id: cast-a-power
---
