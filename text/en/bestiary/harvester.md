---
name: Harvester
entries:
  features:
    frightful-presence:
      name: Frightful Presence
      text: >-
        Each creature of the harvester's choice that is within <me-distance
        length='150' /> of the name and aware of it must succeed on a DC 19
        Wisdom saving throw or become <me-condition id="frightened" /> for 1 minute. A creature can
        repeat the saving throw at the end of each of its turns, ending the
        effect on itself on a success. If a creature's saving throw is
        successful or the effect ends for it, the creature is immune to the
        harvester's Frightful Presence for the next 24 hours.
    drop-klixen:
      name: Drop Klixen
      text: >-
        If the harvester is within a region that contains Klixen, it 
        begins the fight by dropping 1d10 Klixen in a
        <me-distance length='15' /> by <me-distance length='50' /> area.
  actions:
    multiattack:
      name: Multiattack
      text: >-
        The harvester can use its Frightful Presence. It then makes three
        attacks: one with its acid spit and two with its stomp.
    stomp:
      name: Stomp
    acid-spit:
      name: Acid Spit
      text: >- 
        The harvester targets a <me-distance length='15' /> radius 
        within <me-distance length='150' /> and launches a glob of acid that coats the area. 
        Each creature within the area must succeed on a DC 19 Dexterity saving throw, 
        taking 44 (8d10) acid damage on a failed save, or half as much on a successful one. 
        Until the end of the harvester's next turn, each creature that enters the area or 
        ends its turn there must also make the saving throw.
  legendary:
    text: >-
      The harvester can take 3 legendary actions, choosing from the options
      below. Only one legendary action can be used at a time and only at the end
      of another creature's turn. The harvester regains spent legendary actions
      at the start of its turn.
    actions:
      detect:
        name: Detect
        text: The harvester makes a Wisdom (Perception) check.
      stomp-attack:
        name: Stomp Attack
        text: The harvester makes a stomp attack.
      trample-attack:
        name: Trample Attack
        text: 'The harvester moves <me-distance length=''30'' /> in a straight line moving over Large or smaller creature in its path. Each creature caught in its path must succeed on a DC 19 Dexterity saving throw or take [dmg: 2d6 + 8] piercing damage and be knocked {prone}. The harvester cannot move through a Huge or larger creature.'
---