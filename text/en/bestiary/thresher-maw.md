---
name: Thresher Maw
entries:
  features:
    - name: Destroy Terrain
      text: >-
        When the thresher maw moves via burrowing, the ground it moves through
        becomes difficult terrain.
      id: destroy-terrain
    - name: Frightful Presence
      text: >-
        Each creature of the thresher maw's choice that is within <me-distance
        length='150' /> of the name and aware of it must succeed on a DC 22
        Wisdom saving throw or become <me-condition id='frightened' /> for 1 minute. A creature can
        repeat the saving throw at the end of each of its turns, ending the
        effect on itself on a success. If a creature's saving throw is
        successful or the effect ends for it, the creature is immune to the
        thresher maw's Frightful Presence for the next 24 hours.
      id: frightful-presence
    - name: Legendary Resistance
      text: >-
        If the thresher maw fails a saving throw, it can choose to succeed
        instead.
      id: legendary-resistance
    - name: Siege Monster
      text: The thresher maw deals double damage to objects and structures.
      id: siege-monster
  actions:
    - name: Multiattack
      text: >-
        The thresher maw can use its Frightful Presence. It then makes four
        attacks: one with its grasp, two with its tail, one with its acid spit.
        It can use its Swallow instead of its grasp.
      id: multiattack
    - name: Acid Spit
      text: >-
        The thresher maw targets a <me-distance length='15' adj /> radius within <me-distance length='150' />.
        Each creature within the area must succeed on a DC 22 Dexterity saving throw,
        taking 44 (8d10) acid damage on a failed save, or half as much on a successful one.
      id: acid-spit
    - name: Grasp
      hit: ' If the target is a creature, it is grappled (escape DC 22)'
      id: grasp
    - name: Swallow
      text: >-
        The thresher maw makes one grasp attack against a Large or smaller
        creature it is grappling. If the attack hits, the target takes the
        grasp's damage, the target is swallowed, and the grapple ends. While
        swallowed, the creature is blinded and restrained, it has total cover
        against attacks and other effects outside the thresher maw, and it takes
        56 (16d6) acid damage at the start of each of the thresher maw's turns.
        If the thresher maw takes 60 damage or more on a single turn from a
        creature inside it, the thresher maw must succeed on a DC 20
        Constitution saving throw at the end of that turn or regurgitate all
        swallowed creatures, which fall prone in a space within <me-distance
        length='10' /> of the thresher maw. If the thresher maw dies, a
        swallowed creature is no longer restrained by it and can escape from the
        corpse by using <me-distance length='30' /> of movement, exiting prone.
      id: swallow
    - name: Tail
      hit: ' If the target is a creature, it must succeed on a DC 22 Strength saving throw or be knocked prone'
      id: tail
  legendary:
    text: >-
      The thresher maw can take 3 legendary actions, choosing from the options
      below. Only one legendary action can be used at a time and only at the end
      of another creature's turn. The thresher maw regains spent legendary
      actions at the start of its turn.
    actions:
      - name: Acid Spit Attack
        text: The thresher maw makes an acid spit attack.
        id: acid-spit-attack
      - name: Move
        text: The thresher maw moves up to half its speed.
        id: move
      - name: Tail Attack
        text: The thresher maw makes a tail attack.
        id: tail-attack
---
